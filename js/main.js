$(document).ready(function () {
 
  AOS.init();

  // 토글 버튼 눌렀을 때 메뉴 내려와라
  var menuToggleBtn = $(".menu-toggle-btn");
  mainMenu = $(".main-menu1");
  menuToggleBtn.click(function () {
    mainMenu.slideToggle();
  });

});
