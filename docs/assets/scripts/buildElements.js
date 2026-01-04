// Header
export function buildHeader(locationName) {
  const headerElement = document.getElementsByTagName("header")[0];
  headerElement.classList = "flex justify-center p-3";

  const locationPhotoElement = document.createElement("img");
  locationPhotoElement.src = locationName
    ? `./locations/${locationName}/logo.png`
    : `./assets/images/no-image.svg`;
  locationPhotoElement.alt = locationName
    ? `${locationName.replaceAll("-", " ")} Logo`
    : "Swing Requests Logo";
  locationPhotoElement.classList = "w-[15em]";
  //   locationPhotoElement.style.backgroundColor = "var(--primary-dark)"

  //   const locationNameElement = document.createElement("h1");
  //   locationNameElement.textContent = locationName ? locationName.replaceAll("-", " ") : "Swing Requests";
  //   locationNameElement.classList = "text-3xl font-bold text-white p-3";

  headerElement.appendChild(locationPhotoElement);
  //   headerElement.appendChild(locationNameElement);
}
export function buildFooter() {
  const footerElement = document.getElementsByTagName("footer")[0];
  footerElement.classList = "bg-primary flex justify-evenly items-end p-3";

  const navElement = document.createElement("nav");

  // Now Playing Button
  const nowPlayingDivElement = document.createElement("div");
  nowPlayingDivElement.classList =
    "flex flex-col items-center p-3 rounded rounded-2xl cursor-pointer";

  const nowPlayingIcon = document.createElement("img");
  nowPlayingIcon.src = "./assets/images/now-playing.svg";
  nowPlayingIcon.alt = "Now Playing";
  nowPlayingIcon.classList = "w-[3em] h-[3em]";

  const nowPlayingTextElement = document.createElement("p");
  nowPlayingTextElement.textContent = "Now Playing";
  nowPlayingTextElement.classList = "text-white";

  nowPlayingDivElement.appendChild(nowPlayingIcon);
  nowPlayingDivElement.appendChild(nowPlayingTextElement);

  // Request Songs Button
  const requestSongsDivElement = document.createElement("div");
  requestSongsDivElement.classList =
    "flex flex-col items-center p-3 rounded rounded-2xl cursor-pointer";

  const requestSongIcon = document.createElement("img");
  requestSongIcon.src = "./assets/images/request-songs.svg";
  requestSongIcon.alt = "Request Songs";
  requestSongIcon.classList = "w-[3.5em] h-[3em]";

  const requestSongTextElement = document.createElement("p");
  requestSongTextElement.textContent = "Request a Song";
  requestSongTextElement.classList = "text-white";

  requestSongsDivElement.appendChild(requestSongIcon);
  requestSongsDivElement.appendChild(requestSongTextElement);

  footerElement.appendChild(nowPlayingDivElement);
  footerElement.appendChild(requestSongsDivElement);

  // Event Listeners
  nowPlayingDivElement.addEventListener("click", () => {
    const currentUrl = new URL(window.location.href);
    const newPath = currentUrl.pathname.includes("docs")
      ? `/docs/now-playing.html`
      : `/Swing-Manager/now-playing.html`;
    currentUrl.pathname = newPath;

    window.location.assign(currentUrl.toString());
  });

  requestSongsDivElement.addEventListener("click", () => {
    const currentUrl = new URL(window.location.href);
    const newPath = currentUrl.pathname.includes("docs")
      ? `/docs/request-songs.html`
      : `/Swing-Manager/request-songs.html`;
    currentUrl.pathname = newPath;

    window.location.assign(currentUrl.toString());
  });

  // Highlights which location they are in
  const urlPath = window.location.pathname;
  if (urlPath.includes("now-playing")) {
    nowPlayingDivElement.classList.add("bg-primary-light");
  } else {
    requestSongsDivElement.classList.add("bg-primary-light");
  }
}
