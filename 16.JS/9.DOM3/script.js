function CreatePara(){
    const para=document.createElement('p');
    para.textContent="Amol M";
    document.body.appendChild(para);
}
function CreatePara2()
{
    for(let i=0;i<=10;i++)
    {
        const para=document.createElement('p');
        para.textContent="Amol M";
        document.body.appendChild(para);
    }
}
CreatePara2();
function ADDH1(){
    const h_one=document.createElement('h1');
    h_one.textContent="How are you";
    document.body.appendChild(h_one);
}

const movies=[{Title:"RRR"},{Title:"AAA"},{Title:"BBB"}]
const mainEle=document.getElementById('main');
function createMovies()
{
    movies.forEach(
        function(ele,index){
            const para=document.createElement('p');
            para.textContent=ele.Title;
            mainEle.appendChild(para);
        }
    )
}
const imageArr=["./mongo.png","./python.jpg","./react.png"]
const imagesEle=document.getElementById('main');
function CreateImages(){
    imageArr.forEach(
        function(ele,index){
            const img=document.createElement('img');
            img.src=ele;
            img.alt="no img";
            img.height=100; 
            imagesEle.appendChild(img);
        }
    )
}