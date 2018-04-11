import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  allMessages: any[];

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {
    this.getAllMessagesfromChatService();
    
  }

  ngOnChange(){
    this.getAllMessagesfromChatService();
  }

  getAllMessagesfromChatService(){
    var x = this.chatService.getMessages();
    x.snapshotChanges().subscribe(item =>{
      this.allMessages = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"]=element.key;
        this.allMessages.push(y as ChatMessage);
      })
    });
  }

}
