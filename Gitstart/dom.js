var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    
    //create new li element
    var li =document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

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
    var edit= document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);
    itemList.appendChild(li);
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