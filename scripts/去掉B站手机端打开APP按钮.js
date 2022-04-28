var style123 = document.createElement('style')
style123.textContent = `
.mplayer-widescreen-callapp,
.launch-app-btn.m-video-main-launchapp.visible-open-app-btn img,
.launch-app-btn.m-float-openapp,
.launch-app-btn.home-float-openapp {
  display: none!important;
}
`
document.head.appendChild(style123)
setInterval(function () {
  var btn = document.querySelector('.mplayer-widescreen-callapp')
  if (btn) {
    btn.remove()
  }
}, 500)
