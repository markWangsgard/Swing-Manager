import { buildUserFooter, buildHeader } from "./buildElements.js";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const locationName = getQueryParam("location");

function checkLocation() {
  if (!locationName || !/^[a-zA-Z0-9_-]+$/.test(locationName)) {
    console.warn("Invalid or missing location parameter");

    window.location.assign("./index.html");

    return false;
  }
  return true;
}

function addLocationStylesheet() {
  document.documentElement.dataset.location = locationName;
}

buildHeader(locationName);
buildUserFooter();
if (checkLocation()) {
  addLocationStylesheet();
}
