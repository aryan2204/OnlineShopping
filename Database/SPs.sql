use [Online Shopping]

create proc UpdateProductDetails(@id int, @name nvarchar(20), @quan int, @price float, @prodDescription nvarchar(20), @brand nvarchar(20), @size nvarchar(10), @col nvarchar(20),@pic nvarchar(500))
as 
begin 
update ProductDetails set  Product_Name = @name, Quantity = @quan, Unit_Price=@price, Product_Description =  @prodDescription , BrandName = @brand, Size =@size, Color = @col, Pictures = @pic where Product_Id = @id 
end

create proc InsertProductDetails(@id int, @name nvarchar(20), @quan int, @price float, @prodDescription nvarchar(20), @brand nvarchar(20), @size nvarchar(10), @col nvarchar(20),@pic nvarchar(500))
as 
begin 
insert into ProductDetails(Product_Id ,Product_Name,Quantity, Unit_Price, Product_Description, BrandName,Size,Color,Pictures) values (@id,@name,@quan,@price,@prodDescription,@brand,@size,@col,@pic)
end

create proc DeleteProductDetails(@id int)
as
begin 
delete from ProductDetails where Product_Id  = @id 
end

create proc ViewProductDetails
as
begin 
select * from ProductDetails
end
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
create proc UpdateAdminPassword(@pass nvarchar(20), @name nvarchar(20))
as 
begin 
update AdminInfo set password = @pass where AdminName = @name
end

create proc UpdateCustomerPassword(@pass nvarchar(20), @email nvarchar(30))
as 
begin 
update Customer set Password = @pass where Customer_EMail = @email
end

create proc UpdateRetailerPassword(@pass nvarchar(20), @name nvarchar(20))
as 
begin 
update Retailer set password = @pass where Retailer_Username= @name
end
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
create proc LoginAdmin(@pass nvarchar(10))
as 
begin 
select AdminName from AdminInfo where password = @pass
end

create proc LoginRetailer(@pass nvarchar(15))
as 
begin 
select Retailer_Name from Retailer where Password = @pass
end
-------------------------------------------------------------------------------------------
create proc LoginCustomer(@pass nvarchar(15))
as 
begin 
select ('Customer_FirstName' + 'Customer_LastName') from Customer where password = @pass
end

create proc LoginCustomer1(@pass nvarchar(15))
as 
begin 
select Customer_EMail from Customer where password = @pass
end