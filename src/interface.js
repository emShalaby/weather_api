import { getData } from "./get-weather";
export async function fillElements() {
  const info = await getData(document.querySelector("#city").value);
  document.querySelector("#condition").textContent = info.description;
}
