document.querySelector("#sub").addEventListener("click", function(){
    alert("order Placed");

    var myTimeout = setTimeout(msg1, 3000);

function msg1() {
alert("Order is been coocked");
}

var myTimeout = setTimeout(msg2, 8000);

function msg2() {
alert("Your Order is ready");
}

var myTimeout = setTimeout(msg3, 12000);

function msg3() {
alert("Order is out for delivery");
}
})
