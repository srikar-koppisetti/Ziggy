import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage; 
  userEmail: string;
  userName:string;
  messageContent: string;
  timeStamp: Date = new Date();
  //isOwnerMessage:boolean;

  constructor(
    public chatService: ChatService,
    public authService: AuthService
  ) { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.userEmail = chatMessage.email;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.username;
    console.log(this.userEmail);
    console.log(this.timeStamp);
    console.log(this.userName);
  }

}
