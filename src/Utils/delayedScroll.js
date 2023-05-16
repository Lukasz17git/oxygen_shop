const toTopID = "to-top"

export const addDelayedScroll = (elementID = toTopID) => {
   document.getElementById(elementID).addEventListener('click', (e) => {
      e.preventDefault()
      setTimeout(() => {
         window.scrollTo({ top: 0, left: 0 })
         console.log(window.location.pathname)
         window.history.pushState('', '', window.location.pathname)
      }, 200)
   })
}
