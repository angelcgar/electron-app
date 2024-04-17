const $ = selector => document.querySelector(selector)

const $count = $('#count')
const $button = $('#button')

$button.addEventListener('click', () => {
  const conut = $button.innerText
  $count.innerText = parseInt($count.innerText) + parseInt(conut)
})

window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  console.log({ theme })
  root.style.setProperty('--bg-color', theme)
})
