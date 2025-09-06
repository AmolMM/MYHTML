function display(){
    console.log("Hello world");
}
let btn=document.getElementById('btn');
btn.addEventListener('click',display);
function display2(e){
    console.log(e);
    console.log(e.key)
}
document.addEventListener('keydown',display2);
let k=document.getElementById('inp');
k.addEventListener('input',function(){console.log("Hiii")})