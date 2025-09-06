const ele=document.getElementById('heading');
console.log(ele);
console.log(ele.textContent);
console.log(ele.innerText);
function change()
{
    // ele.textContent="<u>by world</u>";
    ele.innerHTML="<u>by world</u>";
}
let status="off";

function Blud_OnOff(){
    if(status=="off")
    {
        document.getElementById('img').src="./buld-on.avif";
        status="onn"
    }
    else{
        document.getElementById('img').src="./buld-off.jpg";
        status="off"
    }
}