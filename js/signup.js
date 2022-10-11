var fullName = document.getElementById('fullname')
var Username = document.getElementById('username')
var Email = document.getElementById('email')
var Password = document.getElementById('password')
var Confirm = document.getElementById('confirm')
var register = document.getElementById('register')
register.addEventListener('click', validation)
function validation() {

  if (fullname.value.length < 6) {
    alert("نام و نام خانوادگی حداقل باید 6 کاراکتر داشته باشد");
    return false;
  }

  if (username.value.length < 6) {
    alert("نام کاربری حداقل باید 6 کاراکتر داشته باشد");
    return false;
  }
 
  var userEmail = email.value;
  var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  var regexResult = pattern.test(userEmail);
  if (!regexResult) {
    alert("ایمیل خود را وارد کنید");
    return false;
  }

  if (password.value.length < 8) {
    alert("رمز عبور حداقل باید 8 کاراکتر داشته باشد");
    return false;
  }
  if (password != confirm) {
    alert("رمز عبور های وارد شده مطابقت ندارند");
    return false;
  }
}