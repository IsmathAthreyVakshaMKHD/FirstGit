//From Web Dev Group
let arr=[];
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
    const usersDetails=JSON.stringify(obj)
    arr.push(usersDetails)
    localStorage.setItem(obj.email,JSON.stringify(obj));
    displayDetails(obj);
}
localStorage.setItem("user",arr);
const getuser=localStorage.getItem("user")
if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        displayDetails(localstorage.key(i));
    }
}
function displayDetails(obj)
{
    const parentElementObject=document.getElementById('listOfItems');
    const childElementObject=document.createElement('li');
    childElementObject.textContent=obj.username+' - '+obj.email+" - "+obj.phone;
    parentElementObject.appendChild(childElementObject);
}
module.exports=handleFormSubmit;
//Hint Logic
function handleFormSubmit(event)
{
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const number=event.target.phone.value;
    const obj={
        name,
        email,
        number
    };
    localStorage.setItem(obj.email,JSON.stringify(obj));
    displayDetails(obj);
}
function displayDetails(obj)
{
    const parentElementObject=document.getElementById('listOfItems');
    const childElementObject=document.createElement('li');
    childElementObject.textContent=obj.name+' - '+obj.email+" - "+obj.number;
    parentElementObject.appendChild(childElementObject);
}
//Own Code
let userKey;
let currentObject;
let previousValue;
let userListElement=document.getElementById('userListElement');
function handleFormSubmit(event)
{
    event.preventDefault();
    if(userKey)
    {
        previousValue=localStorage.getItem(userKey);
    }
    currentObject=previousValue?JSON.parse(previousValue):{};
    let userObject={
        name:event.target.username.value,
        email:event.target.email.value,
        number:event.target.phone.value
    };
    userKey=userObject.email;
    currentObject = userObject;
    localStorage.setItem(userKey,JSON.stringify(currentObject));
    displayLocalStorage();
}
function displayLocalStorage() {
    // if (!userListElement) 
    // {
    //     userListElement = document.createElement('ul');
    //     document.body.appendChild(userListElement);
    // }
    // else
    // {
        if (!userListElement) {
            console.error('User list element not found');
            return;
        }
         userListElement.innerHTML = ''; // Clear existing content
    // }    
        // Iterate over localStorage entries
        for (let i = 0; i < localStorage.length; i++) 
        {
            const key = localStorage.key(i);
            const userDataString = localStorage.getItem(key);
            // Parse the JSON string to get the user data object
            const userData = JSON.parse(userDataString);
            // Create a list item for each user
            const listItem = document.createElement('li');
            listItem.textContent = `${userData.name} - ${userData.email} - ${userData.number}`;
            // Append the list item to the unordered list
            userListElement.appendChild(listItem);
        }
}

