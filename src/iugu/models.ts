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
  holderName?: string;
  displayNumber?: string;
  bin?: string;
}

export interface IuguCreditCardExtraInfo {
  brand?: string;
  holderName?: string;
  displayNumber?: string;
  bin?: string;
  month?: string;
  year?: string;
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
  taxes_paid_cents?: null;
  paid_cents?: null;
  cc_emails?: null;
  financial_return_date?: null;
  overpaid_cents?: null;
  advance_fee_cents?: null;
  order_id?: null;
  customer_ref?: null;
  customer_name?: null;
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
