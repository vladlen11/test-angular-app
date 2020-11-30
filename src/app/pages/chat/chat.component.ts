import {Component, OnInit} from '@angular/core';
import {ChatModel} from '../../core/models/chat.models';
import {ChatService} from '../../core/services/chat.service';
import {BlogModel} from '../../core/models/blog';
import {ActivatedRoute, Router} from '@angular/router';
import { interval } from 'rxjs';
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    chat: ChatModel[] = [];

    message: any = [];



    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private chatService: ChatService
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.chat = data.chatData;
        });

        const subscription = interval(3000).subscribe(() => {
            this.route.data.subscribe(data => {
                this.chat = data.chatData;
            });

            if (this.router.url !== '/chat') {
                subscription.unsubscribe();
            }
        });
    }


    sendMessage(sendForm) {
        console.log(sendForm.value, 'sendForm');
        this.message = [
            {
                id: 10,
                userName:   sendForm.value.user,
                userMessage:   sendForm.value.message
            }
        ];

        this.chatService.sendMessage(this.message);

    }

}
