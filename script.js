function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const items = document.getElementsByClassName('item')

document.addEventListener('scroll', function () {
  Array.from(items).forEach(item => {
    if(isInViewport(item)) {
      item.classList.add('shown');
    } else {
      item.classList.remove('shown')
    }
  });
}, {
  passive: true
});
