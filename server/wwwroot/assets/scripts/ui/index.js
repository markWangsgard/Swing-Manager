const dropdownElement = document.getElementById("choseLocation");
dropdownElement.addEventListener("input", (e) => {
  e.preventDefault();
  window.location.assign(`./now-playing.html?location=${dropdownElement.value}`);
});
