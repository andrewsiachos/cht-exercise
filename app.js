//ELEMENTS
const userInput = document.querySelector('#userInput');
const submit = document.querySelector('#submit');
const phoneBody = document.querySelector('#phoneBody');


submit.addEventListener('click', ()=>{
    if(!userInput.value.trim()){
        alert('input cannot be empty');
    }else{
        var div = document.createElement('div');
        div.className = 'rightMessageContainer';
        var messageDiv = document.createElement('div');
        messageDiv.className = 'rightMessage';
        const textnode = document.createTextNode(userInput.value);
        messageDiv.append(textnode);
        div.append(messageDiv);
        phoneBody.append(div);
        userInput.value = '';
    }

    phoneBody.scrollTo({
        top: '20px',
        behavior: smooth
    })
});