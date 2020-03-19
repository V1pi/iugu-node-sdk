import { Method } from 'axios'

export interface IuguClient {
    id?: string;
    email: string;
    name: string;
    notes?: string;
    phone?: number;
    phone_prefix?: number;
    cpf_cnpj?: string;
    cc_emails?: string;
    zip_code?: string;
    number?: string;
    street?: string;
    city?: string;
    state?: string;
    district?: string;
    complement?: string;
    custom_variables?: [];
    created_at?: Date;
    updated_at?: Date;
}

export interface IuguPaymentMethod {
    teste: string;
}

export interface IuguPaymentToken {
    id?: string;
    account_id: string;
    data: IuguCreditCard;
    method: string;
    test: boolean;
}

export interface IuguCreditCard {
    id?: string;
    number: string;
    verification_value: string;
    first_name: string;
    last_name: string;
    month: string;
    year: string;
    brand?: string;
    holderName?: string;
    displayNumber?: string;
    bin?: string;
}

export interface IuguMethod {
    method: Method;
    path: string;
    urlParams: Array<string> | [];
    checkErrors?: (data: any) => void;
}
