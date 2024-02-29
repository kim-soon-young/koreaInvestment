document.addEventListener("DOMContentLoaded", function () {
  const modalWrap = document.querySelector(".modal-wrap");
  const closeModalButton = document.querySelector(".close-modal");
  const noShowCheckbox = document.getElementById("no-show");
  const noShowLink = document.querySelector(".close-today a");

  function closeModal() {
    modalWrap.style.display = "none";
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
  }

  function getCookie(name) {
    const keyValue = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
  }

  closeModalButton.addEventListener("click", function () {
    closeModal();
  });

  noShowLink.addEventListener("click", function (e) {
    e.preventDefault(); // 링크 클릭의 기본 동작 방지

    if (noShowCheckbox.checked) {
      setCookie("popup-close", "true", 1); // Cookie expires in 1 day
    }

    closeModal();
  });

  // 페이지 로드 시 쿠키 확인하여 모달 노출 여부 결정
  const isOpen = getCookie("popup-close") !== "true";
  modalWrap.style.display = isOpen ? "flex" : "none";




  AOS.init();

  var menuToggleBtn = document.querySelector(".menu-toggle-btn");
  var mainMenu = document.querySelector(".main-menu1");
  var overlay = document.getElementById("overlay");

  menuToggleBtn.addEventListener("click", function () {
    if (getComputedStyle(mainMenu).right === "0px") {
      mainMenu.style.right = "-250px";
      overlay.style.display = "none";
    } else {
      mainMenu.style.right = "0";
      overlay.style.display = "block";
    }
  });

  document.addEventListener("mouseup", function (e) {
    if (!mainMenu.contains(e.target)) {
      mainMenu.style.right = "-250px";
      overlay.style.display = "none";
    }
  });

  var button = document.querySelector(".btn-down");
  button.addEventListener("click", function () {
    scrollToSection("#section-01");
  });

  function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  var initialNavColor = "rgba(0, 0, 0, 0)";

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var section1Position = document.getElementById("section-01").offsetTop;

    if (scrollPosition > section1Position) {
      document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      document.querySelector("header").style.backgroundColor = initialNavColor;
    }
    });
});