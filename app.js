
function time (){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() +1 ;
    d = n.getDate();
    document.getElementById("demo").innerHTML = m + "/" + d + "/" + y;

}
function time3 (){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() +2 ;
    d = n.getDate() -1;
    document.getElementById("demo3").innerHTML = m + "/" + d + "/" + y;
}
var enhet= "st";
function buy (varan,antal,pris){
    this.varan= varan;
    this.antal= antal;
    this.pris= pris;
}
var stol= new buy ("Stol",24,250);
var skrivbord = new buy ("Skrivbord",2,750);
var gift= new buy ("Gåva på köp",1,0);
document.getElementById("1") .innerHTML= stol.varan;
document.getElementById("2") .innerHTML= skrivbord.varan;
document.getElementById("0") .innerHTML= gift.varan;
document.getElementById("1-1") .innerHTML= stol.antal;
document.getElementById("1-2") .innerHTML= enhet;
document.getElementById("2-2") .innerHTML= enhet;
document.getElementById("0-2") .innerHTML= enhet;
document.getElementById("1-3") .innerHTML= stol.pris +"kr";
document.getElementById("1-4") .innerHTML= stol.pris * stol.antal + "kr";
document.getElementById("2-1") .innerHTML= skrivbord.antal;
document.getElementById("2-3") .innerHTML= skrivbord.pris+ "kr";
document.getElementById("2-4") .innerHTML= skrivbord.pris * skrivbord.antal +"kr";
document.getElementById("0-1") .innerHTML= gift.antal;
document.getElementById("0-3") .innerHTML= gift.pris+ "kr";
document.getElementById("0-4") .innerHTML= gift.pris * gift.antal +"kr";
