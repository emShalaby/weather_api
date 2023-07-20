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
  const description = responseData.current.condition.text;
  const icon = responseData.current.condition.icon;
  const humidity = responseData.current.condition.humidity;
  const tempC = responseData.current.condition.temp_c;
  const tempF = responseData.current.condition.temp_f;
  console.log(country);
  return new Promise((resolve, reject) => {
    resolve({
      country,
      city,
      localTime,
      description,
      icon,
      humidity,
      tempC,
      tempF,
    });
  });
}
