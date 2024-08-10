function scrollDiv(direction) {
    const scrollableDiv = document.getElementById('scrollable-div');
    const scrollAmount = 500;

    if (direction === 'left') {
        scrollableDiv.scrollTo({
            left: scrollableDiv.scrollLeft - scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        scrollableDiv.scrollTo({
            left: scrollableDiv.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    }
}

function toggleDiv() {
    var div = document.getElementById("offcanvasNavbar");
    if (div.classList.contains("show")) {
      div.classList.remove("show");
      setTimeout(() => { div.style.display = "none"; }, 300); // Wait for transition to complete
    } else {
      div.style.display = "flex";
      setTimeout(() => { div.classList.add("show"); }, 10); // Allow display to update before transition
    }
  }
  window.addEventListener('resize', () => {
    var div = document.getElementById("offcanvasNavbar");
    if (window.innerWidth >= 992) {
      div.classList.remove("show");
      div.style.display = "none";
    }
  });
  document.addEventListener('click', function (event) {
    var div = document.getElementById("offcanvasNavbar");
    var button = document.querySelector('button');
    if (div.classList.contains('show') && !div.contains(event.target) && !button.contains(event.target)) {
      div.classList.remove("show");
      setTimeout(() => { div.style.display = "none"; }, 300); // Wait for transition to complete
    }
  });