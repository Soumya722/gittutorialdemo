var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

     //get input value
     var newItem = document.getElementById('item').value;
     var description = document.getElementById('description').value;
    //create new li element
    var li =document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + description));
    
    
    //create delete button
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm flot-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);
    

    //append li to list
    itemList.appendChild(li);

//Edit Button
    // var edit= document.createElement('button');
    // edit.appendChild(document.createTextNode('Edit'));
    // li.appendChild(edit);
    // itemList.appendChild(li);

    for(let i=0;i<itemList.length;i++){
    const editBtn =document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIt'));
    itemList[i].appendChild(editBtn)
}
}
//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}
//filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display ='block';
        }else{
            item.style.display ='none';
        }
    });
}
