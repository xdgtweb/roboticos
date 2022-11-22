document.getElementById('tooltip_container').addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY

  if (e.target.className === 'tooltip-box') {
    e.target.children[0].style.top = (y + 15) + 'px'
    e.target.children[0].style.left = (x + 15) + 'px'
  }

  if (e.target.parentNode.className === 'tooltip-box') {
    e.target.parentNode.children[0].style.top = (y + 15) + 'px'
    e.target.parentNode.children[0].style.left = (x + 15) + 'px'
  }
})