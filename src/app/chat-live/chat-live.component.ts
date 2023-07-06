import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-live',
  templateUrl: './chat-live.component.html',
  styleUrls: ['./chat-live.component.css']
})
export class ChatLiveComponent {

  messages: string[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }

}
