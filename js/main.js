$(document).ready(function () {
 
  AOS.init();

  //햄버거를 누르면 오른쪽에서 메뉴가 나와라.
  var menuToggleBtn = $(".menu-toggle-btn");
  var mainMenu = $(".main-menu1");

  menuToggleBtn.click(function () {
    mainMenu.animate({ right: '0' }, 300,); // 오른쪽에서 슬라이딩
  });

  // 메뉴 외부를 클릭하면 메뉴를 닫습니다.
  $(document).mouseup(function (e) {
    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0) {
      mainMenu.animate({ right: '-250px' }, 300); // 오른쪽으로 슬라이딩해서 닫기
    }
  });

});
