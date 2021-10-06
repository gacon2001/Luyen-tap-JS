/**BÀI 1 */
var luongmotngay = 100000;

document.getElementById("btnluong").onclick = function() {
    var luong = luongmotngay * document.getElementById("songaylam").value;

    console.log(luong);
    document.getElementById("txtluong").innerHTML= luong;
}

/**BÀI 2 */

document.getElementById("btnTB").onclick = function () {
  var number1 = document.getElementById("nhapSo1").value;
var number2 = document.getElementById("nhapSo2").value;
var number3 = document.getElementById("nhapSo3").value;
var number4 = document.getElementById("nhapSo4").value;
var number5 = document.getElementById("nhapSo5").value;
console.log(number1, number2, number3, number4, number5);

var trungbinh = (Number(number1) + Number(number2) + Number(number3)+ Number(number4) + Number(number5)) /5;
console.log(trungbinh);  
document.getElementById("txtTB").innerHTML=trungbinh;
}

/**BÀI 3 */

document.getElementById("btnQĐT").onclick = function () {
    var sotienviet = document.getElementById("soUSD").value * 23.500;
console.log(sotienviet);
    document.getElementById("txtQĐT").innerHTML = sotienviet;
}

/**BÀI 4 */

document.getElementById("btnTinh").onclick = function () {
    var dientich = document.getElementById("dai").value * document.getElementById("rong").value;
var chuvi = (document.getElementById("dai").value + document.getElementById("rong").value ) *2;
console.log(dientich, chuvi);
    document.getElementById("txtTinh").innerHTML= "Diện tích là: "+ dientich + "<br>Chu vi là:"+chuvi;
}

/**BÀI 5 */

document.getElementById("btnTong").onclick= function () {
var haichuso = document.getElementById("haichuso").value;
console.log(haichuso);

var ten = 0;
var unit =0;
var sum =0;

ten = Math.floor(haichuso/10);
unit= haichuso%10;
sum = ten + unit;
console.log(sum); 
document.getElementById("txtTong").innerHTML = "Tổng là: " + sum;
}


