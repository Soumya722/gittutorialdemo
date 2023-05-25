const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML ='please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
        const obj={
            name:nameInput.value,
            email:emailInput.value,
        };
        var objString = JSON.stringify(obj);
        localStorage.setItem(email.value , objString);
        console.log(nameInput.value , emailInput.value);
    }
    
}