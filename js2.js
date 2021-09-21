const ele=document.querySelector('.searchWordBox');
const btn=document.querySelector('.searchBtn');
const meaningBox= document.querySelector(".mean")
const mainBox= document.querySelector(".box")
let text=ele.innerText

ele.addEventListener("click",(e)=>{
    e.preventDefault()
})
ele.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
        e.preventDefault();
        btn.click();
    }
})
let loader=document.querySelector(".loading")

btn.addEventListener('click',search);
function search(){
    let text=ele.value;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`,true);
        loader.style.visibility="visible";
    xhr.onload=function(){
        if (this.status==200){
            let response=JSON.parse(this.response)
            let str=`${response[0].meanings[0].definitions[0].definition}`
            meaningBox.innerText=str;
            document.querySelector(".loading").style.visibility="hidden";
        }
        else{
            document.querySelector(".loading").style.visibility="hidden";
            let str=`Sorry, no such word found!`;
            meaningBox.innerText=str;
        };
        
    }
    xhr.send();
    
}

