import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';
import { User } from '../models/user.model';

@Injectable()
export class ChatService {

  chatMessages: AngularFireList<any>;
  chatMessage: ChatMessage;
  user: any;
  userName: Observable<String>;


  constructor(
    public afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if(auth != undefined && auth !== null){
        this.user = auth;
      }
    })
  }

  //send messages to DB
  sendMessage(msg:string){
    const time = this.getTimeStamp();
    //const email = this.user.email;
    const email = 'test@zippy.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: time,
      // userName: this.userName,
      username: 'test-user',
      email: email
    });
  }

  //get all messages
  getMessages(){
    return this.afDb.list('messages', ref => ref.limitToFirst(25).orderByKey());
  }
  //get time
  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                  (now.getUTCMonth() + 1) + '/' +
                  now.getUTCDay(); 

    const time = now.getUTCHours() + ':' +
                  now.getUTCMinutes() + ':' +
                  now.getUTCSeconds();

    return (date + ' ' + time);              
  }


}
