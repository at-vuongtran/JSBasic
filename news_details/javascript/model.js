var str = localStorage.getItem('list-comment');
var listComment = [];
if (!str) {
	listComment = [
		{
			id: 1,
			name: 'Dung Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			id: 2,
			name: 'Kien Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			id: 3,
			name: 'Thach Nguyen',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		},
		{
			id: 4,
			name: 'Luan Huynh',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dicta cumque. Veniam maxime odio tenetur? Ab quasi impedit explicabo, soluta iste non autem mollitia molestiae, ratione ducimus ullam perferendis a.'
		}
	];
} else {
	listComment = JSON.parse(str)
}

var count = listComment.length > 0 ? listComment[listComment.length - 1].id + 1 : 1;

function getIndexById (id) {
	var i = 0;
	for (i; i< listComment.length; i++) {
		if (listComment[i].id === id) {
			return i;
		}
	}
	return -1;
}
