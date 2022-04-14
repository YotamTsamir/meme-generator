'use strict'
let gElCanvas = document.getElementById('my-canvas')
let gCtx = gElCanvas.getContext('2d')
let gCurrImg;
let memes = []
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
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()
    console.log('asd')
    reader.onload = (event) => {
        console.log('onload');
        var img = new Image()
        // Render on canvas
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
        console.log(img.src)
        // gCurrImg = `<img onclick="onClickImg(this) id="img-20" src="${img.src}">`
       
        gImgs.push({id:20,url:`${img.src}`,keyWords:[]})
        gCurrImg = gImgs[gImgs.length-1]
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
    console.log(gImgs)
    // renderImages()
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
        toggleGalleryHidden()
        renderImages()
        toggleNavSeen()
    } else renderImages()
}
function onClickImg(source) {
    toggleGalleryHidden()
    toggleNavSeen()
    toggleCanvasSeen()
    renderImg(source)
    console.log(source)
    return gCurrImg = source
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
}
function saveCanvasToLocalStorage() {
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
    loadFromStorage(STORAGE_KEY)
    if (!memes) return
    let modal = document.querySelector('.saved-modal')
    let screen = document.querySelector('.screen')
    let strHTML = ''
    let savedModal = document.querySelector('.saved-modal')
    console.log(memes)
    memes.forEach(meme => strHTML += `<img class="saved-img" src=${meme}>`)
    strHTML += '<button class="close-modal" onclick="closeModal()">X</button>'
    savedModal.innerHTML = strHTML

    modal.style.display = 'grid'
    screen.style.display = 'block'
}
function closeModal() {
    let modal = document.querySelector('.saved-modal')
    let screen = document.querySelector('.screen')
    modal.style.display = 'none'
    screen.style.display = 'none'
}
