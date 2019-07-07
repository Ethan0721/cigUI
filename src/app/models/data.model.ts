export class Client {
    wechatId: string;
    name?: string;
    gender?: string;
    orderHistory?: orderHistory[];
    university?: string;
    address?: any;
    friends?: any;
    status?: string;
    createdDate?: Date | number;
}

export class orderHistory{
    orderDate: Date | number;
    income: number;
    totalQuantity: number;
    detail: orderDetail[]
}

export class orderDetail{
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