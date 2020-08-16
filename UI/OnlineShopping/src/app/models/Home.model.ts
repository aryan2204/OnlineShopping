export interface HomeModel {
    Product_Id: Number;
    Product_Name: String;
    Product_Description: String;
    Pictures: String;
    Unit_Price: Number;
    Quantity: Number;
    Size: String;
    Color: String;
  }
  
  
  export interface serverResponse  {
    products: HomeModel[];
    
  };