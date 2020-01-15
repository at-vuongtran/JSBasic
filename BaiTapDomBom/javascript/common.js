var Phone = function (id, name, content, gia, src) {
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

function findProductById (id) {
  return listProducts.find(function (item) {
    return item.id === id;
  });
}

var listProducsInCart = JSON.parse(localStorage.getItem("products"));

var Item = function (id, quantity) {
  this.id = id;
  this.quantity = quantity;
}

function findItemById (id) {
  return listProducsInCart.find(function (item) {
    return item.id === id;
  });
}

function findIndex (id) {
  var i = 0;
  for (i; i < listProducsInCart.length; i++) {
    if (listProducsInCart[i].id === id) {
      return i;
    }
  }
  return null;
}

function removeById (id) {
  var index = findIndex(id);
  if (index !== null) {
    listProducsInCart.splice(index, 1);
  }
}

//add to list products in cart

function addToCart (id) {
  var tmp = findItemById(id);
  console.log(tmp);
  if (tmp) {
    tmp.quantity += 1;
  } else {
    var item = new Item(id, 1);
    console.log(item)
    listProducsInCart.unshift(item);
  }
}

//save product to local storage
function saveProducts (id) {
  var saveStr = JSON.stringify(listProducsInCart);
  localStorage.setItem('products', saveStr);
}
