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
});