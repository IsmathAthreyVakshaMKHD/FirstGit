function handleFormSubmit(event)
{
    event.preventDefault();
    let userObject={
        name:event.target.username.value,
        email:event.target.email.value,
        number:event.target.phone.value
    };
    localStorage.setItem("User Details",JSON.stringify(userObject));
}

