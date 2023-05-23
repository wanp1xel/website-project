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

// Закриття активного accordion-link при кліку на нього
var accordionLinks = document.querySelectorAll('.accordion-link');

accordionLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var parentItem = this.parentNode;

    if (parentItem.classList.contains('active')) {
      parentItem.classList.remove('active');
    } else {
      // Закриття інших активних accordion-item
      var activeItems = document.querySelectorAll('.accordion-item.active');
      activeItems.forEach(function(activeItem) {
        activeItem.classList.remove('active');
      });

      parentItem.classList.add('active');
    }
  });
});
