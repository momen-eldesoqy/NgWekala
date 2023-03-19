export interface IStore {
    "id": number;
    "name": string;
    "description": string;
    "street": string;
    "city": string;
    "country": string;
    "supplier_Id": string;
    "products": [
      {
        "id": number,
        "name": string,
        "description": string,
        "price": number,
        "quantity": number,
        "brand_Id": number,
        "category_Id": number,
        "store_Id": number
      }
    ]
}
