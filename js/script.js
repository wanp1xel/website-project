window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
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
  }, 2500);
}

window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
}