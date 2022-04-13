'use strict'
renderImages()
function renderImages(){
    let images = getImages()
    let strHTML = ''
    images.forEach(image => strHTML +=  `<div  class="image"><img onclick="onClickImg(this)" id='img-${image.id}' src="/images/meme-imgs (square)/${image.url}"></img></div>`)
    let imageHolder = document.querySelector('.gallery')
    imageHolder.innerHTML = strHTML
}

function renderImagesByKeywords(){
    let keyWord = document.getElementById('input-text').value
    let images = getImages()
    let strHTML = ''
    images.forEach(image =>{ 
        if(image.keyWords.includes(`${keyWord}`)){
            strHTML +=  `<div class="image"><img onclick="onClickImage(this)" id='img-${image.id}' src="../images/meme-imgs (square)/${image.url}"></img></div>`
        } 
        let imageHolder = document.querySelector('.gallery')
        imageHolder.innerHTML = strHTML
    })
}

function toggleGalleryHidden(){
    let gallery = document.querySelector('.gallery')
    gallery.classList.toggle('hidden')
}