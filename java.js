	//Validtion Code For Inputs
    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];


    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');

    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', pass_Verify);

function validated(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
	

    if(emailValue !== 'sujallab1234@gmail.com') {
        email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
        password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
    }



    if (passwordValue !== 'ilovelab1234') {
        password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
        return false;
    }

    
   
}
