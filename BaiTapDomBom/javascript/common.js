var Phone = function(id, name, content, gia, src) {
  this.id = id;
  this.name = name;
  this.content = content;
  this.gia = gia;
  this.src = src;
}

var phone1 = new Phone(01, 'OPPO A5 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone2 = new Phone(02, 'OPPO A6 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone3 = new Phone(03, 'OPPO A7 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone4 = new Phone(04, 'OPPO A8 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone5 = new Phone(05, 'OPPO A9 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone6 = new Phone(06, 'OPPO A10 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone7 = new Phone(07, 'OPPO A11 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');
var phone8 = new Phone(08, 'OPPO A12 (2020) 64GB', 'Cơ hội trúng 2020 Chuột vàng',3900000, 'https://cdn.tgdd.vn/Products/Images/42/210441/TimerThumb/oppo-a5-2020.jpg');

listProducts = [phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8];

function findProductById(id) {
  return listProducts.find(function (item) {
    return item.id === id;
  });
}

var listProducsInCart = [];

var Item = function (id, quantity) {
  this.id = id;
  this.quantity = quantity;
}

function findItemById(id) {
  return listProducsInCart.find(function (item) {
    return item.id === id;
  });
}