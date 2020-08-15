use [Online Shopping] 

create proc UpdateProductForRetailer(@id int, @name nvarchar(20), @quan int, @price float) 
as 
begin 
update ProductDetails set  Product_Name = @name, Quantity = @quan, Unit_Price=@price where Product_Id= @id 
end


create proc DeleteProductForRetailer(@name nvarchar(20))
as
begin 
delete from ProductDetails where Product_Name = @name
end

create proc InsertRetailer(@name nvarchar(30), @email nvarchar(30), @num nvarchar(30))
as 
begin 
insert into Retailer values(@name,@email,@num)
end

select * from Retailer
delete from Retailer where MobileNum is null