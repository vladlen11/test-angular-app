export class ChatModel  {

    id: number;
    userName: string;
    userMessage: string;

    constructor(
        chatData: ChatModel
    ) {
        this.id = chatData.id;
        this.userName = chatData.userName;
        this.userMessage = chatData.userMessage;
    }
}
