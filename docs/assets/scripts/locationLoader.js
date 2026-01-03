import { buildHeader } from "./buildElements.js";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const locationName = getQueryParam("location");

function checkLocation () {
  if (!locationName || !/^[a-zA-Z0-9_-]+$/.test(locationName)) {
    console.warn("Invalid or missing location parameter");
    return false;
  }  
  return true;
}

function addLocationStylesheet() {
  
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `./locations/${locationName}/style.css`;
  document.head.appendChild(link);
}

function removeLocationSelection () {
    const form = document.getElementById("form");
    form.remove();
}

buildHeader(locationName);
if(checkLocation())
{
    removeLocationSelection();
    addLocationStylesheet();
}
