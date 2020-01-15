listItem = document.getElementById('list-item');
listItem0 = document.getElementById('list-item');
listItem1 = document.getElementById('list-item-2');

function renderList (start, end, tag) {
  var i = start;
  for (i; i < end; i++) {
    var liList = document.createElement('li');
    liList.className = 'js-list-item-li';

    var divList = document.createElement('div');
    divList.className = 'js-item';

    var imageItem = document.createElement('img');
    imageItem.className = 'image-item'
    imageItem.src = listProducts[i].src;
    imageItem.setAttribute('width', '100%');
    imageItem.setAttribute('height', '100%');
    imageItem.setAttribute('data-original', listProducts[i].src);

    var h3Item = document.createElement('h3');
    h3Item.append(listProducts[i].name);

    var divPriceItem = document.createElement('div');
    divPriceItem.className = "price-item";
    var strong = document.createElement('strong');
    strong.append(listProducts[i].gia);
    divPriceItem.append(strong);

    var divContentItem = document.createElement('div');
    divContentItem.className = 'content-item';
    divContentItem.append(listProducts[i].content);

    var paraContentItem = document.createElement('p');
    paraContentItem.append(listProducts[i].content);

    var divAddToCart = document.createElement('div');
    divAddToCart.className = 'add-tocart';
    var btnAdd = document.createElement('button');
    btnAdd.className = 'btn-add-tocart';
    btnAdd.setAttribute('data-meta', listProducts[i].id + '');
    btnAdd.append('Add to Cart');
    divAddToCart.append(btnAdd);

    divList.append(imageItem);
    divList.append(h3Item);
    divList.append(divPriceItem);
    divList.append(divContentItem);
    divList.append(divAddToCart);

    liList.append(divList);
    tag.append(liList);
  }
}

// renger html
renderList(0, 4, listItem0);
renderList(4, 8, listItem1);

//set evenlistener for button
listButton = document.getElementsByClassName('btn-add-tocart');
for (var a = 0; a < listButton.length; a++) {
  listButton[a].addEventListener('click', function () {
    var idPro = Number(this.getAttribute('data-meta'));
    addToCart(idPro)
    saveProducts();
  });
}
