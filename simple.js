function addition() {
    var no1 = parseInt(prompt("enter the first number"));
    var no2 = parseInt(prompt("enter the second number"));
    var total1 = no1 + no2;
    //alert("total nuber is" + total1);
    document.getElementById("demo").innerHTML = total1;
    document.getElementById("add").innerHTML = total1;
}
function subtraction() {
    var no1 = parseInt(prompt("enter the first number"));
    var no2 = parseInt(prompt("enter the second number"));
    var total2 = no1 - no2;
    //alert("total nuber is" + total2);
    document.getElementById("demo").innerHTML = total2;
    document.getElementById("sub").innerHTML = total2;
}
function multiplication() {
    var no1 = parseInt(prompt("enter the first number"));
    var no2 = parseInt(prompt("enter the second number"));
    var total3 = no1 * no2;
    //alert("total nuber is" + total3);
    document.getElementById("demo").innerHTML = total3;
    document.getElementById("mul").innerHTML = total3;
}
function devide() {
    var no1 = parseInt(prompt("enter the first number"));
    var no2 = parseInt(prompt("enter the second number"));
    var total4 = no1 / no2;
    //alert("total nuber is" + total4);
    document.getElementById("demo").innerHTML = total4;
    document.getElementById("devi").innerHTML = total4;
}
function modulas() {
    var no1 = parseInt(prompt("enter the first number"));
    var no2 = parseInt(prompt("enter the second number"));
    var total5 = no1 % no2;
    //alert("total nuber is" + total5);
    document.getElementById("demo").innerHTML = total5;
    document.getElementById("modu").innerHTML = total5;
}
function addfloat() {
    var no1 = parseFloat(prompt("enter the first number"));
    var no2 = parseFloat(prompt("enter the second number"));
    var total6 = no1 + no2;
    //alert("total nuber is" + total6);
    document.getElementById("demo").innerHTML = total6;
    document.getElementById("addf").innerHTML = total6;

}
function floatmul() {
    var no1 = parseFloat(prompt("enter the first number"));
    var no2 = parseFloat(prompt("enter the second number"));
    var total7 = no1 * no2;
    //alert("total nuber is" + total7);
    document.getElementById("demo").innerHTML = total7;
    document.getElementById("fmul").innerHTML = total7;
}
function floatsubtraction() {
    var no1 = parseFloat(prompt("enter the first number"));
    var no2 = parseFloat(prompt("enter the second number"));
    var total8 = no1 + no2;
    //alert("total nuber is" + total8);
    document.getElementById("demo").innerHTML = total8;
    document.getElementById("fsub").innerHTML = total8;
}
function floatmodulas() {
    var no1 = parseFloat(prompt("enter the first number"));
    var no2 = parseFloat(prompt("enter the second number"));
    var total9 = no1 % no2;
    //alert("total nuber is" + total9);
    document.getElementById("demo").innerHTML = total9;
    document.getElementById("fmodu").innerHTML = total9;
}
function floatdevide() {
    var no1 = parseFloat(prompt("enter the first number"));
    var no2 = parseFloat(prompt("enter the second number"));
    var total10 = no1 / no2;
    //alert("total nuber is" + total10);
    document.getElementById("demo").innerHTML = total10;
    document.getElementById("fdevi").innerHTML = total10;
}
function evenodd() {
    var no1 = parseInt(prompt("enter the number"));
    if (no1 % 2 == 0) {
        document.getElementById("demo").innerHTML = no1 + " " + "is even number";
        document.getElementById("evenodd").innerHTML = no1 + "is even number";
    }
    else {
        document.getElementById("demo").innerHTML = no1 + " " + "is odd number";
        document.getElementById("evenodd").innerHTML = no1 + " " + "is odd number";
    }
}
function square() {
    var no1 = parseInt(prompt("enter the number"));
    var totale = no1 * no1;
    document.getElementById("demo").innerHTML = totale;
    document.getElementById("2power").innerHTML = totale;
}
function cube() {
    var no1 = parseInt(prompt("enter the number"));
    var totale = no1 * no1 * no1;
    document.getElementById("demo").innerHTML = totale;
    document.getElementById("3power").innerHTML = totale;
}