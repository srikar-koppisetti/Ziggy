import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {

  message:string;

  constructor(
    public chat: ChatService
  ) { }

  ngOnInit() {
  }

  send(){
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event){
    if(event.keyCode === 13){
      this.send();
    }
  }
}
