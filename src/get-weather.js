export async function getData(cityName) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=cca1e056bc40431796805445231907&q=${cityName}`,
    { mode: "cors" }
  );
  const responseData = await response.json();
  console.log(responseData);
  const country = responseData.location.country;
  const city = responseData.location.name;
  const localTime = responseData.location.localtime;
  const description = responseData.condition.text;
  const icon = responseData.condition.icon;
  const humidity = responseData.condition.humidity;
  const tempC = responseData.condiiton.temp_c;
  const tempF = responseData.condition.temp_f;
  return {
    country,
    city,
    localTime,
    description,
    icon,
    humidity,
    tempC,
    tempF,
  };
}
