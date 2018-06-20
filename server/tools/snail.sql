CREATE TABLE books (
  id        INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  createdAt DATETIME        NOT NULL,
  createdBy VARCHAR(50)     NOT NULL,
  updatedAt DATETIME        NOT NULL,
  updatedBy VARCHAR(50)     NOT NULL,

  isbn      VARCHAR(20)     NOT NULL,
  openId    VARCHAR(50)     NOT NULL,

  title     VARCHAR(100)    NOT NULL,
  image     VARCHAR(100),
  alt       VARCHAR(100),
  publisher VARCHAR(100),
  summary   VARCHAR(4000),
  price     VARCHAR(100),
  rate      FLOAT,
  tags      VARCHAR(255),
  authors   VARCHAR(255)
) DEFAULT CHARSET = utf8
