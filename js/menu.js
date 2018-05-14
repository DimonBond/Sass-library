(function() {
  var menu = document.querySelector('.ada-menu');
  var wrap = document.querySelector('.ada-wrap');

  function menuToggle() {
    menu.classList.toggle('open-sidebar');

    wrap.classList.toggle('content');

    document.body.classList.toggle('modal-open');

    if (document.body.classList.contains('modal-open')) {
      var newDiv = document.createElement('div');
      newDiv.classList.add('layer');
      document.body.appendChild(newDiv);
      newDiv.addEventListener("click", menuToggle);
    }
    else {
      var newDiv = document.querySelector('.layer');
      document.body.removeChild(newDiv);
    }
  }
  Array.from(document.querySelectorAll('[data-ada-menu-toggle]')).map(function(el) {
    el.addEventListener('click', menuToggle)
  })
})();