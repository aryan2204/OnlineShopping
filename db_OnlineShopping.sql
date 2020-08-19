create database [Online Shopping]
use [Online Shopping]

create table Customer(
Id int identity(101,1) primary key,
Customer_FirstName nvarchar(30) not null,
Customer_LastName nvarchar(30) not null,
Customer_EMail nvarchar(30) not null,
Customer_Mobile_Number nvarchar(30) not null,
Password nvarchar(15) not null,
Customer_Address nvarchar(100)
);

select * from Customer;
create table AdminInfo(
AdminID int PRIMARY KEY,
AdminName nvarchar(10),
admin_email nvarchar(30),
mobile nvarchar(10),
password nvarchar(10)
);

create table Retailer(
Retailer_Id int identity(1001,1) primary key,
Retailer_Name nvarchar(30),
Retailer_EMail nvarchar(30),
);
alter table Retailer
add MobileNum nvarchar(20) 
select * from Retailer
update Retailer set MobileNum = '9870645123' where MobileNum is Null


create table Payment(
Payment_Id int Primary key,
Payment_Type nvarchar(30) not null,
Payment_Status nvarchar(150) not null
);


create table Orders(
Order_Id nvarchar(10) primary key not null,
Order_Status nvarchar(50) not null,
Customer_Id INT FOREIGN KEY REFERENCES Customer(Id),
OrderNumber int IDENTITY(10000,1),
Order_Date Date default GetDate(),
Payment_Id INT FOREIGN KEY REFERENCES Payment(Payment_Id),
Unit_Price float not null,
Total_Amount float not null
);

create table OrderDetails
(
OrderDetail_Id int primary key,
Order_Id nvarchar(10) FOREIGN KEY REFERENCES Orders(Order_Id),
Product_Id int FOREIGN KEY REFERENCES  ProductDetails(Product_id),
Quantity int not null,
Order_Date Date not null,
Order_Status nvarchar(20) not null,
Ship_To nvarchar(100) not null,
Total_Amount float not null
);

CREATE TABLE ProductDetails (
Product_Id int PRIMARY KEY NOT NULL,
Product_Name nvarchar(30) NOT NULL,
Quantity int NOT NULL, 
Unit_Price float NOT NULL,
Product_Description nvarchar(150) NOT NULL,
Pictures nvarchar(500) Constraint df default 'NoImage',
Color nvarchar(20),
Size nvarchar(10) Constraint df1 default 'OneSize',
Retailer_Id INT  FOREIGN KEY REFERENCES  Retailer(Retailer_Id),
Category_Id nvarchar(10) FOREIGN KEY REFERENCES Category(Category_Id ),
BrandName nvarchar(20)
);

select * from ProductDetails

create table Category(
Category_Id nvarchar(10) PRIMARY KEY NOT NULL,
Category_Name nvarchar(20) NOT NULL,
);

create table Wishlist(
Id int identity(1,1) primary key,
Product_Id INT FOREIGN KEY REFERENCES ProductDetails(Product_Id),
Customer_Id INT FOREIGN KEY REFERENCES Customer(Id), 
Name nvarchar(20),
Qunatity int, 
Description nvarchar(150)
);


alter table ProductDetails
alter column Product_Id nvarchar(20) not null

alter table ProductDetails
drop constraint PK__ProductD__9834FBBA4174164E

alter table ProductDetails
add Primary key (Product_Id)

alter table OrderDetails
drop constraint FK__OrderDeta__Produ__25869641

alter table OrderDetails
alter column Product_Id nvarchar(20)

alter table OrderDetails 
add Foreign key (Product_Id) references ProductDetails(Product_Id)

alter table Wishlist 
drop constraint FK__Wishlist__Produc__286302EC
alter table Wishlist 
alter column Product_Id nvarchar(20)
alter table Wishlist
add Foreign key (Product_Id) references ProductDetails(Product_Id)