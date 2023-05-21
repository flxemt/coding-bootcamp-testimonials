const imageContainer = document.querySelector('.image-container')
const mainText = document.querySelector('.main-text')
const images = document.querySelectorAll('.image-container img')
const texts = document.querySelectorAll('.text-container')
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')

let currentPos = 0

function setContent() {
  imageContainer.style.setProperty('--current-pos', currentPos)
  mainText.classList.add('invisible')

  setTimeout(() => {
    texts.forEach(image => image.classList.add('hidden'))
    texts[currentPos].classList.remove('hidden')
    mainText.classList.remove('invisible')
  }, 300)
}

function goNext() {
  currentPos++
  if (currentPos >= images.length) currentPos = 0
  setContent()
}

function goBack() {
  currentPos--
  if (currentPos < 0) currentPos = images.length - 1
  setContent()
}

nextBtn.addEventListener('click', goNext)
prevBtn.addEventListener('click', goBack)

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') goBack()
  else if (event.key === 'ArrowRight') goNext()
})
