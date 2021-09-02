let clearList=document.getElementById('clearList');
let submitButton = document.getElementById('submit');
let toDoList = document.getElementById('toDoList');
let textBox = document.getElementById('textBox');

submitButton.addEventListener('click', function(){
    var listTag = document.createElement('li')
    var buttonTag = document.createElement('button')
        listTag.textContent=textBox.value;
        buttonTag.textContent='X';
        toDoList.appendChild(listTag);
        listTag.appendChild(buttonTag);
        textBox.value='';


    const close=document.querySelectorAll('button');
        for(let i=0; i<close.length; i++){
            close[i].addEventListener('click', ()=>{
                close[i].parentElement.remove();
            })
        }



    clearList.addEventListener('click', function(){
        toDoList.removeChild(listTag);
    })
   
 

})