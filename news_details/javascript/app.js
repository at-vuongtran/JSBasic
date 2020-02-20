var me = 'Vuong Tran';

var jsListComment = document.getElementById('js-list-comments');
var jsButtonPost = document.getElementById('js-button-post');
var commentDetail = document.getElementById('comment');

listHtml = listComment.map(function (item) {
	return '<div class="comment-item" data-id="' + item.id + '"><img src="./images/avatar.svg" alt="avatar load failed" class="comment-item-avatar" width="30px"><div class="comment-item-content"><h4 class="comment-item-username">' + item.name + '</h4><p>' + item.content + '</p></div><div class="btn-area"><button type="button" class="btn-remove" onclick="onRemove(' + item.id + ')">X</button></div></div>';
});

jsListComment.innerHTML = listHtml.join('');

commentDetail.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		sendComment();
	}
});

jsButtonPost.addEventListener('click', sendComment);

function sendComment() {
	var mesage = commentDetail.value.trim();
	if (mesage !== '') {
		postData(mesage);
		jsListComment.innerHTML += '<div class="comment-item" data-id="' + count + '"><img src="./images/avatar.svg" alt="avatar load failed" class="comment-item-avatar" width="30px"><div class="comment-item-content"><h4 class="comment-item-username">' + me + '</h4><p>' + mesage + '</p></div><div class="btn-area"><button type="button" class="btn-remove" onclick="onRemove(' + count + ')">X</button></div></div>';
		listComment.push({ id: count++, name: me, content: mesage });
		localStorage.setItem('list-comment', JSON.stringify(listComment));
	}
	commentDetail.value = '';
	mesage = '';
}
function postData(mesage) {
	// do some thing with Ajax
	console.log(mesage);
}

function onRemove(id) {
	elmListComment = document.getElementsByClassName('comment-item');
	var j = 0;
	for (j; j < elmListComment.length; j++) {
		if (Number(elmListComment[j].getAttribute('data-id')) === id) {
			listComment.splice(getIndexById(id), 1);
			localStorage.setItem('list-comment', JSON.stringify(listComment));
			elmListComment[j].remove();
		}
	}
}
