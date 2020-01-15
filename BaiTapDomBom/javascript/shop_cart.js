var arrQuantity = document.getElementsByClassName('quantity-product');
var data = JSON.parse(localStorage.getItem('products'));
var table = document.getElementById('list-cart-view');
var index = 0;
for (index; index < data.length; index++) {
  var obj = findProductById(data[index].id);
  var trow = document.createElement('tr');
  trow.setAttribute('data-id', data[index].id);
  trow.className = 'js-tb-line';

  var tdNo = document.createElement('td');
  tdNo.className = 'js-tb-col';
  tdNo.append((index + 1));

  var tdPro = document.createElement('td');
  tdPro.className = 'js-tb-col';
  tdPro.append(obj.name);

  var tdQuantity = document.createElement('td');
  tdQuantity.setAttribute('data-id', data[index].id);
  tdQuantity.className = 'js-tb-col';
  var input = document.createElement('input');
  input.className = 'quantity-product';
  input.type = 'number';
  input.value = Number(data[index].quantity);
  input.min = 1;
  tdQuantity.append(input);

  var tdPrice = document.createElement('td');
  tdPrice.className = 'js-tb-col';
  tdPrice.append(obj.gia + ' đồng');

  var tdSubTotal = document.createElement('td');
  tdSubTotal.className = 'js-tb-col sub-total';
  tdSubTotal.setAttribute('data', data[index].quantity * obj.gia);
  tdSubTotal.append(data[index].quantity * obj.gia + ' đồng');

  var tdAction = document.createElement('td');
  tdAction.className = 'js-tb-col';
  var buttonRM = document.createElement('button');
  buttonRM.className = 'btn-remove';
  buttonRM.append('X');
  tdAction.append(buttonRM);

  trow.append(tdNo);
  trow.append(tdPro);
  trow.append(tdPrice);
  trow.append(tdQuantity);
  trow.append(tdSubTotal)
  trow.append(tdAction);
  table.append(trow);
}

var trow = document.createElement('tr');
trow.className = 'js-tb-line';

var tdNo = document.createElement('td');
tdNo.className = 'js-tb-col';

var tdPro = document.createElement('td');
tdPro.className = 'js-tb-col';

var tdQuantity = document.createElement('td');
tdQuantity.className = 'js-tb-col';
tdQuantity.append('Total');

var tdPrice = document.createElement('td');
tdPrice.className = 'js-tb-col';

var tdSubTotal = document.createElement('td');
tdSubTotal.className = 'js-tb-col'
tdSubTotal.id = 'total';

var tdAction = document.createElement('td');
tdAction.className = 'js-tb-col';

trow.append(tdNo);
trow.append(tdPro);
trow.append(tdPrice);
trow.append(tdQuantity);
trow.append(tdSubTotal)
trow.append(tdAction);
table.append(trow);

var arrSubTotal = document.getElementsByClassName('sub-total');
var listInput = document.getElementsByClassName('quantity-product');
var totalPrice = document.getElementById('total');
var listButtonRM = document.getElementsByClassName('btn-remove');

total();
var i = 0;
for (i; i < listInput.length; i++) {
  listInput[i].addEventListener('change', function () {
    if (this.value < 1) {
      this.value = 1;
    } else {
      if (this.value % 1) {
        this.value = Math.ceil(this.value);
      }
      this.setAttribute('value', this.value);
      var parentID = this.parentNode.getAttribute('data-id');
      var tmp = findProductById(Number(parentID));
      if (tmp) {
        var a = tmp.gia * Number(this.value);
        var index = findIndex(tmp.id);
        arrSubTotal[index].innerHTML = a + ' đồng';
        arrSubTotal[index].setAttribute('data', a);
      }
      total();
    }
  });
}

//function to total prices. it's called when change quantity product or remove or first render this page 
function total () {
  var sum = 0;
  for (var x = 0; x < arrSubTotal.length; x++) {
    sum += Number(arrSubTotal[x].getAttribute('data'));
  }
  totalPrice.innerHTML = sum + ' đồng';
}

for (i = 0; i < listButtonRM.length; i++) {
  listButtonRM[i].addEventListener('click', function () {
    var tr = this.parentNode.parentNode;
    id = Number(tr.getAttribute('data-id'));
    removeById(id);
    saveProducts();
    tr.remove();
    total();
  });
}
