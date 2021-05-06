function isOffTop(rect) {
  return (rect.bottom + 100) < 0
}

function isOffBottom(rect) {
  return (rect.top + 100) > (window.innerHeight || document.documentElement.clientHeight)
}

function isOffRight(rect) {
  return (rect.left + 100) > (window.innerWidth || document.documentElement.clientWidth)
}

function isOffLeft(rect) {
  return (rect.right + 100) < 0
}

function isOutOfViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      isOffTop(rect) || isOffLeft(rect) || isOffBottom(rect) || isOffLeft(rect)
  );
}

function updateVisibility(items) {
  Array.from(items).forEach(item => {
    if(isOutOfViewport(item)) {
      item.classList.remove('shown');
    } else {
      item.classList.add('shown')
    }
  });
}

const items = document.getElementsByClassName('item')

document.addEventListener('scroll', function () {
  updateVisibility(items)
}, {
  passive: true
});

window.addEventListener('load', (event) => {
  updateVisibility(items)
})
