
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
    d = n.getDate();
    document.getElementById("demo3").innerHTML = m + "/" + d + "/" + y;
}

var item1=["Stol",24,250];
var item2=["Skrivbord",2,750];
var item0=["Gåva vid köp",1,0];
 function MyFunktion () {
     item1.push(item1[1]*item1[2]);
     item2.push(item2[1]*item2[2]);
     item0.push(item0[2]);
 }
function varor() {
    document.getElementById("1") .innerHTML= item1[0];
}

