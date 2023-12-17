const generateMemebtn = document.querySelector(".generate-meme-btn")
const memeImg = document.querySelector(".meme-generator img")
const memetitle=document.querySelector(".meme-title")
const memeauthor=document.querySelector(".meme-author")
const updatedetails=(url,title,author) =>{
    memeImg.setAttribute("src",url)
    memetitle.innerHTML=title;
    memeauthor.innerHTML= `meme by: ${ author}`;

}
const generetememe=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then((data) =>{
        updatedetails(data.url,data.title,data.author)
    })
}

generateMemebtn.addEventListener("click",generetememe)