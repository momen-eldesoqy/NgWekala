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
