/**BÀI 1 */
var luongmotngay = 100000;

document.getElementById("btnluong").onclick = function() {
    // khi click vô thì mới lấy giá trị từ trên dom. Lấy trước khi ấn nút thì nó lấy về số 0 do chưa nhập gì hết
    // nhớ comment phân tích code đồ vô nha
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


/** tạo repo trên github chưa?
 * rồi Vân add remote đi add bỏ link zô hả 
 * copy vô chứ bc này khỏi ghi
 * mình đang nhầm folder r :'()
 * à nãy tui tưởng Vân tạo repo trên github r á.
 * Mình muốn đẩy code lên mạng thì cần chỗ chứa.
 * Nên bước 1 là tạo repo trên github trc
 * sau đó ở dưới local kết nối với github trên mạng bằng mấy dòng lệnh copy trên github
 * chỉ có bước đầu tiên nhất là: git init thôi.
 * 3 bước dưới này làm trc cũng đc
 * rồi mới git add .
 * git commit -m ""
 * git push
 * => thế 3 bước này là khi mình đã tạo respo trên git r hả?
 * 3 bước này là git ở local
 * github nó không phải là git nha.
 * github là nơi lưu trữ code thôi.
 * rồi git add, commit, push thì chưa cần tạo cũng đc.
 * có vẻ V bị rối rối r
 * 
 */
// h bài này đi hơ, Vân muốn nôpj bài = github. z bắt đầu từ đâu? 
/**
 * Có 2 trường hợp:
 * Vân chưa code gì hết
 * Lúc này thì Vân nên tạo repo trên github trc.
 * rồi tạo một folder bài tập của Vân
 * mở git bash ở folder đó rồi.
 * git init
 * xong rồi Vân tạo mấy files bài tập (Khác bước này. do mình đã tạo files rồi nên ko cần tạo gì hết)
 * rồi git add .
 * rồi git commit -m ""
 * rồi copy 3 dòng trên github
 * git branch -M main
git remote add origin git@github.com:gacon2001/luy-n-t-p-JS.git
git push -u origin main
* rồi lúc sau cứ git add .
git commit -m ""
rồi git push là đc.
 * còn trường hợp mà Vân đã code trên local rồi á: làm giống mấy bước trên. Do đã tạo sẵn mấy files rồi nên không cần tạo files hay gì đó 
//giống ở trên z thì khác nhau chỗ nào đêr phân 2 trg hợp

ở bài này thì Vân tạo git init rồi
thì bây giờ git add .
git commit -m ""
rồi copy 3 dòng cuối của github vô
 */
//v bài này của V là trg hợp 2 phải hông
// ùm 
