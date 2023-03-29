
export interface ICart {
    "id": string;
    "items": ICartItem[]
}

export interface ICartItem {
    "product_Id": number,
    "product_Name": string,
    "product_Price": number,
    "product_Quantity": number,
    "product_Image": string
}