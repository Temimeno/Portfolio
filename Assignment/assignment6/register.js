window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass = document.forms["myForm"]["password"].value;
    var repass = document.forms["myForm"]["repassword"].value;
    if (pass != repass) {
        var regisError = document.getElementById("errormsg");
        regisError.innerText = ("Password and Retype Password are not the same");
        return false;
    } else {
        alert("Register Successful")
    }
}