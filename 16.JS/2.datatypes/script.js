let a=2
console.log(a)
console.log(typeof a)
a="amol"
a=1
console.log(typeof a)
if(a>0){
    console.log("Number is positive")
}
else if(a<0){
    console.log("Number is negative")
}
else{
    console.log("Number is zero")
}
let day =1
switch(day)
{
    case 1:console.log("Monday");break;
    case 1:console.log("Tuesday");break;
    case 1:console.log("Wednesday");break;
    case 1:console.log("Thursday");break;
    case 1:console.log("Friday");break;
    case 1:console.log("Saturday");break;
    case 1:console.log("Sunday");break;
    default:console.log("Enter valid value for days")
}
console.log("abx")

for(let u=0;u<11;u++)
{
    console.log(u);
}
let name="Amol"
let rev=""
for(let i=0;i<name.length;i++){
 console.log(name[i])
 rev=name[i]+rev
}
console.log(rev)
let str=""
for(let s=1;s<=5;s++)
{
    str=""
    for(let d=1;d<=s;d++)
    {
        str=str+" "+d;
    }
    console.log(str);
}


for(let s=5;s>0;s--)
{
    str=""
    for(let d=s;d>0;d--)
    {
        str=" "+d+" "+str //+" "+d;
    }
    console.log(str);
}

let abc="AMOL"
let strop=""
for(let r=abc.length-1;r>=0;r--)
{
   // console.log(abc[r])
   strop=""
   for(let y=0;y<=r;y++)
   {
        strop=strop+abc[y]
   }
   console.log(strop)
}