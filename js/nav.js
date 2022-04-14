'use strict'

let KEY_WORDS = [{ name: "funny", size: 10, idx: 1 }, { name: "baby", size: 12, idx: 2 }, { name: "politics", size: 17, idx: 3 }, { name: "famous", size: 15, idx: 4 }, { name: "cute", size: 15, idx: 5 }, { name: "sport", size: 15, idx: 6 },
{ name: "tv", size: 17, idx: 7 }, { name: "child", size: 12, idx: 8 }, { name: "dog", size: 15, idx: 9 }, { name: "simba", size: 15, idx: 10 }]

function renderImagesByKeywords() {
    let keyWord = document.getElementById('input-text').value
    let images = getImages()
    let strHTML = ''
    images.forEach(image => {
        if (image.keyWords.includes(`${keyWord}`)) {
            strHTML += `<div class="image"><img onclick="onClickImg(this)" id='img-${image.id}' src="images/${image.url}"></img></div>`
        }
        let imageHolder = document.querySelector('.gallery')
        imageHolder.innerHTML = strHTML
    })
}
renderSearchBtns()
function renderSearchBtns() {
    let searchBtns = document.querySelector('.search-btns')
    let strHTML = ''
    KEY_WORDS.forEach(keyWord => strHTML += `<p style="font-size:${keyWord.size}px;" id="${keyWord.idx}" onclick="searchAndGrow(this)" class="search-word">${keyWord.name}</p>`)
    searchBtns.innerHTML = strHTML
}

function searchAndGrow(keyWord) {
   let currKey = document.getElementById(`${keyWord.id}`)
   KEY_WORDS[keyWord.id-1].size += 1
    currKey.style.fontSize = `${KEY_WORDS[keyWord.id-1].size}px`
    let currKeyWord = currKey.innerText
    console.log(currKeyWord)
    let images = getImages()
    let strHTML = ''
    images.forEach(image => {
        if (image.keyWords.includes(`${currKeyWord}`)) {
            strHTML += `<div class="image"><img onclick="onClickImg(this)" id='img-${image.id}' src="images/${image.url}"></img></div>`
        }
        let imageHolder = document.querySelector('.gallery')
        imageHolder.innerHTML = strHTML
    })
}