// Write your code below:
function handleFormSubmit(event)
{
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const obj=
    {
        username:username,
        email:email,
        phone:phone
    };
    localStorage.setItem(obj.email,JSON.stringify(obj));
    displayDetails(obj);
}
function displayDetails(obj)
{
    const parentElementObject=document.getElementsByTagName('ul')[0];
    const childElementObject=document.createElement('li');
    childElementObject.textContent=obj.username+' - '+obj.email+' - '+obj.phone;
    const childElementObject2=document.createElement('button');
    childElementObject2.textContent='delete';
    childElementObject.appendChild(childElementObject2);
    const childElementObject3=document.createElement('button');
    childElementObject3.textContent='edit';
    childElementObject.appendChild(childElementObject3);
    parentElementObject.appendChild(childElementObject);
    childElementObject2.addEventListener('click',function()
    {
        const liToBeRemoved=this.closest('li');
        if(liToBeRemoved)
        {
            const emailToBeRemoved=obj.email;
            localStorage.removeItem(emailToBeRemoved);
            liToBeRemoved.remove();
        }
    });
    childElementObject3.addEventListener('click',function()
    {
        const nameInput=document.getElementById('username');
        const emailInput=document.getElementById('email');
        const phoneInput=document.getElementById('phone');
        const liToBeRemoved2=this.closest('li');
        if(liToBeRemoved2)
        {
            nameInput.value=obj.username;
            emailInput.value=obj.email;
            phoneInput.value=obj.phone;
            const emailToBeRemoved2=obj.email;
            localStorage.removeItem(emailToBeRemoved2);
            liToBeRemoved2.remove();
        }

    });
    //This doesn't work in sharpener compiler
    // deleteObject.onclick=()=>
    // {
    //     localStorage.removeItem(obj.email);
    //     unorderedListsObject.removeChild(liTagObject);
    // }
    // editObject.onclick=()=>
    // {
    //     const nameInput=document.getElementById('username');
    //     const emailInput=document.getElementById('email');
    //     const phoneInput=document.getElementById('phone');
    //     nameInput.value=obj.username;
    //     emailInput.value=obj.email;
    //     phoneInput.value=obj.phone;
    //     localStorage.removeItem(obj.email);
    //     unorderedListsObject.removeChild(liTagObject);
    // }   
}