$(document).ready(function () {
    // 네비게이션의 초기 배경 색상
    var initialNavColor = "rgba(0, 0, 0, 0)";
  
    // 페이지 스크롤 이벤트
    $(window).scroll(function () {
      // 현재 스크롤 위치
      var scrollPosition = $(this).scrollTop();
  
      // 원하는 섹션의 위치 (예: 섹션1의 offset().top 값)
      var section1Position = $("#section-01").offset().top;
  
      // 네비게이션의 배경 변경 조건 (스크롤 위치가 섹션1의 위치를 넘어갈 때)
      if (scrollPosition > section1Position) {
        $("header").css({
          "background-color": "rgba(0, 0, 0, 0.5)", // 원하는 배경 색상으로 변경
        });
      } else {
        $("header").css({
          "background-color": initialNavColor, // 초기 배경 색상으로 복원
        });
      }
    });
  });