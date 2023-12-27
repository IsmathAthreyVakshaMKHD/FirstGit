const mainHeadingObject=document.querySelector('#main-heading');
mainHeadingObject.style.textAlign='right';
const basketHeadingObject=document.querySelector('#basket-heading');
basketHeadingObject.style.color='brown';
const fruitsObject=document.querySelectorAll('.fruits');
for(let i=0;i<fruitsObject.length;i++)
{
    fruitsObject[i].style.padding='10px';
    fruitsObject[i].style.listStyleType='none';
    fruitsObject[i].style.backgroundColor='gray';
}
const oddFruitObject=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddFruitObject.length;i++)
{
    oddFruitObject[i].style.backgroundColor='white';
}
const evenFruitObject=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenFruitObject.length;i++)
{
    evenFruitObject[i].style.backgroundColor='brown';
    evenFruitObject[i].style.color='white';
}