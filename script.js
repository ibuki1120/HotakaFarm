document.addEventListener('click', (event) => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show') && !navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      // メニューが開いていて、クリックされた要素がnavbarTogglerでもnavbarCollapseでもない場合
      navbarCollapse.classList.remove('show');
    }
  });