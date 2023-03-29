export interface IOrder {
    "id": number;
    "email": string;
    "shipTo_Name": string;
    "shipTo_Street": string;
    "shipTo_City": string;
    "shipTo_Country": string;
    "orderDate": string;
    "status": string;
    "subTotal": number;
    "paymentType": string;
    "deliveryMethod": string;
    "orderItems": [
      {
        "product_Id": number,
        "product_Name": string,
        "product_Price": number,
        "product_Quantity": number,
        "product_Image": string
      }
    ],
    "total": number
}

export interface IorderDto{
  "cartId": string,
  "deliveryMethodId": number,
  "shipTo_Name": string,
  "shipTo_Street": string,
  "shipTo_City": string,
  "shipTo_Country": string
}