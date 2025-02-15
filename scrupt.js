const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signinSForm.style.display="block";
    signUpForm.style.display="none";
})
