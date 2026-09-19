function toggleMenu() {
  var icon = document.getElementById('menu-icon');
  icon.style.display = 'block';
  var openClose = icon.getElementsByTagName('i');
  var close = openClose[0];
  var open = openClose[1];
  var x = document.querySelector('nav>ul');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'block';
  } else {
    x.style.display = 'flex';
    close.style.display = 'block';
    open.style.display = 'none';
  }
}

window.addEventListener('resize', (e) => {
  var x = document.querySelector('nav>ul');
  var icons = document.querySelectorAll('nav div i');
  var close = icons[0];
  var open = icons[1];
  var width = window.innerWidth;

  if (width > 500) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
  } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});

window.addEventListener('load', (e) => {
  var mobileMenuIcon = document.getElementById('menu-icon');
  mobileMenuIcon.addEventListener('click', (e) => {
    toggleMenu(e);
  });
  var x = document.querySelector('nav>ul');
  var icons = document.querySelectorAll('nav div i');
  var close = icons[0];
  var open = icons[1];
  var width = window.innerWidth;
  if (width > 500) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
   } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});

