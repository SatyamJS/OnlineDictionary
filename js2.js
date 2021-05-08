let ele=document.getElementById('textid');
let btn=document.getElementById('searchbtn');
btn.addEventListener('click',search);
function search(){
    let text=ele.value;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en_US/${text}`,true);
    xhr.onload=function(){
        if (this.status==200){
            let response=JSON.parse(this.response)
            let str=`<li>${response[0].meanings[0].definitions[0].definition}</li>`
            let ulele=document.querySelector("#response");
            ulele.innerHTML=str; 
        }
        else{
            let ulele=document.querySelector("#response");
            let str=`<li>No such Word exist</li>`;
            ulele.innerHTML=str; 
        };

    }
    xhr.send();
    
}

