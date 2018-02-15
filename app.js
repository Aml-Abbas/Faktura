
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