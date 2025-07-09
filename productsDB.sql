
drop table if exists purchase_details;
drop table if exists purchases;
drop table if exists clients;
drop table if exists products;
drop table if exists suppliers;


create table suppliers(h
	id int generated always as identity primary key,
	code varchar(30) not null,
	name varchar(90) not null,
	last_name varchar(90) not null,
	address varchar(180) not null
);

drop index if exists idx_supplier_code;
create index if not exists idx_supplier_code on suppliers using hash (code);

create table products(
	id int generated always as identity primary key,
	name varchar(180) not null,
	code varchar(30) not null,
	unit_price numeric not null,
	id_supplier int not null,
	foreign key (id_supplier) references suppliers(id)
);

create table clients(
	id int generated always as identity primary key,
	name varchar(90) not null,
	last_name varchar(90) not null,
	curp varchar(60) not null,
	address varchar(180) not null,
	birth_date date not null 
);

create table purchases(
	id int generated always as identity primary key,
	purchase_date date not null,
	total numeric not null,
	iva decimal(10, 2) not null,
	subtotal numeric not null,
	id_cliente int not null,
	foreign key (id_cliente) references clients(id)
); 

create table purchase_details(
	id int generated always as identity primary key,
	acquired_quantity int check (acquired_quantity  > 0) not null,
	charge numeric not null,
	id_purchase int not null,
	id_product int not null,
	foreign key (id_purchase) references purchases(id),
	foreign key (id_product) references products(id)
);