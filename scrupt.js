const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('LoginButton');
const signInForm=document.getElementById('LoginIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    LoginForm.style.display="block";
    signUpForm.style.display="none";
})