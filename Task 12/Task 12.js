function handleFormSubmit(event)
{
    event.preventDefault();
    const userNameObject=event.target.userName.value;
    const emailIdObject=event.target.emailId.value;
    const numberObject=event.target.phoneNumber.value;
    localStorage.setItem('name',userNameObject);
    localStorage.setItem('mail',emailIdObject);
    localStorage.setItem('number',numberObject);
};