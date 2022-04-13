'use strict'
let gElCanvas = document.getElementById('my-canvas')
let gCtx = gElCanvas.getContext('2d')
let gCurrImg;

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}
function drawImgFromlocal(source) {
    var img = new Image()
    img.src = `/images/meme-imgs(square)/1.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    }
}
function toggleCanvasSeen(){
    let memeScreen = document.querySelector('.create-meme')
    memeScreen.classList.toggle('hidden')
}
function returnToGallery(){
    let gallery = document.querySelector('.gallery')
    if(gallery.classList.contains('hidden')){
        toggleCanvasSeen()
        toggleGalleryHidden()
        renderImages()
    } else renderImages()
}
function onClickImg(source){
    toggleGalleryHidden()
    toggleCanvasSeen()
    renderImg(source)
    return gCurrImg = source
}
