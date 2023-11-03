let myTimeout;

function cancelTimeout() {
  clearTimeout(myTimeout);
}

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
  myTimeout = setTimeout(function () {
    window.location.href =
      "https://www.cashaly.com/load-offer-store/ST137RH400";
  }, 8000);
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
  cancelTimeout();
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
    cancelTimeout();
  }
});
