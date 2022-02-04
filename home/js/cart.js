document.addEventListener(
  "DOMContentLoaded",
  function () {
    html = "";
    total_amt = 0;
    cart_data = localStorage.getItem("cart_data");
    cart_data = JSON.parse(cart_data);
    cart_data.forEach((element, index) => {
      html =
        html +
        '<div class="row"><div class="col-md-8"><h6>' +
        element[0] +
        '</h1></div><div class="col-md-2">' +
        element[1] +
        "</div></div>";
        total_amt = total_amt + parseInt(element[1])
    });
    
    console.log(html);
    document.getElementById("cart_div").innerHTML = html;
    console.log(total_amt)
    document.getElementById("total_amount").innerHTML = total_amt
    
  },
  false
);
