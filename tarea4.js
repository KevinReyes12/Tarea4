//Actividad 1
function numeroDecimal(){
    var numero =parseInt(document.getElementById("n").value);
    alert("El número "+numero+" en decimal es: "+ parseInt(numero,8));
}
//Actividad 2
function Operaciones(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    alert("La suma es: "+(n1+n2));
    alert("La resta es: "+(n1-n2));
    alert("La multiplicación es: "+(n1*n2));
    alert("La división es: "+(n1/n2));
}