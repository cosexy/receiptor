export interface InvoiceEntity {
    amount: string
    account: string
    bank: string
    name: string
    code: string
    content: string

    [key: string]: any
}

export interface BankEntity {
    label: string
    value: string
    logo: string
    [key: string]: any
}
