export function useFlyToCart() {
  function fly(fromEl, toEl) {
    const fromRect = fromEl.getBoundingClientRect()
    const toRect = toEl.getBoundingClientRect()

    const clone = fromEl.cloneNode(true)
    clone.style.position = 'fixed'
    clone.style.left = `${fromRect.left}px`
    clone.style.top = `${fromRect.top}px`
    clone.style.width = `${fromRect.width}px`
    clone.style.height = `${fromRect.height}px`
    clone.style.zIndex = 10000
    clone.style.transition = 'all 0.8s ease-in-out'
    clone.style.borderRadius = '20px'
    clone.style.opacity = '0.9'

    document.body.appendChild(clone)

    // Force reflow to make transition work
    void clone.offsetWidth

    clone.style.left = `${toRect.left + toRect.width / 2 - fromRect.width / 4}px`
    clone.style.top = `${toRect.top + toRect.height / 2 - fromRect.height / 4}px`
    clone.style.width = `${fromRect.width / 2}px`
    clone.style.height = `${fromRect.height / 2}px`
    clone.style.opacity = '0'

    setTimeout(() => {
      clone.remove()
    }, 900)
  }

  return { fly }
}
