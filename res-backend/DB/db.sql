USE restaurant;

DROP TABLE if exists VentaPlato;
DROP TABLE if exists Venta;
DROP TABLE if exists Plato;
DROP TABLE if exists Mesa;
DROP TABLE if exists Administrador;

CREATE TABLE Administrador (
    admin_id INT auto_increment PRIMARY KEY,
    admin_nombres VARCHAR(40) NOT NULL,
    admin_apellidos VARCHAR(40) NOT NULL,
    admin_username VARCHAR(40) NOT NULL,
    admin_password VARCHAR(60) NOT NULL,
    admin_rol VARCHAR(40) NOT NULL
);

CREATE TABLE Plato (
    plato_id INT auto_increment PRIMARY KEY,
    plato_name VARCHAR(50) NOT NULL,
    plato_price FLOAT NOT NULL
);

CREATE TABLE Mesa (
    mesa_id INT auto_increment PRIMARY KEY,
    mesa_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Venta (
    venta_id INT auto_increment PRIMARY KEY,
    venta_date DATE,
    venta_time TIME,
    mesa_id INT,
    estado BOOLEAN, 
    venta_total FLOAT,
    venta_yape FLOAT,
    FOREIGN KEY (mesa_id) REFERENCES Mesa(mesa_id)
);

CREATE TABLE VentaPlato (
    venta_plato_id INT AUTO_INCREMENT PRIMARY KEY,
    venta_id INT,
    plato_id INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES Venta(venta_id),
    sub_total FLOAT,
    FOREIGN KEY (plato_id) REFERENCES Plato(plato_id)
);
