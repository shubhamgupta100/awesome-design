
const Name = document.getElementById('Name');
const Cname = document.getElementById('college_name');
const MobNo = document.getElementById('mob_no');
const City = document.getElementById('college_location');
const Email = document.getElementById('Email');
const clg = document.getElementById('slctclg');
const year_completion = document.getElementById('year_completion');
const cb = document.getElementById('term');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validCname = false;
let validCity = false;
let validClg = false;
let validYear = false;

$('#failure').hide();
$('#success').hide();

Name.addEventListener('blur', () => {

	let regex = /^[a-zA-Z ][a-zA-Z ]{3,20}$/;
	let str = Name.value;
	console.log(regex, str);
	if (regex.test(str)) {
		Name.classList.remove('is-invalid');
		validUser = true;
		document.getElementById("submit").disabled = false;
	}
	else {
		Name.classList.add('is-invalid');
		validUser = false;
		document.getElementById("submit").disabled = true;
	}
});

MobNo.addEventListener('blur', () => {
	let regex = /^([0-9]){10}$/;
	let str = MobNo.value;
	console.log(regex, str);
	if (regex.test(str)) {

		MobNo.classList.remove('is-invalid');
		validPhone = true;
		document.getElementById("submit").disabled = false;
	}
	else {

		MobNo.classList.add('is-invalid');
		validPhone = false;
		document.getElementById("submit").disabled = true;
	}
});

Email.addEventListener('blur', () => {

	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = Email.value;
	if (regex.test(str)) {
		console.log('Your email is valid');
		Email.classList.remove('is-invalid');
		validEmail = true;
		document.getElementById("submit").disabled = false;
	}
	else {
		console.log('Your email is not valid');
		Email.classList.add('is-invalid');
		validEmail = false;
		document.getElementById("submit").disabled = true;
	}
});

Cname.addEventListener('blur', () => {
	let regex = /^[a-zA-Z ][a-zA-Z. ]+$/;
	let str = Cname.value;
	console.log(regex, str);
	if (regex.test(str)) {
		Cname.classList.remove('is-invalid');
		validCname = true;
		document.getElementById("submit").disabled = false;
	}
	else {
		Cname.classList.add('is-invalid');
		validCname = false;
		document.getElementById("submit").disabled = true;
	}
});

City.addEventListener('blur', () => {
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,20}$/;
	let str = City.value;
	console.log(regex, str);
	if (regex.test(str)) {
		City.classList.remove('is-invalid');
		validCity = true;
		document.getElementById("submit").disabled = false;
	}
	else {
		City.classList.add('is-invalid');
		validCity = false;
		document.getElementById("submit").disabled = true;
	}
});


year_completion.addEventListener('blur', () => {
	let regex = /^([0-9]){4}$/;
	let str = year_completion.value;
	console.log(regex, str);
	if (regex.test(str)) {

		year_completion.classList.remove('is-invalid');
		validPhone = true;
		document.getElementById("submit").disabled = false;
	}
	else {

		year_completion.classList.add('is-invalid');
		validPhone = false;
		document.getElementById("submit").disabled = true;
	}
});


