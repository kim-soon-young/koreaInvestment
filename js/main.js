$(document).ready(function () {
  // 안내창 스크립트
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 안내창 스크립트+ 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";

    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });

  AOS.init();

  //햄버거를 누르면 오른쪽에서 메뉴가 나와라.
  var menuToggleBtn = $(".menu-toggle-btn");
  var mainMenu = $(".main-menu1");

  menuToggleBtn.click(function () {
    mainMenu.animate({ right: "0" }, 300); // 오른쪽에서 슬라이딩
  });

  // 메뉴 외부를 클릭하면 메뉴를 닫습니다.
  $(document).mouseup(function (e) {
    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0) {
      mainMenu.animate({ right: "-250px" }, 300); // 오른쪽으로 슬라이딩해서 닫기
    }
  });
  var menuToggleBtn = $(".menu-toggle-btn");
  var mainMenu = $(".main-menu1");
  var overlay = $("#overlay");

  menuToggleBtn.click(function () {
    if (mainMenu.css("right") === "0px") {
      // Menu is currently open, so close it and hide the overlay
      mainMenu.animate({ right: "-250px" }, 300);
      overlay.hide();
    } else {
      // Menu is closed, so open it and show the overlay
      mainMenu.animate({ right: "0" }, 300);
      overlay.show();
    }
  });

  $(document).mouseup(function (e) {
    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0) {
      mainMenu.animate({ right: "-250px" }, 300);
      overlay.hide();
    }
  });

  // 비주얼 이동 버튼 스크롤 기능
  const button = document.querySelector(".btn-down");
  // 비주얼 클릭했을때 스크롤이 이동하는 함수를 실행한다.
  button.addEventListener("click", function () {
    // button클릭했을때, 실행해라 . scrollToSection()을
    // scrollToSection()#business 영역으로 이동 해라
    scrollToSection("#section-01");
  });
  function scrollToSection(sectionId) {
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      // scrollIntoView()메서드는 부드러운 스크롤 효과를 적용하도록 지정합니다.
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

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
