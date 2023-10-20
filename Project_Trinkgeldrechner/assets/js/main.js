"use strict";

function calculate() {
  const price = Number(document.body.querySelector(".price").value);
  const people = Number(document.body.querySelector(".people").value);
  const service = Number(document.body.querySelector("form select").value);

  const outputAmount = document.body.querySelector("main div p:nth-of-type(1)");
  const outputSum = document.body.querySelector("main div p:nth-of-type(2)");
  const outputPrice = document.body.querySelector("main div p:nth-of-type(3)");

  let sumService = (price / 100) * service;
  let sum = price + sumService;
  let pricePerson = sum / people;

  outputAmount.textContent = `Das Trinkgeld ist: ${sumService} €`;
  outputSum.textContent = `Die Gesamtsumme beträgt: ${sum} €`;
  outputPrice.textContent = `Der Preis pro Person ist: ${pricePerson} €`;
}
