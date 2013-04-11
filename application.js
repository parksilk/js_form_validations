$(document).ready(function() {

  function validateEmail() {
		var email = document.forms.sign_up.email.value;
		var email_regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

		if (email_regex.test(email)) {
			console.log('Email is valid');
		} else {
			$('#errors').append('<li>Must be a valid email address</li>');
		}
	}

	function validatePasswordNumeric() {
		var password = document.forms.sign_up.password.value;
		var password_regex_numeric = /\d+/;

		if (password_regex_numeric.test(password)) {
			console.log('Password has a number');
		} else {
			$('#errors').append('<li>Password must have at least one numeric character (0-9)</li>');
		}
	}

	function validatePasswordAlpha() {
		var password = document.forms.sign_up.password.value;
		var password_regex_alpha = /[A-Z]+/;

		if (password_regex_alpha.test(password)) {
			console.log('Password has a capital');
		} else {
			$('#errors').append('<li>Password must have at least one capital letter</li>');
		}
	}

	function validatePasswordLength() {
		var password = document.forms.sign_up.password.value;

		if (password.length > 7) {
			console.log('Password is more than 7 characters');
		} else {
			$('#errors').append('<li>Password must be at least 8 characters long</li>');
		}
	}

	$('button').on('click', function(e){
	    e.preventDefault();
	    validateEmail();
	    validatePasswordNumeric();
	    validatePasswordAlpha();
	    validatePasswordLength();
	});

});