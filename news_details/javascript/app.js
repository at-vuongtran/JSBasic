var str = localStorage.getItem('list-comment');
var listComment = [];
if (!str) {
	listComment = [
		{
			name: 'Dung Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			name: 'Kien Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			name: 'Thach Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			name: 'Luan Huynh',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		}
	];
} else {
	listComment = JSON.parse(str)
}
var me = 'Vuong Tran';

var jsListComment = document.getElementById('js-list-comments');
var jsButtonPost = document.getElementById('js-button-post');
var commentDetail = document.getElementById('comment');

listHtml = listComment.map(function(item){
	return '<div class="comment-item"><img src="./images/avatar.svg" alt="avatar load failed" class="comment-item-avatar" width="30px"><div class="comment-item-content"><h4 class="comment-item-username">' + item.name + '</h4><p>' + item.content + '</p></div><div class="btn-area"><button type="button" class="btn-remove">X</button></div></div>';
});

jsListComment.innerHTML = listHtml.join('');

jsButtonPost.addEventListener('click', sendComment);
commentDetail.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		sendComment();
	}
});

function sendComment() {
	var mesage = commentDetail.value.trim();
	if (mesage !== '') {
		postData(mesage);
		jsListComment.innerHTML += '<div class="comment-item"><img src="./images/avatar.svg" alt="avatar load failed" class="comment-item-avatar" width="30px"><div class="comment-item-content"><h4 class="comment-item-username">' + me + '</h4><p>' + mesage + '</p></div><div class="btn-area"><button type="button" class="btn-remove">X</button></div></div>';
		listComment.push({name: me, content: mesage});
		localStorage.setItem('list-comment', JSON.stringify(listComment));
	}
	commentDetail.value = '';
	mesage = '';
}
function postData(mesage) {
	// do some thing with Ajax
	console.log(mesage);
}
