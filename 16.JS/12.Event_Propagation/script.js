document.getElementById('gp').addEventListener('click',function(){
    console.log("gp called");
},true)
document.getElementById('p').addEventListener('click',function(){
    console.log("p called");
},true)
document.getElementById('c').addEventListener('click',function(){
    console.log("c called");
},true)
document.getElementById('b').addEventListener('click',function(){
    console.log("b called");
},true)

document.getElementById('box').addEventListener('click',function(e){console.log("hiii");console.log(e.target.textContent)})