const app = document.querySelector('.app')
const question = document.querySelector('.question')
const btnYes = document.querySelector('.yes')
const btnNo = document.querySelector('.no')

const appRect = app.getBoundingClientRect()
const noBtnRect = btnNo.getBoundingClientRect()

btnYes.addEventListener('click', () => {
  question.innerHTML = 'ไอ้เกย์'
})

btnNo.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (appRect.width - noBtnRect.width) + 3)
  const y = Math.floor(Math.random() * (appRect.height - noBtnRect.height) + 3)

  btnNo.style.left = x + 'px'
  btnNo.style.top = y + 'px'
})
