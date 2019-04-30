var photo = [];
var products = [];
var precio = [];

$(".purchase").click(function() {
    var total = 0;
    precio.forEach(function(price) {
        var harry = total += parseInt(price);
        $(".total").text("Overall Balance:" + " " + "$" + harry);
    });
    var one = products[0];
    alert("You have bought a" + one + " " + "and your total is: $" + total);
});

$(".add").click(function() {
    var picture = $(".ProductImage").val();
    var item = $(".ProductName").val();
    var dinero = $(".ProductPrice").val();
    parseInt(dinero);
    $("input").val("");
    if(item === "" || item === " " || dinero === " " || dinero === "") {
        alert("Please insert a product. Thank you.");
    } else {
        photo.push(picture);
        products.push (item);
        precio.push(dinero);
        var numerito = products.length;
        $("#hello").append("<li class='hello'> " + "<img src=" + picture + ">" + "</li>");
        $("#to").append("<li class='the'>" + item + "</li>");
        $("#you").append("<li class='stuff'>" + "$" + dinero + "</li>");
        $(".number").text("Total  Items:" + " " + numerito);
        $(".hello").css("padding", "12px");
        $(".to").css("padding", "20px");
        $(".you").css("padding", "20px");
        $("img").css("width", "30px");
        $(".purchase").show();
        $(".total").show();
    }
});
 
