var arrQuantity = document.getElementsByClassName('quantity-product');
var arrSubTotal = document.getElementsByClassName('sub-total');

var data = JSON.parse(localStorage.getItem('products'));

var domElement = data.map(function(item, index) {
  return '<tr class="js-tb-line"><td class="js-tb-col">' + index + 1 +'</td><td class="js-tb-col">' + item.name + '</td><td class="js-tb-col"><input type="number" min="1" class="quantity-product" value="1"></td><td class="js-tb-col">'+ item.gia + '</td><td class="js-tb-col sub-total">' + item.gia + '</td><td class="js-tb-col"><button class="btn-remove">X</button></td"></tr>';
});

var table = document.getElementById('list-cart-view');
table.innerHTML += domElement.join('');

var finalTotal = '<tr class="js-tb-line"><td class="js-tb-col"></td><td class="js-tb-col"></td><td class="js-tb-col"></td><td class="js-tb-col">Total</td><td class="js-tb-col" id="total"></td><td class="js-tb-col"></td"></tr>';
table.innerHTML += finalTotal;
function findIndex(item) {
  tmp1 = document.getElementsByClassName('quantity-product');
  for (var j = 0; j < tmp1.length; j++) {
    if (tmp1[j] === item) {
      return j;
    }
  }
  return null;
}

for (var i = 0; i < arrQuantity.length; i++) {
  document.getElementsByClassName('quantity-product')[i].addEventListener('change', function(){
    this.setAttribute('value', this.value);
    var tmp = findIndex(this);
    console.log(this.value);
    console.log(tmp)
    if (tmp !== null) {
      console.log(this.value)
      var a = data[tmp].gia * Number(this.value);
      arrSubTotal[tmp].innerHTML = a;
    }
    total();
  });
}

function total() {
  var arrListPro = document.getElementsByClassName('sub-total');
  var sum = 0;
  for (var x = 0; x < arrListPro.length; x++) {
    sum += Number(arrListPro[x].innerHTML);
  }
  var totalPrice = document.getElementById('total');
  totalPrice.innerHTML = sum;
  return sum;
}

var totalPrice = document.getElementById('total');
totalPrice.innerHTML = total();

var listBtnRemove = document.getElementsByClassName('btn-remove');

for (var z = 0; z < listBtnRemove.length; z++) {
  this.addEventListener('click', function() {
    var indexBtnRm = findIndex(this);
  })
}
