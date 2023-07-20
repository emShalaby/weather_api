export async function getData(cityName) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=cca1e056bc40431796805445231907&q=${cityName}`,
    { mode: "cors" }
  );
  const responseData = await response.json();
  console.log(responseData);
}
