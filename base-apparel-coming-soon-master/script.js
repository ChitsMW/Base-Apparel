//listening for a submit event (button)
//email input value
//validation (of email)
//create success condition - it should say thank you (h1 should do it)
//-change p to you're subscribed look out for our content
// hide form
//hide error styling
//error condition
//show error styling

const form = document.querySelector("form");
const email = document.querySelector("#email");

const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let emailValue = email.value 
    console.log(emailValue);
    if(validationEmail(emailValue)){
        handleSuccess();
        console.log("yay");
    }else{
        handleError();
        console.log("nah");
    }
});

function validationEmail(email){
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLocaleLowerCase());
}

function handleSuccess(){
    //hide error styling
    //change h1 and p
    hideElement(errorIcon);
    hideElement(errorText);
    hideElement(form);
    document.querySelector("h1").innerText="Thank you!";
    document.querySelector("p").innerText="You're Subscribed. Look out for our content :)";

}
function handleError(){
    //show error stylings
    email.classList.add("error")
    showElement(errorIcon);
    showElement(errorText);
}

function showElement(element){
    element.style.display = "block";
}
function hideElement(element){
    element.style.display = "none";
}

