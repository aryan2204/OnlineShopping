export interface HomeModel {
    Product_Id: number;
    Product_Name: String;
    Product_Description: String;
    Pictures: String;
    Unit_Price: number;
    Quantity: number;
    Size: String;
    Color: String;
  }
  
  
  export interface serverResponse  {
    products: HomeModel[];
    
  };