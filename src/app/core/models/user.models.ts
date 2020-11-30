import * as moment from 'moment';

export class UserModel {
    id: number;
    account_number_bonus: string;
    account_number_personal: string;
    account_number_partner: string;
    accounts_ids: number[];
    avatar_image: string;
    email: string;
    email_verified_at: string;
    info: any;
    is_active: boolean;
    is_default_ancestor: boolean;
    is_secure: boolean;
    is_secure_email: boolean;
    is_verified: boolean;
    subscription_infinity: boolean;
    subscription_is_active: boolean;
    last_login_at: string;
    last_login_ip: string;
    login: string;
    number: string;
    parent_id: number;
    phone: string;
    phone_verified_at: string;
    register_ip: string;
    roles: any;
    roles_ids: number[];
    user_subscription: any;
    user_subscription_ids: number[];
    security: any;
    setting: any;
    telegram_id: string;
    telegram_verified_at: string;
    user_wallets: any;
    user_wallets_ids: number[];
    users_accounts_types_numbers: any;
    users_accounts_types_numbers_ids: number[];
    updated_at: string;
    created_at: string;
    deleted_at: string;

    constructor(item: UserModel) {
        Object.keys(item).forEach((key) => this[key] = item[key] || null);
    }

    get createdAt(): string {
        return this.created_at ? `${moment(this.created_at).format('DD/MM/YYYY')}` : '';
    }
}
