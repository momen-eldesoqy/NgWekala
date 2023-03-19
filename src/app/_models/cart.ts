export interface ICart {
    "id": string;
    "items": [
        {
            "product_Id": number,
            "product_Name": string,
            "product_Price": string,
            "product_Quantity": string,
            "product_Image": string
        }
    ];
    "deliveryMethodId": 0
}
