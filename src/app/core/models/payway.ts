export class PaywayModel {

    id: number;
    code: string;
    currency: any;

    constructor(
        paywayData: PaywayModel
    ) {
        this.id = paywayData.id;
        this.code = paywayData.code;
        this.currency = paywayData.currency;
    }

}