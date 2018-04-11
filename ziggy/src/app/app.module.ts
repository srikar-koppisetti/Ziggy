import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ChatformComponent } from './components/chatform/chatform.component';
import { MessageComponent } from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ChatroomComponent,
    ChatformComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
