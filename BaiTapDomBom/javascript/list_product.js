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

listItem = document.getElementById('list-item');
var str = '';
var i = 0;
for (i; i < 4; i++) {
  str += '<li class="js-list-item-li"><div class="js-item"><img width="100%" height="100%" class="image-item" data-original="' +listProducts[i].src + '" class=" lazyloaded" alt="OPPO A5 (2020) 64GB" src="' + listProducts[i].src +'"><h3>' + listProducts[i].name + '</h3><div class="price"><strong>' + listProducts[i].gia +'₫</strong></div><div class="promo noimage"><p>' + listProducts[i].content + '</p></div><label class="discount">GIẢM 300.000₫</label><div class="add-tocart"><button class="btn-add-tocart" data-meta="' + listProducts[i].id + '">Add to cart</button></div></div></li>';
}
listItem.innerHTML = str;
listItem2 = document.getElementById('list-item-2');
var str2 = '';
for (i; i < 8; i++) { 
  str2 += '<li class="js-list-item-li"><div class="js-item"><img width="100%" height="100%" class="image-item" data-original="' +listProducts[i].src + '" class=" lazyloaded" alt="OPPO A5 (2020) 64GB" src="' + listProducts[i].src +'"><h3>' + listProducts[i].name + '</h3><div class="price"><strong>' + listProducts[i].gia +'₫</strong></div><div class="promo noimage"><p>' + listProducts[i].content + '</p></div><label class="discount">GIẢM 300.000₫</label><div class="add-tocart"><button class="btn-add-tocart" data-meta=1 id="btn-' + listProducts[i].id + '">Add to cart</button></div></div></li>';
}
listItem2.innerHTML = str2;

listButton = document.getElementsByClassName('btn-add-tocart');
for (var a = 0; a < listButton.length; a++) {
  listButton[a].addEventListener('click', function(){
    var idPro = this.getAttribute('data-meta');
    var objSelected = listProducts.find(function(item) {
      return item.id === Number(idPro);
    });
    var saveString = localStorage.getItem('products');
    if (saveString === null) {
      saveString = '[]';
    }
    arrSave = JSON.parse(saveString);
    arrSave.push(objSelected);
    saveString = JSON.stringify(arrSave);
    localStorage.setItem('products', saveString);
    this.disabled = true;
  });
}
