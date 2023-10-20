"use strict";

const ariesName = "Aries";
const ariesIMG = "https://www.horoscopedates.com/img/icon_aries.png";
const ariesText =
  "Today your patience might be tested when one or more of your projects gets put on hold by someone…";

const taurusName = "Taurus";
const taurusIMG = "https://www.horoscopedates.com/img/icon_taurus.png";
const taurusText =
  "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";

const geminiName = "Gemini";
const geminiIMG = "https://www.horoscopedates.com/img/icon_gemini.png";
const geminiText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const cancerName = "Cancer";
const cancerIMG = "https://www.horoscopedates.com/img/icon_cancer.png";
const cancerText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const leoName = "Leo";
const leoIMG = "https://www.horoscopedates.com/img/icon_leo.png";
const leoText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const virgoName = "Virgo";
const virgoIMG = "https://www.horoscopedates.com/img/icon_virgo.png";
const virgoText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const libraName = "Libra";
const libraIMG = "https://www.horoscopedates.com/img/icon_libra.png";
const libraText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const scorpioName = "Scorpio";
const scorpioIMG = "https://www.horoscopedates.com/img/icon_scorpio.png";
const scorpioText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const sagittariusName = "Sagittarius";
const sagittariusIMG =
  "https://www.horoscopedates.com/img/icon_sagittarius.png";
const sagittariusText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const capricornName = "Capricorn";
const capricornIMG = "https://www.horoscopedates.com/img/icon_capricorn.png";
const capricornText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const aquariusName = "Aquarius";
const aquariusIMG = "https://www.horoscopedates.com/img/icon_aquarius.png";
const aquariusText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

const piscesName = "Pisces";
const piscesIMG = "https://www.horoscopedates.com/img/icon_pisces.png";
const piscesText =
  "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else";

function show() {
  let answer = document.body.querySelector(".ask__wrapper form input").value;
  //   let answer = "Mar";
  let resultIMG = document.body.querySelector(".result_img");
  let resultH3 = document.body.querySelector(".result h3");
  let resultP = document.body.querySelector(".result p");
  let result = document.body.querySelector(".result__wrapper");

  if (answer == "Mar") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${ariesIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${ariesName}`;
    resultP.textContent = ariesText;
  } else if (answer == "Apr") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${taurusIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${taurusName}`;
    resultP.textContent = taurusText;
  } else if (answer == "May") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${geminiIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${geminiName}`;
    resultP.textContent = geminiText;
  } else if (answer == "Jun") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${cancerIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${cancerName}`;
    resultP.textContent = cancerText;
  } else if (answer == "Jul") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${leoIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${leoName}`;
    resultP.textContent = leoText;
  } else if (answer == "Aug") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${virgoIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${virgoName}`;
    resultP.textContent = virgoText;
  } else if (answer == "Sep") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${libraIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${libraName}`;
    resultP.textContent = libraText;
  } else if (answer == "Oct") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${scorpioIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${scorpioName}`;
    resultP.textContent = scorpioText;
  } else if (answer == "Nov") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${sagittariusIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${sagittariusName}`;
    resultP.textContent = sagittariusText;
  } else if (answer == "Dec") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${capricornIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${capricornName}`;
    resultP.textContent = capricornText;
  } else if (answer == "Jan") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${aquariusIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${aquariusName}`;
    resultP.textContent = aquariusText;
  } else if (answer == "Feb") {
    result.classList.add("visibility");
    resultIMG.innerHTML = `<img src="${piscesIMG}" alt="Random Pic 1" />`;
    resultH3.textContent = `Your horoscope is ${piscesName}`;
    resultP.textContent = piscesText;
  }
}
