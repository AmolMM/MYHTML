console.log(document);
console.log(document.getElementsByTagName('h2')[0]);
console.log(document.getElementsByClassName('heading')[0]);
console.log(document.getElementById('para1').innerText)
console.log(document.querySelector('h2'));
console.log(document.querySelectorAll('h2')[0]);
console.log(document.querySelector("#head"));
console.log(document.querySelector("h2"));
console.log(document.querySelectorAll("h2")[0]);
console.log(document.getElementsByTagName('p')[0]);

console.log(document.getElementsByClassName('heading')[0]);
console.log(document.getElementById('para1'));
console.log("........................................");
console.log(document.querySelector('#para1'));

let x=document.getElementById('head');
console.log(x);
console.log(x.textContent);
x.textContent="by world1";

let y=document.getElementById('para1');
y.textContent="by by world";



function incr()
{
const u=document.getElementById('count');
console.log(u);
let c=u.textContent;
c++;
u.textContent=c;
if(c%2==0){
    document.getElementById('even_odd').textContent="even";
  }
  else{
    document.getElementById('even_odd').textContent="odd";
  }
}
incr()
