window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
      document.querySelector('.scroll-top')
          .classList.add('show');
  } else {
      document.querySelector('.scroll-top')
          .classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo(0, 0);
};


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 7000);
}