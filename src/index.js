import "./style.css";
import { getData } from "./get-weather.js";

document.querySelector("#submit").addEventListener("click", () => {
  getData(document.querySelector("#city").value);
});
