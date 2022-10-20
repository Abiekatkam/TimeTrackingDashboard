// Dom

const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");

const gameHElem = document.getElementById("gameH1");
const studyHElem = document.getElementById("studyH1");
const workHElem = document.getElementById("workH1");
const exerciseHElem = document.getElementById("exerciseH1");
const socialHElem = document.getElementById("socialH1");
const careHElem = document.getElementById("careH1");

const gamePElem = document.getElementById("gameP1");
const studyPElem = document.getElementById("studyP1");
const workPElem = document.getElementById("workP1");
const exercisePElem = document.getElementById("exerciseP1");
const socialPElem = document.getElementById("socialP1");
const carePElem = document.getElementById("careP1");

dailyButton.addEventListener("click", () => {
  dailyButton.classList.add("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.remove("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.daily.current}hrs`;
        workPElem.innerHTML = `Last Day - ${data[0].timeframes.daily.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.daily.current}hrs`;
        gamePElem.innerHTML = `Last Day - ${data[1].timeframes.daily.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        studyPElem.innerHTML = `Last Day - ${data[2].timeframes.daily.previous}hrs`;
        exerciseHElem.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        exercisePElem.innerHTML = `Last Day - ${data[2].timeframes.daily.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.daily.current}hrs`;
        socialPElem.innerHTML = `Last Day - ${data[4].timeframes.daily.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.daily.current}hrs`;
        carePElem.innerHTML = `Last Day - ${data[5].timeframes.daily.previous}hrs`;
      });
  };

  fetchData();
});

weeklyButton.addEventListener("click", () => {
  dailyButton.classList.remove("active");
  weeklyButton.classList.add("active");
  monthlyButton.classList.remove("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
        workPElem.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
        gamePElem.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
        studyPElem.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        exerciseHElem.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
        exercisePElem.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
        socialPElem.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
        carePElem.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
      });
  };

  fetchData();
});

monthlyButton.addEventListener("click", () => {
  dailyButton.classList.remove("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.add("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
        workPElem.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
        gamePElem.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
        studyPElem.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
        exerciseHElem.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
        exercisePElem.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
        socialPElem.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
        carePElem.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
      });
  };

  fetchData();
});
