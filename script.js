const button = document.querySelectorAll(".button");
const body = document.body;

button.forEach( (button) =>{
    const buttonId = button.getAttribute('id');
    console.log(buttonId);
    button.addEventListener('click', ()=>{
        body.style.backgroundColor = buttonId;
    })
} );