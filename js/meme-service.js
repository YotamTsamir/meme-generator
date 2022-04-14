'use strict'
let gYposition = 50;
let gXposition;
let gClicks = 0
let gMeme = []
let gStartPos;
let isItem;
let clickDown
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
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
        // width
    })
    return gMeme
}
addListeners()
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        console.log('here')
        resizeCanvas()
        clearCanvas()
        renderImg(gCurrImg)
        printMemes()
    })
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
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

function isItemClicked(clickedPos) {
    const { pos } = gMeme[gClicks]
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    return distance <= gMeme[gClicks].size
}


function onDown(ev) {
    const pos = getEvPos(ev)
    gMeme.find(meme => {
        let width = gCtx.measureText(meme.txt).width
        let distance = Math.sqrt((pos.x - meme.pos.x) ** 2 + (pos.y - meme.pos.y) ** 2)
        if (distance <= width && pos.x >= meme.pos.x && pos.y <= meme.pos.y && pos.y >= meme.pos.y - meme.size) {
            isItem = meme
            clickDown = true
            editTextByClick()
            return isItem
        }
    })
    console.log(isItem)
}

function onMove(ev) {
    if (!clickDown) return
    const pos = getEvPos(ev)
    // const dx = pos.x - gStartPos.x
    // const dy = pos.y - gStartPos.y
    isItem.pos.x = pos.x
    isItem.pos.y = pos.y
    // moveItem(dx, dy)
    // gStartPos = pos
    // renderCanvas()
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function onUp() {
    clickDown = false
}
function printMemes() {
    gMeme.forEach(meme => {
        let width = gCtx.measureText(gMeme[gClicks].txt).width
        if (!meme.idx) {
            let x = gElCanvas.width / 2 - width / 2
            let y = 50;
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }

            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor, meme.font)
        } else if (meme.idx === 1) {
            let x = gElCanvas.width / 2 - width / 2
            let y = gElCanvas.height - 25
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }
            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor, meme.font)
        } else {
            let x = gElCanvas.width / 2 - width / 2
            let y = gElCanvas.height / 2
            if (!meme.pos.x) {
                meme.pos.x = x
                meme.pos.y = y
            }
            drawText(meme.txt, meme.pos.x, meme.pos.y, meme.size, meme.color, meme.fillColor, meme.font)
        }
    })
}
function renderMeme() {
    let text = document.getElementById('meme-text')
    if (isItem) {
        isItem.txt = text.value
        clearCanvas()
        renderImg(gCurrImg)
        printMemes()
        return
    }
    if (!gMeme.length) createMeme(text.value)
    let currMeme = gMeme[gClicks]
    currMeme = gMeme[gClicks]
    console.log(currMeme)
    currMeme.txt = text.value
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}

function changeFont(font) {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.font = font
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}


function changeColorFill() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    let color = document.querySelector('.fill-color-val').value
    currMeme.fillColor = color
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function alignRight() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    let textWidth = gCtx.measureText(currMeme.txt).width
    currMeme.pos.x = gElCanvas.width - textWidth - 20
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function alignCenter() {
    let currMeme = gMeme[gClicks]
    let width = gCtx.measureText(gMeme[gClicks].txt).width
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.pos.x = gElCanvas.width / 2 - width / 2
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function alignLeft() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.pos.x = 10
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function changeColorFont() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    let color = document.querySelector('.font-color-val').value
    currMeme.color = color
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function fontUp() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.size += 10
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function fontDown() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.size -= 10
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function textLeft() {
    let currMeme = gMeme[gClicks]
    if (isItem) currMeme = isItem
    isItem = false
    currMeme.pos.x -= 20
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function textRight() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.x += 20
    isItem = false
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function textDown() {
    let currMeme = gMeme[gClicks]
    currMeme.pos.y += 20
    clearCanvas()
    renderImg(gCurrImg)
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

function editTextByClick() {
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
    let text = document.getElementById('meme-text')
    if (isItem) {
        text.value = isItem.txt
        let width = gCtx.measureText(isItem.txt).width
        drawRect(isItem.pos.x - 8, isItem.pos.y + 5, width + 20, -isItem.size - 5)
        return
    }
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
        drawRect(gMeme[gClicks].pos.x - 8, gMeme[gClicks].pos.y + 5, width + 20, -gMeme[gClicks].size - 5)
    }
    else {
        gClicks--
        // if(!gMeme[gClicks].txt) gClicks--
        text.value = gMeme[gClicks].txt
        let width = gCtx.measureText(gMeme[gClicks].txt).width
        drawRect(gMeme[gClicks].pos.x - 8, gMeme[gClicks].pos.y + 5, width + 20, -gMeme[gClicks].size - 5)
    }
}

function drawRect(x, y, wordWid, wordHei) {
    gCtx.beginPath()
    gCtx.rect(x, y, wordWid, wordHei);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}
function deleteItem() {
    let text = document.getElementById('meme-text')
    let currMeme = gMeme[gClicks]
    currMeme.txt = ''
    text.value = ''
    if (isItem) {
        isItem.txt = ''
        text.value = ''
    }
    // console.log(isItem)
    // if (isItem) {
    //     let idx = isItem.idx
    //     gMeme.splice(idx, 1)
    //     clearCanvas()
    //     renderImg(gCurrImg)
    //     printMemes()
    //     isItem = false
    //     gClicks = idx - 1
    //     if (!gClicks) {
    //         text.value = `${gMeme[gClicks].txt}`
    //         gClicks = 0
    //     }
    //     else text.value = ''
    //     return
    // }
    // gMeme.splice(gMeme[gClicks].idx, 1)
    // text.value = ''
    // if (gClicks) gClicks--
    // if (gClicks < 0) {
    //     text.value = ''
    //     gMeme[gClicks].txt = ''
    // }
    // else text.value = gMeme[gClicks].txt
    clearCanvas()
    renderImg(gCurrImg)
    printMemes()
}
function addLine() {
    let text = document.getElementById('meme-text')
    // console.log(gMeme[gClicks].idx)
    if (!text.value) return
    if (isItem) {
        gClicks = gMeme.length
        text.value = ''
        createMeme(text.value)
        isItem = false
        return
    }
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

function drawText(txt, x, y, fontSize = 50, color, fillColor, font, align) {
    gCtx.textAlign = align;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = `${fillColor}`;
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = `${color}`;
    gCtx.strokeText(txt, x, y);
}

function drawLine(x, y, xEnd, yEnd) {
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
