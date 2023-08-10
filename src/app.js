function replaceCity(event) {
  let location = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `😄 <br /> Currently ${temperature}°F in ${location}`;
}

let changeCity = document.querySelector("button");
changeCity.addEventListener("click", replaceCity);
