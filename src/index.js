import "./style.css";
import bgImg from "./bg.png";
const img = document.querySelector("img");
const cond = document.querySelector("#condition");
const bg = new Image();
bg.src = bgImg;
async function getData() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=cca1e056bc40431796805445231907&q=london",
    { mode: "cors" }
  );
  const responseData = await response.json();
  console.log(responseData.current);
  cond.textContent = responseData.current.condition.text;
  img.src = "https:" + responseData.current.condition.icon;
}
document.querySelector.body.append(bg);
getData();
