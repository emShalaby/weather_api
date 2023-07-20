import { getData } from "./get-weather";
export async function fillElements() {
  const info = await getData(document.querySelector("#city").value);
  document.querySelector("#condition").textContent = info.description;
  document.querySelector("#country").textContent = info.country;
  document.querySelector("#city-name").textContent = info.city;
  document.querySelector("#icon").src = "https:" + info.icon;
  document.querySelector("#humidity").textContent = info.humidity;
  document.querySelector("#temp").textContent = info.tempC + " ℃";
}
