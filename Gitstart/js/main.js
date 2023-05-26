const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNoInput = document.querySelector('#phoneNo');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');
const list =document.getElementById('list');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ==='' ||phoneNoInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML ='please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
        const obj={
            name:nameInput.value,
            email:emailInput.value,
            PhoneNo:phoneNoInput.value,  //add phone no
        };
        var objString = JSON.stringify(obj);
        localStorage.setItem(email.value , objString);
        console.log(nameInput.value , emailInput.value);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value} ${phoneNoInput.value}`));
        list.appendChild(li);
    }
    
}