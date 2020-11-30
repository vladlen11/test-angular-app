import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChatModel} from '../models/chat.models';
import {map} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(
        private http: HttpClient,

    ) {
    }

    getChat(): Observable<any> {
        return this.http.get('/assets/chat.json').pipe(map((response: any) => response.map(item => new ChatModel(item))));
    }

    sendMessage(message: ChatModel ): Observable<ChatModel> {
        return this.http.post<ChatModel>('/assets/chat.json', message);
    }

}
