
CREATE DATABASE bamazon

USE bamazon;


CREATE TABLE products(
id INT  AUTO_INCREMENT,
product_name VARCHAR(75) NOT NULL,
department_name VARCHAR(25) NOT NULL,
price DECIMAL(5, 2) NOT NULL,
stock_qty INT(10) NULL,
PRIMARY KEY (id));



INSERT INTO products 

(product_name,department_name,price,stock_qty ) 


Values

("dirt","drink",1.00,5),
("gold","drink",10,10),
("pepsi","drink",1.50,10),
("sprite","drink",2.00,7),
("pizza","drink",1.00,3),
("G","drink",2.00,6),
("pink","drink",2.00,5),
("grap","drink",3.00,4),
("purple","drink",1.00,5),
("beer","drink",2.00,10),
("vape","drink",1.00,5),
("open","drink",2.00,10);




           