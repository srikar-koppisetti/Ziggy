import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//AngularFire, Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Components
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

//Services
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';


const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'chatroom',component:ChatroomComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
]; 

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
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
