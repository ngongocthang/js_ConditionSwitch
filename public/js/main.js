document.writeln("cau 10.1  <br>");

var a = parseFloat(prompt(" cau 10.1 nhap vao mot so nguyen :"));
// switch(true): khi đó trong case sẽ được so sánh --> true/false 
switch (true) {
    case (a < 0):
        document.writeln("a la so nguyen am ! <br>"); break;
    case (a > 0):
        document.writeln("a la so nguyen duong ! <br>"); break;
    default: document.writeln("a bang 0 !<br>");
}

document.writeln("cau 10.2 <br>")
var n = parseFloat(prompt("cau 10.2 nhap vao mot so nguyen n:"));
switch (true) {
    case (n % 3 == 0 || n % 5 == 0):
        document.writeln("so nguyen n chia het cho 3 hoac5 !<br>"); break;
    case (n % 3 != 0 || n % 5 != 0):
        document.writeln("so nguyen n khong chia het cho 3 hoac 5  !<br> "); break;
        default: document.writeln("khong nam trong truong hop nao!<br>");
}

document.writeln("cau 10.3 <br>");
var month =parseInt(prompt("nhap vao mot thang batr ki trong nam:"));
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.writeln("thang co 31 ngay ! <br>"); break;
    case 2:
        document.writeln("thang co 28-29 ngay ! <br>"); break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.writeln("thang co 30 ngay ! <br>"); break;
    default: document.writeln("khong phai mot thang nao trong nam !<br>");
}
document.writeln("cau 10.4 <br>");
var a1 = parseFloat(prompt("nhap gia tri so A : "));
var b1 = parseFloat(prompt("nhap gia tri so B : "));
var c1 = parseFloat(prompt("nhap gia tri so C : "));
var denta = b1 * b1 - 4 * a1 * c1
switch (true) {
    case (a1 == 0):
        document.writeln("phuong trinh bac 1 <br>");break;
    case (denta < 0):
        document.writeln("phuong trinh vo nghiem <br>");break;
    case (denta == 0):
        var kq = -(b1 / 2 * a1);
        document.writeln("phuong trinh co 1 nghiem : " + kq + " <br>");break;
    case (denta > 0):
        var kq1 = (-b1 + Math.sqrt(denta)) / (2 * a1);
        var kq2 = (-b1 - Math.sqrt(denta)) / (2 * a1);
        document.writeln("phuong trinh co 2 nghiem : " + kq1 + ";" + kq2 + "<br>");break;
        default:document.writeln(" khong nam tỏng truong hop nao !<br>");
}
document.writeln("cau 10.5 <br>");
var A = parseFloat(prompt("Nhập số thứ nhất:"));
var B = parseFloat(prompt("Nhập số thứ hai:"));
var C = parseFloat(prompt("Nhập số thứ ba:"));

switch (true) {
    case (A <= 0):
    case (B <= 0):
    case (C <= 0):
        document.writeln("khong dam bao yeu cau !<br> "); break;
    case ((A + B) > C && (A + C) > B && (B + C) > A):
        document.writeln(" ba so A,B,C la ba canh cua mot tam giac !<br> "); break;
    case ((A + B) < C):
        document.writeln("khong khong phai la ba canh cua mot tam giac  !<br> "); break;
    case ((A + C) > B):
        document.writeln("khong khong phai la ba canh cua mot tam giac  !<br> "); break;
    case ((B + C) > A):
        document.writeln("khong khong phai la ba canh cua mot tam giac  !<br> "); break;
    default: document.writeln("erro !")
}
