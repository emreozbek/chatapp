import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ChatService} from "../chat.service";
import {ChatModel} from "../../core/models/chat";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
  @Output() openChatSidebar: EventEmitter<string> = new EventEmitter();
  subscription: Subscription;
  chats$: Observable<ChatModel[]>;

  constructor(private service: ChatService) {
    this.chats$ = service.chats.asObservable();
  }

  ngOnInit() {
    this.service.getChats();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
