const form= document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");
const Cpassword= document.getElementById("confirm-password");
const submit= document.getElementById("btn");


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs= ()=>{
    const usernameValue=username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const CpasswordValue=Cpassword.value.trim();

    if(usernameValue===''){
        setError(username, 'username is required');
    }

    else{
        setSuccess(username);
    }

    if(emailValue===''){
        setError(email, "Email is required");
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }

    else{
        setSuccess(email);
    }


    if(passwordValue===''){
        setError(password, 'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password, 'password must be at least 8 characters.');
    }
    else{
        setSuccess(password);
    }

    if(CpasswordValue===''){
        setError(Cpassword, 'Please confirm your password');
    }
    else if(CpasswordValue!==passwordValue){
        setError(password, "Password doesn't match");
    }
    else{
        setSuccess(Cpassword)
    }
}

const setError=(element, message)=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('#error');
    errorDisplay.innerText=message;
    inputControl.classList.add('err');
    inputControl.classList.remove('success');
}

const setSuccess= (element)=>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('#error');
    errorDisplay.innerText="";
    inputControl.classList.add('success');
    inputControl.classList.remove('err');
}

isValidEmail= (e)=>{
    
}