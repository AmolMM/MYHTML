function display()
{
    console.log("Display function is working")
}
display()
function add(a,b)
{
    console.log(`${a}+${b} = ${a+b}`)
}
add(5,10)
console.log(display)

let display3=function(a,b)
{
    console.log(a*b)
}
display3(10,20)
console.log(display3)


add4=(a,b)=>{console.log(a+b)}
add4(10,20)

function lowerUpperAlternate(){
    let strName="amol"
    for(let y=0;y<strName.length;y++)
    {
        if(y%2==0)
        {
            console.log(strName.charAt(y).toUpperCase())
        }
        else
        {
            console.log(strName.charAt(y).toLowerCase())
        }
    }
}
lowerUpperAlternate()