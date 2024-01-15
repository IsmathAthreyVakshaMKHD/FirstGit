const formObject=document.querySelector('form');
const fruitsObject=document.querySelector('.fruits');
const listObject=document.querySelectorAll('.fruit');
for(let i=0;i<listObject.length;i++)
{
    const editButtonObject=document.createElement('button');
    const editButtonTextObject=document.createTextNode('edit');
    editButtonObject.appendChild(editButtonTextObject);
    editButtonObject.className='edit-btn';
    listObject[i].appendChild(editButtonObject);
}
formObject.addEventListener('submit',function(event)
{
    event.preventDefault();
    const fruitToAddObject=document.getElementById('fruit-to-add');
    const liObject=document.createElement('li');
    liObject.innerHTML=fruitToAddObject.value+`<button class="delete-btn">x</button>`+`<button class="edit-btn">edit</button>`;
    //All these steps can be done in a single line using innerHTML
    //The commented code only worked in the Site,Find out why
    // const textObject=document.createTextNode(fruitToAddObject.value);
    // liObject.appendChild(textObject);
    // liObject.className='fruit';
    // const buttonObject=document.createElement('button');
    // const buttonTextObject=document.createTextNode('x');
    // buttonObject.appendChild(buttonTextObject);
    // buttonObject.className='delete-btn';
    // liObject.appendChild(buttonObject);
    // //Adding edit button
    // const editButtonObject=document.createElement('button');
    // const editButtonTextObject=document.createTextNode('edit');
    // editButtonObject.appendChild(editButtonTextObject);
    // editButtonObject.className='edit-btn';
    // liObject.appendChild(editButtonObject);
    //Adding to the unorderedList
    fruitsObject.appendChild(liObject);
});

fruitsObject.addEventListener('click',function(event)
{
    event.preventDefault();
    if(event.target.classList.contains('delete-btn'))
    {
        const fruitToDeleteObject=event.target.parentElement;
        fruitsObject.removeChild(fruitToDeleteObject);
    }
});
