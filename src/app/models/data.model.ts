export interface Client {
    wechatId: string;
    name?: string;
    gender?: string;
    orderHistory?: OrderHistory[];
    university?: string;
    address?: any;
    friends?: any;
    status?: string;
    createdDate?: Date | number;
}

export interface OrderHistory{
    orderDate: Date | number;
    income: number;
    totalQuantity: number;
    detail: OrderDetail[]
}

export interface OrderDetail{
    country: string;
    number: number;
    name: string;
}
export class MenuItem{
    
}

export interface Cig{
    name:string,
    country:string;
    brand?: string;
}


export interface DropDownItem {
    id: number;
    value: string;
    code?: string
}