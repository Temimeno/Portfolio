window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const user = urlParams.get('username');
	const pass = urlParams.get('password');

	var loginUser = document.forms["myLogin"]["username"].value;
	var loginPass = document.forms["myLogin"]["password"].value;

	if ( (user != loginUser) || (pass != loginPass) ) {
		alert("Username or Password Incorrect")
		return false;
	} else {
		alert("Login Successful")
	}
}

			