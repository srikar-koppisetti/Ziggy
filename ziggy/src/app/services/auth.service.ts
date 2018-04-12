import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    public afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router:Router,
  ) {
    this.user = afAuth.authState;
   }

   get currentUserID(): string{
    return this.authState !== null ? this.authState.uid : '';
  }

  login(email:string, password:string){
    return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email,password)
              .then((resolve) => {
                const status = 'online';
                this.setUserStatus(status);
                this.router.navigate(['chatroom']);
              })
              .catch();
  }

  register(email:string, password:string, userName:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
            .then((user) => {
              this.authState = user;
              const status = 'online';
              this.setUserData(email,status,userName);
            }).catch(error => console.log(error));
  }


  setUserData(email:string,status:string,userName:string){
    const path = 'user/${this.currentUserID}';
    const data = {
      email : email,
      username: userName,
      status: status
    }
    
    this.afDb.object(path).update({
      email : email,
      username: userName,
      status: status
    }).catch(error => console.log(error));
  }

  setUserStatus(status:string){
    const path = 'user/${this.currentUserID}';
    const data = {
      status: status
    }

    this.afDb.object(path).update(data)
        .catch(error => console.log(error));
  }

}
