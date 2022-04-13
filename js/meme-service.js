'use strict'
let gYposition = 50;
let gXposition;
let gClicks = 0
let gMeme = []
console.log('asd')
function createMeme(txt, size = '14px', align = 'center', color = 'black', font = 'impact') {
    gMeme.push({
        idx: gClicks,
        txt,
        size,
        align,
        color,
        font,
    })
    return gMeme
}

function printMemes() {
    gMeme.forEach(meme => {
        if (!meme.idx) {
            let x = gElCanvas.width / 2 - 25
            let y = 50;
            drawText(meme.txt, x, y)
        } else if (meme.idx === 1) {
            let x = gElCanvas.width / 2 - 25
            let y = gElCanvas.height - 50
            drawText(meme.txt, x, y)
        } else {
            let x = gElCanvas.width / 2 - 25
            let y = gElCanvas.height / 2
            drawText(meme.txt, x, y)
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

function editText() {
    let text = document.getElementById('meme-text')
    if (!gClicks){ 
        gClicks = gMeme.length - 1
        text.value = gMeme[gClicks].txt}
    else {
        gClicks--
        text.value = gMeme[gClicks].txt}
    
   
}


function addLine() {
    let text = document.getElementById('meme-text')
    if (!text.value) return
    if(gMeme[gClicks]) gClicks = gMeme.length
    else gClicks++
    text.value = ''
    createMeme(text.value)
    console.log(gMeme)
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

}

function drawText(txt, x, y, align, font) {
    gCtx.textAlign = align;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.font = `50px ${font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
}