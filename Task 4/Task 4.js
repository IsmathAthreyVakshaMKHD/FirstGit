const fruitsObject=document.getElementsByClassName('fruit');
fruitsObject[2].style.backgroundColor = 'yellow';
for(let i=0;i<fruitsObject.length;i++)
  {
    fruitsObject[i].style.fontWeight='bold';
  }
console.log('Size = '+fruitsObject.length);