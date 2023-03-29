export interface IProduct {
  
    id:number,
    name: string
    description: string,
    price: number,
    quantity: number,
    brand_Id: number,
    brandName: string,
    category_Id: number,
    categoryName: string,
    store_Id: number,
    storeName: string,
    newPrice: number,
    promotionalText: string,
    reviews: [
      {
        pro_Review: string
      }
    ]
}
/*
{
  "id": 0,
  "name": "string",
  "description": "string",
  "price": 0,
  "quantity": 0,
  "brand_Id": 0,
  "brandName": "string",
  "category_Id": 0,
  "categoryName": "string",
  "store_Id": 0,
  "storeName": "string",
  "newPrice": 0,
  "promotionalText": "string",
  "reviews": [
    {
      "pro_Review": "string"
    }
  ]
}

*/