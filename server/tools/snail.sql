create table books
(
  id int auto_increment
  primary key,
  createdAt datetime not null,
  createdBy varchar(50) not null,
  updatedAt datetime not null,
  updatedBy varchar(50) not null,
  isbn varchar(20) not null,
  openId varchar(50) not null,
  title varchar(100) not null,
  image varchar(100) null,
  alt varchar(100) null,
  publisher varchar(100) null,
  summary varchar(4000) null,
  price varchar(100) null,
  rate float null,
  tags varchar(255) null,
  authors varchar(255) null,
  count int default '0' null
)
  engine=InnoDB charset=utf8
;

CREATE TABLE comments (
  id        INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  createdAt DATETIME        NOT NULL,
  createdBy VARCHAR(50)     NOT NULL,
  updatedAt DATETIME        NOT NULL,
  updatedBy VARCHAR(50)     NOT NULL,

  openId    VARCHAR(100),
  bookId    VARCHAR(100),
  comment  VARCHAR(100),
  phoneType VARCHAR(100),
  location  VARCHAR(100)
)
  ENGINE = InnoDB
CHARSET = utf8


