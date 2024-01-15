const fruitsObject=document.querySelector('.fruits');
const formObject=document.querySelector('form');
//Adding another input before the button
const buttonObject=document.getElementsByTagName('button');
const inputObject=document.createElement('input');
inputObject.id='description';
inputObject.type='text';
inputObject.placeholder='enter fruit description';
formObject.insertBefore(inputObject,buttonObject[0]);

//Adding the user defined fruits description 
//inputObject.style.fontStyle='italic';

formObject.addEventListener('submit',function(event)
{
    event.preventDefault();
    const fruitToAddObject=document.getElementById('fruit-to-add');
    const descriptionObject=document.getElementById('description');
    const liObject=document.createElement('li');
    //Using templete strings
    //liObject.innerHTML=fruitToAddObject.value+'<button class ="delete-btn">x</button>'+"<p>"+descriptionObject.value+"</p>";
    liObject.innerHTML = `${fruitToAddObject.value} <button class="delete-btn">x</button> <p>${descriptionObject.value}</p>`;
    liObject.className='fruit';
    liObject.lastElementChild.style.fontStyle='italic';
    //This templete strings method is wrong
    //liObject.innerHTML=fruitToAddObject.value+'<button class ="delete-btn">x</button>';
    //paraObject.innerHTML=`<em>${descriptionObject.value}</em>`;
    //Using element creation and appending method
    // const paraObject=document.createElement('p');
    // const textObject=document.createTextNode(fruitToAddObject.value);
    // liObject.appendChild(textObject);
    // const buttonObject=document.createElement('button');
    // const buttonTextObject=document.createTextNode('x');
    // buttonObject.appendChild(buttonTextObject);
    // buttonObject.className='delete-btn';
    // liObject.appendChild(buttonObject);
    // paraObject.textContent=descriptionObject.value;
    // paraObject.style.fontStyle='italic';
    // liObject.appendChild(paraObject);
    

    //console.log(fruitDescriptionObject);
    // const divObject=document.getElementsByTagName('div');
    // const fruitsObject=document.querySelector('.fruits');
    // divObject[1].insertBefore(paraObject,fruitsObject);
    fruitsObject.appendChild(liObject);
});



//Setting up the filter option
const filterObject=document.getElementById('filter');
filterObject.addEventListener('keyup',function(event)
{
    const userDefinedText=event.target.value.toLowerCase();
    const listObject=document.getElementsByClassName('fruit');
    for(let i=0;i<listObject.length;i++)
    {
        const currentListText=listObject[i].firstChild.textContent.toLowerCase();
        const currentDescriptionText = listObject[i].lastChild.textContent.toLowerCase();
        const combinedText=currentListText+""+currentDescriptionText;
        //if(currentListText.indexOf(userDefinedText)===-1 && currentDescriptionText.indexOf(userDefinedText) === -1)
        if(combinedText.indexOf(userDefinedText)===-1)
        {
            listObject[i].style.display='none';
        }
        else
        {
            listObject[i].style.display='flex';
        }
    }
});
