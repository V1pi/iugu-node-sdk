import { Method } from 'axios';
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
    id?: string;
    description?: string;
    token?: string;
    set_as_default?: boolean;
    item_type?: string;
    customer_id?: string;
    data?: IuguCreditCardExtraInfo;
}
export interface IuguPaymentToken {
    id?: string;
    account_id: string;
    data: IuguCreditCard;
    extra_info?: IuguCreditCardExtraInfo;
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
    holder_name?: string;
    display_number?: string;
    bin?: string;
}
export interface IuguCreditCardExtraInfo {
    brand?: string;
    holder_name?: string;
    display_number?: string;
    bin?: string;
    month?: string;
    year?: string;
    holder?: string;
    last_digits?: string;
    first_digits?: string;
    masked_number?: string;
}
export interface IuguMethod {
    method: Method;
    path: string;
    urlParams: Array<string> | [];
    checkErrors?: (data: any) => void;
}
export interface IuguInvoice {
    id?: string;
    due_date?: string;
    currency?: string;
    discount_cents?: string;
    email?: string;
    items_total_cents?: number;
    notification_url?: string;
    return_url?: string;
    status?: string;
    ensure_workday_due_date?: boolean;
    expired_url?: string;
    tax_cents?: string;
    updated_at?: Date;
    total_cents?: number;
    credits?: number;
    payable_with?: any;
    per_day_interest_value?: number;
    late_payment_fine?: number;
    per_day_interest?: boolean;
    ignore_canceled_email?: boolean;
    fines?: boolean;
    subscription_id?: string;
    ignore_due_email?: boolean;
    paid_at?: null;
    commission_cents?: null;
    secure_id?: string;
    secure_url?: string;
    customer_id?: null;
    user_id?: null;
    total?: string;
    taxes_paid?: string;
    commission?: string;
    interest?: null;
    discount?: null;
    created_at?: string;
    refundable?: null;
    installments?: null;
    bank_slip?: IuguBankSlip;
    items?: IuguItem[];
    variables?: IuguVariable[];
    custom_variables?: any[];
    payer?: IuguPayer;
    commissions?: any;
    early_payment_discounts?: IuguPaymentDiscount[];
    early_payment_discount?: boolean;
    total_paid_cents?: number;
    taxes_paid_cents?: string;
    paid_cents?: string;
    cc_emails?: string;
    financial_return_date?: string;
    overpaid_cents?: string;
    advance_fee_cents?: string;
    order_id?: string;
    customer_ref?: string;
    customer_name?: string;
    total_overpaid?: string;
    fines_on_occurrence_day?: string;
    total_on_occurrence_day?: string;
    fines_on_occurrence_day_cents?: number;
    total_on_occurrence_day_cents?: number;
    advance_fee?: string;
    paid?: string;
    original_payment_id?: string;
    double_payment_id?: string;
    created_at_iso?: Date;
    authorized_at?: string;
    authorized_at_iso?: string;
    expired_at?: string;
    expired_at_iso?: string;
    refunded_at?: string;
    refunded_at_iso?: string;
    canceled_at?: string;
    canceled_at_iso?: string;
    protested_at?: string;
    protested_at_iso?: string;
    chargeback_at?: string;
    chargeback_at_iso?: string;
    occurrence_date?: string;
    transaction_number?: number;
    payment_method?: string;
    financial_return_dates?: string;
    logs?: IuguLog[];
}
export interface IuguPayer {
    cpf_cnpj?: string;
    name?: string;
    phone_prefix?: string;
    phone?: string;
    email?: string;
    address?: IuguAddress;
}
export interface IuguAddress {
    zip_code?: string;
    street?: string;
    number?: string;
    district?: string;
    city?: string;
    state?: string;
    country?: string;
    complement?: string;
}
export interface IuguBankSlip {
    digitable_line?: string;
    barcode_data?: string;
    barcode?: string;
}
export interface IuguItem {
    id?: string;
    description?: string;
    price_cents?: number;
    quantity?: number;
    created_at?: Date;
    updated_at?: Date;
    price?: string;
}
export interface IuguPaymentDiscount {
    days?: number;
    percent?: number;
    value_cents?: number;
}
export interface IuguVariable {
    id?: string;
    variable?: string;
    value?: string;
}
export interface IuguLog {
    id?: string;
    description?: string;
    notes?: string;
    created_at?: string;
}
export interface IuguCharge {
    message?: string;
    errors?: any;
    success?: boolean;
    url?: string;
    pdf?: string;
    identification?: null;
    invoice_id?: string;
    LR?: string;
    method?: string;
    token?: string;
    customer_payment_method_id?: string;
    restrict_payment_method?: boolean;
    customer_id?: string;
    email?: string;
    months?: number;
    discount_cents?: number;
    bank_slip_extra_days?: number;
    keep_dunning?: boolean;
    items?: IuguItem[];
    order_id?: string;
    payer?: IuguPayer;
}
export interface IuguAccount {
    name?: string;
    commissions?: IuguCommissions;
    commission_percent?: string;
    account_id?: string;
    live_api_token?: string;
    test_api_token?: string;
    user_token?: string;
}
export interface IuguCommissions {
    percent?: string;
    credit_card_percent?: string;
    bank_slip_percent?: string;
    cents?: number;
    credit_card_cents?: number;
    bank_slip_cents?: number;
}
export interface IuguConfigAccount {
    commissions?: IuguCommissions;
    auto_withdraw?: boolean;
    fines?: string;
    per_day_interest?: string;
    late_payment_fine?: number;
    auto_advance?: string;
    auto_advance_type?: string;
    auto_advance_option?: number;
    bank_slip?: IuguConfigAccountBankSlip;
    credit_card?: IuguConfigAccountCreditCard;
    payment_email_notification?: string;
    payment_email_notification_receiver?: string;
    early_payment_discount?: string;
    early_payment_discounts?: IuguEarlyPaymentDiscount[];
    id?: string;
    name?: string;
    created_at?: Date;
    updated_at?: Date;
    'can_receive?'?: boolean;
    'is_verified?'?: boolean;
    last_verification_request_status?: string;
    last_verification_request_data?: null;
    last_verification_request_feedback?: null;
    change_plan_type?: number;
    subscriptions_trial_period?: number;
    disable_emails?: boolean;
    last_withdraw?: null;
    total_subscriptions?: number;
    reply_to?: null;
    webapp_on_test_mode?: boolean;
    marketplace?: boolean;
    default_return_url?: string;
    balance?: string;
    protected_balance?: string;
    payable_balance?: string;
    receivable_balance?: string;
    commission_balance?: string;
    volume_last_month?: string;
    volume_this_month?: string;
    taxes_paid_last_month?: string;
    taxes_paid_this_month?: string;
    custom_logo_url?: null;
    custom_logo_small_url?: null;
    informations?: IuguInformation[];
    configuration?: IuguConfiguration;
}
export interface IuguConfigAccountBankSlip {
    active?: string;
    extra_due?: number;
    reprint_extra_due?: number;
}
export interface IuguConfiguration {
    commission_percent?: number;
    bank_slip?: IuguConfigAccountBankSlip;
    credit_card?: IuguConfigAccountCreditCard;
}
export interface IuguConfigAccountCreditCard {
    active?: string;
    soft_descriptor?: string;
    installments?: string;
    max_installments?: number;
    max_installments_without_interest?: number;
    two_step_transaction?: string;
    installments_pass_interest?: string;
}
export interface IuguEarlyPaymentDiscount {
    days?: number;
    percent?: string;
}
export interface IuguInformation {
    key?: string;
    value?: string;
}
export interface IuguVerificationAccount {
    data?: IuguVerificationData;
    id?: string;
    account_id?: string;
    created_at?: Date;
}
export interface IuguVerificationData {
    price_range?: string;
    physical_products?: string;
    business_type?: string;
    person_type?: string;
    automatic_transfer?: string;
    cpf?: string;
    name?: string;
    address?: string;
    cep?: string;
    city?: string;
    state?: string;
    telephone?: string;
    bank?: string;
    bank_ag?: string;
    account_type?: string;
    bank_cc?: string;
    document_id?: number;
    document_cpf?: number;
    document_activity?: number;
}
export interface IuguInfoAccount {
    id?: string;
    name?: string;
    created_at?: Date;
    updated_at?: Date;
    'can_receive?'?: boolean;
    'is_verified?'?: boolean;
    last_verification_request_status?: string;
    last_verification_request_data?: IuguLastVerificationRequestData;
    last_verification_request_feedback?: null;
    change_plan_type?: number;
    subscriptions_trial_period?: number;
    disable_emails?: boolean;
    last_withdraw?: null;
    total_subscriptions?: number;
    reply_to?: null;
    webapp_on_test_mode?: boolean;
    marketplace?: boolean;
    auto_withdraw?: boolean;
    balance?: string;
    balance_available_for_withdraw?: string;
    balance_in_protest?: string;
    protected_balance?: string;
    payable_balance?: string;
    receivable_balance?: string;
    commission_balance?: string;
    volume_last_month?: string;
    volume_this_month?: string;
    taxes_paid_last_month?: string;
    taxes_paid_this_month?: string;
    custom_logo_url?: null;
    custom_logo_small_url?: null;
    informations?: IuguInformation[];
}
export interface IuguLastVerificationRequestData {
    price_range?: string;
    physical_products?: string;
    business_type?: string;
    person_type?: string;
    automatic_transfer?: string;
    cpf?: string;
    name?: string;
    address?: string;
    cep?: string;
    city?: string;
    state?: string;
    telephone?: string;
    bank?: string;
    bank_ag?: string;
    account_type?: string;
    bank_cc?: string;
    document_id?: string;
    document_cpf?: string;
    document_activity?: string;
}
export interface IuguWithdrawRequest {
    id?: string;
    amount?: number;
    custom_variables?: IuguCustomVariable[];
}
export interface IuguCustomVariable {
    name?: string;
    value?: string;
}
//# sourceMappingURL=models.d.ts.map