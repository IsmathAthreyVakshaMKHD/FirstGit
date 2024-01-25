function handleFormSubmit(event)
{
    event.preventDefault();
    const name=event.target.username.value;
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const number=event.target.phone.value;
    const obj={
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
    const childElementObject2=document.createElement('button');
    childElementObject2.textContent='delete';
    childElementObject.textContent=obj.username+' - '+obj.email+' - '+obj.phone;
    childElementObject.appendChild(childElementObject2);
    parentElementObject.appendChild(childElementObject);
    //parentElementObject.appendChild(childElementObject2);
    childElementObject2.addEventListener('click',function()
    {
        const liToBeRemoved=this.closest('li');
        if(liToBeRemoved)
        {
            const emailToBeRemoved=obj.email;
            localStorage.removeItem(emailToBeRemoved);
            liToBeRemoved.remove();
        }
        //console.log("delete button event listener added");
    })

    //This below method is from sharpener hints
    // const deleteObject=document.createElement('input');
    // deleteObject.type='button';
    // deleteObject.value='delete';
    // deleteObject.onclick=()=>
    // {
    //     localStorage.removeItem(obj.email);
    //     localStorage.removeChild(childElementObject);
    // }
    //The append the values in to the parentElementObject.The actual code is not written here because it is almost as smae the lines in from 24 to 25

}
//Another of doing the function of event listener 
// Add event listener to the parent ul element
// const ulElement = document.getElementsByTagName('ul')[0];
// ulElement.addEventListener('click', function (event) {
//     // Check if the clicked element is a delete button
//     if (event.target.tagName === 'BUTTON' && event.target.textContent === 'delete') {
//         // Find the parent li element and remove it
//         const liToRemove = event.target.closest('li');
//         if (liToRemove) {
//             liToRemove.remove();
//         }
//     }
// });
