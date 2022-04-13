'use strict'
let gYposition = 50;
let gXposition;
let gClicks = 0
let gMeme =[]
function createMeme(txt, size = '14px', align = 'center', color = 'black', font = 'impact') {
    gMeme.push({
        idx:gClicks,
        txt,
        size,
        align,
        color,
        font
    })
    //  {
        // lines: [
            // {
            //     txt,
            //     size,
            //     align,
            //     color,
            //     font
            // }
        // ]
    // }
        // ]
    return gMeme
}
function editMeme(txt, fontSize, color) {
    gMeme = createMeme()
    gMeme[gClicks].txt = txt
    return gMeme
}

function renderMeme() {
    let text = document.getElementById('meme-text')
    console.log(gClicks)
    clearCanvas()
    let currMeme = editMeme(text.value)
    renderImg(gCurrImg)
    currMeme.forEach(meme =>drawText(meme.txt,gElCanvas.width/2,50*meme.idx+gYposition) )
    // drawText(currMeme[0].txt, gElCanvas.width / 2, gYposition)
    text.value = ''
    console.log(gMeme)
    gClicks++
    gYposition = 50
}
function textDown(){
    gYposition += 150
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

}

function drawText(txt, x, y,align,font) {
    gCtx.textAlign = align;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.font = `50px ${font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
}