const headerObject=document.getElementById('header');
const mainHeadingObject=document.getElementById('main-heading');
const basketHeadingObject=document.getElementById('basket-heading');
const thanksObject=document.getElementById('thanks');
headerObject.style.background='green';
headerObject.style.borderBottom='3px solid orange';
mainHeadingObject.textContent='Fruit World';
//mainHeadingObject.innerText='Fruit World'; This can also be used
mainHeadingObject.style.color='orange';
basketHeadingObject.style.color='green';
thanksObject.innerHTML='<p>Please visit us again</p>';