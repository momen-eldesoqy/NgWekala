import { OrderItem } from "./order-item";

export class Order {
    id: number = 0 ;
    email: string = "" ;
    shipToName: string = "";
    shipToStreet: string = "";
    shipToCity: string = "";
    shipToCountry: string = "";
    orderDate: string = "";
    status: string = "";
    subTotal: number = 0;
    paymentType: string = "";
    deliveryMethod: string = "";
    orderItems: OrderItem[] = [] ;
    total: number = 0 ;
}

export interface IorderDto{
  "cartId": string,
  "deliveryMethodId": number,
  "shipTo_Name": string,
  "shipTo_Street": string,
  "shipTo_City": string,
  "shipTo_Country": string
}