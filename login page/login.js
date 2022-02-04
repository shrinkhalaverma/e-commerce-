console.log("start");
function validate() {
  console.log("inside");
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("login successfully!!");
    window.open('file:///home/shrinkhala/e-commerce/home/index.html#!')
  } else {
    alert("login failed");
  }
}
