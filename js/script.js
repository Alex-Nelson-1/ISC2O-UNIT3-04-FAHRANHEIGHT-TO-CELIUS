// Created by: Alex Nelson
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ISC2O-UNIT3-04-FAHRENHEIT-TO-CELCIUS/sw.js",
    {
      scope: "/ISC2O-UNIT3-04-FAHRENHEIT-TO-CELCIUS/",
    }
  )
}

/* This function calculates a users earnings and displays it */
function convertCelcius() {
  /* Input */
  const fahrenheit = parseFloat(document.getElementById("Fahrenheit").value)

  /* Proccess */
  const celcius = (fahrenheit - 32) * (5 / 9)

  /* Output */
document.getElementsByName('celcius')[0].value= celcius
}