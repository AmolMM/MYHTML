
setTimeout(function(){
    console.log("hello world")
},1)
console.log("By world");

setInterval(function(){
    console.log("hello world111")
},10000)
for(let i=0;i<=10000;i++)
{
    console.log("by world");
}
let c=0;


function incr(){
    c=c+1;
    let ctr=document.getElementById('counter');
    ctr.textContent=c;
    if(c==500)
    {
        clearInterval(x);
    }
}
let x=setInterval(incr,10)