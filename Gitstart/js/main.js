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
        // const li =document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput} :${emailInput}`));
        // userList.appendChild(li);
        // nameInput.value ='';
        // emailInput.value ='';
        localStorage.setItem(nameInput.value , emailInput.value);
        console.log(nameInput.value , emailInput.value);
    }
    
}