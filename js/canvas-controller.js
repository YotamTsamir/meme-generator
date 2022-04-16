'use strict'
let gElCanvas = document.getElementById('my-canvas')
let gCtx = gElCanvas.getContext('2d')
let gCurrImg;
let memes = [];
const STORAGE_KEY = 'memesDb'



function moveItem(dx, dy) {
    gMeme[gClicks].pos.x += dx
    gMeme[gClicks] += dy
}


function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}
function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}


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
function toggleCanvasSeen() {
    let memeScreen = document.querySelector('.create-meme')
    memeScreen.classList.toggle('hidden')
}
function toggleNavSeen() {
    let nav = document.querySelector('.nav')
    nav.classList.toggle('hidden')
}
function returnToGallery() {
    let gallery = document.querySelector('.gallery')
    let text = document.getElementById('meme-text')
    text.value = ''
    gMeme = [];
    gClicks = 0;
    if (gallery.classList.contains('hidden')) {
        toggleCanvasSeen()
        deleteBtnImg()
        toggleRandomBtn()
        toggleGalleryHidden()
        renderImages()
        toggleNavSeen()
    } else renderImages()
}
function onClickImg(source) {
    toggleRandomBtn()
    toggleGalleryHidden()
    toggleNavSeen()
    toggleCanvasSeen()
    resizeCanvas()
    clearCanvas()
    renderImg(source)
    console.log(source)
    gCurrImg = source
    return gCurrImg
}
function deleteBtnImg() {
    let btnImage = document.querySelector('.random-img')
    console.log(btnImage)
    btnImage.src = ""
}
function toggleRandomBtn() {
    let btn = document.querySelector('.feeling-lucky')
    btn.classList.toggle('hidden')
}
function downloadCanvas(elLink) {
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
    const data = gElCanvas.toDataURL()
    elLink.href = data
    let savedModal = document.querySelector('.saved-modal')
    savedModal.innerHTML = `<img class="saved-img" src=${data}>`
    elLink.download = 'canvas.jpg'
}
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    // gElCanvas.height = elContainer.style.height
    // gElCanvas.width = elContainer.style.width
}
function saveCanvasToLocalStorage() {
    memes = loadFromStorage(STORAGE_KEY)
    if(!memes) memes = []
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
    const data = gElCanvas.toDataURL()
    // elLink.href = data
    memes.push(data);
    console.log(memes)
    saveToStorage(STORAGE_KEY, memes)
}
function renderSavedMemes() {
    let savedMemes = loadFromStorage(STORAGE_KEY);
    let modal = document.querySelector('.saved-modal')
    let screen = document.querySelector('.screen')
    let strHTML = ''
    let savedModal = document.querySelector('.saved-modal')
    if(!savedMemes){
     strHTML = '<h2>Sorry no memes saved!</h2>'
     savedModal.innerHTML = strHTML
     modal.style.display = 'grid'
     screen.style.display = 'block'
     return   
    }
    savedMemes.forEach(meme => strHTML += `<img class="saved-img" src=${meme}>`)
    strHTML += '<button class="close-modal" onclick="closeModal()">X</button>'
    savedModal.innerHTML = strHTML
    modal.style.display = 'grid'
    screen.style.display = 'block'
    // savedModal.innerHTML = `<img class="saved-img" src=${data}>`
    // memes.forEach(meme => strHTML+=``)
}
function closeModal() {
    let modal = document.querySelector('.saved-modal')
    let screen = document.querySelector('.screen')
    modal.style.display = 'none'
    screen.style.display = 'none'
}
