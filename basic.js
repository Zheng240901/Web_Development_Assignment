function menu() {
    document.getElementById("dropdown").classList.toggle("show");
}
function year() {
    document.getElementById("date").innerHTML = new Date().getFullYear();
}
function shipaddress() {
    var checkBox = document.getElementById("sameadr");
    var adr = document.getElementById("shipadr");
    if (checkBox.checked == false) {
        adr.style.display = "block";
    } else {
        adr.style.display = "none";
    }
}
var i = 0;
function add() {
    var cart = document.getElementById("cart");
    var clone = cart.cloneNode(true);
    i++;
    clone.id = "cart" + i;
    clone.querySelector("#product").id = "product" + i;
    clone.querySelector("#qty").id = "qty" + i;
    document.getElementById("add").insertAdjacentElement("beforebegin", clone);
}
function remove() {
    var cart = document.getElementById("cart" + i);
    cart.remove();
    i--;
}
function price() {
    var price;
    var qty;
    var total = 0;
    total = document.getElementById("product").value *Math.round( document.getElementById("qty").value);
    if (i > 0) {
        for (n = 1; n <= i; n++) {
            price = document.getElementById("product" + n).value;
            qty = Math.round(document.getElementById("qty" + n).value);
            price = price * qty;
            total += price;
        }
    }
    document.getElementById("total").innerHTML = "RM"+ total;
}
var a = 1;
function fadein() {
    var repeater = setInterval(fadein, 100);
    var div = document.getElementById("fade" + a);
    if (div != null) {
        if (div.offsetTop - 600 < window.pageYOffset) {
            div.classList.add("fade-in");
            div.classList.toggle("vshow");
            a++;
        }
    }
    else {
        clearInterval(repeater);
    }
}
function modal(img) {
    var modal = document.getElementById("modal");
    var modalimg = document.getElementById("modalimg");
    modal.style.display = "block";
    modalimg.src = img.src;
}
function closemodal() {
    document.getElementById("modal").style.display = "none";
}