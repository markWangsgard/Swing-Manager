import { buildUserFooter, buildHeader } from "./buildElements.js";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const locationName = getQueryParam("location");

function checkLocation() {
  if (!locationName || !/^[a-zA-Z0-9_-]+$/.test(locationName)) {
    console.warn("Invalid or missing location parameter");

    const currentUrl = new URL(window.location.href);
    const newPath = currentUrl.pathname.includes("docs")
      ? `/docs/index.html`
      : `/Swing-Manager/index.html`;
    currentUrl.pathname = newPath;

    window.location.assign(currentUrl.toString());

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

buildHeader(locationName);
buildUserFooter();
if (checkLocation()) {
  addLocationStylesheet();
}
