var Username = document.getElementById('username')
var Password = document.getElementById('password')
var register = document.getElementById('register')
register.addEventListener('click', validation)
function validation() {
  
    // validate username input
    if (username.value.length < 6) {
      alert("نام کاربری حداقل باید 6 کاراکتر داشته باشد");
      return false;
    }
  
  
    // validate password input
    if (password.value.length < 8) {
      alert("پسورد حداقل باید 8 کاراکتر داشته باشد");
      return false;
    }
  
    alert("خوش آمدید");
    return true;
  }
  

