export class PaywayModel {
    //
    // id: number;
    // code: string;
    // currency: any;

    key: string;
    // base: string;
    // date: string;

    constructor(
        paywayData: PaywayModel
    ) {
        this.key = paywayData.key;
        // this.base = paywayData.base;
        // this.date = paywayData.date;
    }

}