// Header
export function buildHeader(locationName) {
  const headerElement = document.getElementsByTagName("header")[0];
  headerElement.classList = "bg-primary text-center flex items-center p-3";

  const locationPhotoElement = document.createElement("img");
  locationPhotoElement.src = locationName ? `./locations/${locationName}/logo.png` : `./assets/images/no-image.svg`;
  locationPhotoElement.alt = locationName ? `${locationName.replaceAll("-", " ")} Logo` : "Swing Requests Logo";
  locationPhotoElement.classList = "w-15 invert";

  const locationNameElement = document.createElement("h1");
  locationNameElement.textContent = locationName ? locationName.replaceAll("-", " ") : "Swing Requests";
  locationNameElement.classList = "text-3xl font-bold text-white p-3";

  headerElement.appendChild(locationPhotoElement);
  headerElement.appendChild(locationNameElement);
}
