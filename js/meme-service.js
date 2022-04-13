'use strict'
let gYposition = 50;
let gXposition;
let gClicks = 0
let gMeme = []
console.log('asd')
function createMeme(txt, size = '14px', align = 'center', color = 'black', fillColor = 'white', font = 'impact') {
    gMeme.push({
        idx: gClicks,
        txt,
        size: 50,
        align,
        color,
        fillColor,
        font,
        pos: { x: 0, y: 0 }
    })
    return gMeme
}


function printMemes() {
    gMeme.forEach(meme => {
        if (!meme.idx) {
            let x = gElCanvas.width / 2 - 25
            let y = 50;
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }

            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor,meme.font)
        } else if (meme.idx === 1) {
            let x = gElCanvas.width / 2 - 25
            let y = gElCanvas.height - 25
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }
            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor,meme.font)
        } else {
            let x = gElCanvas.width / 2 - 25
            let y = gElCanvas.height / 2
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }
            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor,meme.font)
        }
    })
}
function renderMeme() {
    let text = document.getElementById('meme-text')
    console.log(gMeme)
    if (!gMeme.length) createMeme(text.value)
    let currMeme = gMeme[gClicks]
    currMeme.txt = text.value
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}



function changeFont(font){
    let currMeme = gMeme[gClicks]
    // let font = document.querySelector('.font-style')
    currMeme.font = font
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}


function changeColorFill() {
    let currMeme = gMeme[gClicks]
    let color = document.querySelector('.fill-color-val').value
    currMeme.fillColor = color
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function alignRight(){
    let currMeme = gMeme[gClicks]
    let textWidth = gCtx.measureText(currMeme.txt).width
    currMeme.pos.x = gElCanvas.width - textWidth-20
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function alignCenter(){
    let currMeme = gMeme[gClicks]
    currMeme.pos.x = gElCanvas.width/2 -25
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function alignLeft(){
    let currMeme = gMeme[gClicks]
    currMeme.pos.x = 10
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function changeColorFont() {
    let currMeme = gMeme[gClicks]
    let color = document.querySelector('.font-color-val').value
    currMeme.color = color
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function fontUp() {
    let currMeme = gMeme[gClicks]
    currMeme.size += 10
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function fontDown() {
    let currMeme = gMeme[gClicks]
    currMeme.size -= 10
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function textLeft() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.x -= 20
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function textRight() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.x += 20
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function textDown() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.y += 20
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}
function textUp() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.y -= 20
    clearCanvas()
    // let width = gCtx.measureText(currMeme.txt).width
    renderImg(gCurrImg)
    // drawLine(currMeme.pos.x,currMeme.pos.y+5,currMeme.pos.x+width,currMeme.pos.y+5)
    printMemes()
}

function editText() {
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
    let text = document.getElementById('meme-text')
    if (!gClicks) {
        gClicks = gMeme.length - 1
        text.value = gMeme[gClicks].txt
        let width = gCtx.measureText(gMeme[gClicks].txt).width
        drawRect(gMeme[gClicks].pos.x-8,gMeme[gClicks].pos.y+5,width+20,-gMeme[gClicks].size - 5)
        // drawLine(gMeme[gClicks].pos.x,gMeme[gClicks].pos.y+5,gMeme[gClicks].pos.x+width,gMeme[gClicks].pos.y+5)
    }
    else {
        gClicks--
        text.value = gMeme[gClicks].txt
        let width = gCtx.measureText(gMeme[gClicks].txt).width
        drawRect(gMeme[gClicks].pos.x-8,gMeme[gClicks].pos.y+5,width+20,-gMeme[gClicks].size - 5)
        // drawLine(gMeme[gClicks].pos.x,gMeme[gClicks].pos.y+5,gMeme[gClicks].pos.x+width,gMeme[gClicks].pos.y+5)
    }
}

function drawRect(x, y,wordWid,wordHei) {
    gCtx.beginPath()
    gCtx.rect(x, y, wordWid, wordHei);
    // gCtx.fillStyle = 'green';
    // gCtx.fillRect(x, y, wordWid, wordHei);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

function addLine() {
    let text = document.getElementById('meme-text')
    console.log(gMeme[gClicks].idx)
    if (!text.value) return
    if (gMeme[gClicks].idx !== gMeme.length - 1) {
        gClicks = gMeme.length
        text.value = ''
        createMeme(text.value)
        return
    }
    if (gMeme[gClicks]) gClicks = gMeme.length
    else gClicks++

    text.value = ''
    createMeme(text.value)
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
    console.log(gMeme)
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function drawText(txt, x, y, fontSize = 50, color, fillColor,font, align ) {
    gCtx.textAlign = align;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = `${fillColor}`;
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = `${color}`;
    gCtx.strokeText(txt, x, y);
}

function drawLine(x,y,xEnd,yEnd) {
    gCtx.beginPath()
    gCtx.lineWidth = 2;
    gCtx.moveTo(x, y);
    gCtx.lineTo(xEnd, yEnd);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}
// function drawLine(x, y, xEnd = 250, yEnd = 250) {
//     gCtx.lineWidth = 2;
//     gCtx.moveTo(x, y);
//     gCtx.lineTo(xEnd, yEnd);
//     gCtx.strokeStyle = 'green';
//     gCtx.stroke();
// }
