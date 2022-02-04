var cart_data = [];

function add_to_cart(pname, pprice) {
  let temp = [pname, pprice];
  cart_data.push(temp);
  let cart_length = cart_data.length;
  document.getElementById("cart_count").innerHTML = cart_length;
  console.log(cart_length);
  data_json = JSON.stringify(cart_data);
  localStorage.setItem("cart_data", data_json);
}
