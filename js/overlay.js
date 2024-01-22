  $(document).ready(function () {

    var menuToggleBtn = $(".menu-toggle-btn");
    var mainMenu = $(".main-menu1");
    var overlay = $("#overlay");

    menuToggleBtn.click(function () {
      if (mainMenu.css('right') === '0px') {
        // Menu is currently open, so close it and hide the overlay
        mainMenu.animate({ right: '-250px' }, 300);
        overlay.hide();
      } else {
        // Menu is closed, so open it and show the overlay
        mainMenu.animate({ right: '0' }, 300);
        overlay.show();
      }
    });

    $(document).mouseup(function (e) {
      if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0) {
        mainMenu.animate({ right: '-250px' }, 300);
        overlay.hide();
      }
    });

  });