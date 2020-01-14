var arrQuantity = document.getElementsByClassName('quantity-product');
var arrSubTotal = document.getElementsByClassName('sub-total');
var table = document.getElementById('list-cart-view');
var listBtnRemove = document.getElementsByClassName('btn-remove');

var data = JSON.parse(localStorage.getItem('products'));

var domElement = data.map(function (item, index) {
  return '<tr data-id="' + item.id + '" class="js-tb-line"><td class="js-tb-col">' + (index + 1) + '</td><td class="js-tb-col">' + item.name + '</td><td class="js-tb-col"><input type="number" min="1" class="quantity-product" value="1"></td><td class="js-tb-col">' + item.gia + '</td><td class="js-tb-col sub-total">' + item.gia + '</td><td class="js-tb-col"><button class="btn-remove">X</button></td"></tr>';
});

table.innerHTML += domElement.join('');

var finalTotal = '<tr class="js-tb-line"><td class="js-tb-col"></td><td class="js-tb-col"></td><td class="js-tb-col"></td><td class="js-tb-col">Total</td><td class="js-tb-col" id="total"></td><td class="js-tb-col"></td"></tr>';
table.innerHTML += finalTotal;
function findIndex(item) {
  for (var j = 0; j < arrQuantity.length; j++) {
    if (arrQuantity[j] === item) {
      return j;
    }
  }
  return null;
}

for (var i = 0; i < arrQuantity.length; i++) {
  arrQuantity[i].addEventListener('change', function () {
    if (this.value < 1) {
      this.value = 1;
    } else if (this.value % 1) {
      this.value = Math.ceil(this.value);
    }
    else {
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
    }
  });
}

function total() {
  var sum = 0;
  for (var x = 0; x < arrSubTotal.length; x++) {
    sum += Number(arrSubTotal[x].innerHTML);
  }
  var totalPrice = document.getElementById('total');
  totalPrice.innerHTML = sum + ' đồng';
}

total();

var z = 0;
for (z; z < listBtnRemove.length; z++) {
  listBtnRemove[z].addEventListener('click', function () {
    
    this.parentNode.parentNode.remove();
  })
}
