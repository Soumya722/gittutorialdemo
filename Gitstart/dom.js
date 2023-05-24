//Examine the document object
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

//getElementById
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var headerTitle = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML ='<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.backgroundColor = 'yellow';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = ' #f4f4f4 ';
// }
// items[2].style.backgroundColor = ' green '
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = ' #f4f4f4 ';
// }


//QureySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello World' 

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color ='red';


// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color ='blue';

// var secondlastitem = document.querySelector('.list-group-item:nth-child(2)');
// secondlastitem.style.color ='green';

// //QuerySelector all

// var  title =document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

//Traversing the Dom

var itemList = document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
 
//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='Hello';


//lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='Hello';

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
 
//previoussibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.nextElementSibling.);
// itemList.nextElementSibling.style.color ='green';

//createElement
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className= 'Hello';
//add id
newDiv.id= 'Hello1';
//add att
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('HEllo');
//add text to div
newDiv.appendChild(newDivText);
var container =document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize ='30px';
container.insertBefore(newDiv,h1);

