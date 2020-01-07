var anwser1 = document.getElementById("question1");
var anwser2 = document.getElementById("question2");
var anwser3 = document.getElementById("question3");
var anwser4 = document.getElementById("question4");
var anwser5 = document.getElementById("question5");

anwser1.append("typeof null = object, typeof undefined = undefined. bien khai bao nhung ko dinh nghia gia tri thi mac dinh bang undefine, null duoc khai bao vi du 'var a = null'. ");
anwser2.append("user-trict la che do kiem tra code nghiem ngat duoc dat o dau khoi code. Khong the su dung cac bien, function ma khong khai bao truoc... Viec su dung use-trict giup code chat che, de hieu hon, chinh xac hon.")

anwser3.append("== so sanh tuong doi, === so sanh tuyet doi kiem tra kieu du lieu co giong nhau hay khonng. khi so sanh == du lieu bi ep kieu roi so sanh. Vi du xem tai phan console")

function show_difference(){
  var a = "";
  if(a == 0) console.log("so sanh == ket qua: true");
  if(a === 0) console.log("so sanh === ket qua: true");
  else console.log("so sanh === ket qua: false");
}
console.log(show_difference);
show_difference();

anwser4.append("Voi var bien co kha nang truy cap o moi cho ngoai ra ta co the var 1 bien nhieu lan, gia tri mat di la undefine, co hoisting. let pham vi trong block hien tai cua no, khong the su dung bien ma chua khai bao. const tuong tu let nhung const chi duoc dinh nghia 1 lan va khong bi modifine");
anwser5.append('there are undefine, null, NAN, "", 0, false.');

console.log("===============================================================");
function sum(a, b){
  return a !== b ? a + b : (a +b)*3;
}
console.log("1.");
console.log(sum);
console.log(sum(5,10), sum(5,5))

function absoluteDifference(a){
  return 19 - a >= 0 ? 19 - a : 3*(a - 19)
}
console.log("2.");
console.log(absoluteDifference);
console.log(absoluteDifference(12), absoluteDifference(22));

var arr0 = ["0", "3", "6", "9"];
var arr1 = ["2", "5", "8"];
var arr2 = ["1", "4", "7"];
var result;

function findNumberDivided(str){
  var sum = 0;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) !== "*"){
      sum += Number(str.charAt(i));
    }
  }
  if(sum % 3 === 0){
    result = arr0.map((item)=>str.replace("*", item));
  }
  else if(sum % 3 === 1){
    result = arr1.map((item)=>str.replace("*", item));
  }
  else{
    result = arr2.map((item)=>str.replace("*", item));
  }
  return result;
}



console.log("3.");
console.log(findNumberDivided);
console.log(findNumberDivided('1234567890*'), findNumberDivided('1*9'));


function findNumberDivided6(str){
  var divided3 = findNumberDivided(str);
  var result = divided3.filter(function(item){
    return Number(item.charAt(item.length - 1))%2 === 0
  });
  return result;
}
