waga = document.querySelector("#waga");
wzrost = document.querySelector("#wzrost");
button = document.querySelector("button");
display = document.querySelector(".display");
display2 = document.querySelector(".display2");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("aaaa");
  let a, b, w;
  w = wzrost.value / 100;
  b = w * w;
  console.log(wzrost.value);
  console.log(waga.value);
  console.log(b);
  a = waga.value / b;
  console.log(display);
  display.innerHTML = "Twoje BMI = ";
  display.innerHTML += a.toFixed(2);
  if (a < 18.5) {
    display2.style.color = "green";
    display2.innerHTML += "Niedowaga ";
  }
  if (a >= 18.5 && a <= 24.9) {
    display2.style.color = "green";
    display2.innerHTML += "Norma ";
  }
  if (a >= 25 && a <= 29.9) {
    display2.style.color = "red";
    display2.innerHTML += "Nadwaga ";
  }
});
