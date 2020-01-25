const btn = document.querySelector(".container__btn");
const selectBox = document.querySelector(".container__select");
const name = document.querySelector(".container__input--rollno");
const container = document.querySelector(".container");

async function getData(nameValue, selectBoxValue) {
  try {
    const res = await fetch(
      `https://europe-west1-results-app-react.cloudfunctions.net/server/getResultByName?name=${nameValue}&semester=${selectBoxValue}&year=2019`
    );

    const data = await res.json();

    await localStorage.clear();

    await localStorage.setItem("data", JSON.stringify(data));
    name.value = "";
    window.location.href = "/result.html";
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", function() {
  getData(name.value, selectBox.value);
  // console.log(name.value);
  // console.log(selectBox.value);
});
