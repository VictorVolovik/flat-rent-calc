/**
 * Price constructor
 * @param {number} electricity Electricity price
 * @param {number} coldWater Cold water price
 * @param {number} hotWater Hot water price
 * @param {number} tube Tube price
 * @param {number} rent Overall rent price
 * @param {number} internet Internet price
 * @returns {object} Price object
 */
var Prices = function (electricity, coldWater, hotWater, tube, rent, internet) {
  this.electricityPrice = electricity;
  this.coldWaterPrice = coldWater;
  this.hotWaterPrice = hotWater;
  this.tubePrice = tube;
  this.rentPrice = rent;
  this.internetPrice = internet;


  /**
   * Calculates expnseses for spent resources with prices
   * @param {number} electricitySpent Electricity spent this month
   * @param {number} coldWaterSpent Cold water spent this month
   * @param {number} hotWaterSpent Hot water spent this month
   * @param {number} tubeSpent Tube usage spent (Hot water + Cold water)
   * @returns {number} Overall expnseses
   */
  this.calculateExpenses = function (electricitySpent, coldWaterSpent, hotWaterSpent, tubeSpent) {
    return this.electricityPrice * electricitySpent +
      this.coldWaterPrice * coldWaterSpent +
      this.hotWaterPrice * hotWaterSpent +
      this.tubePrice * tubeSpent +
      this.rentPrice + this.internetPrice;
  };
};

var currentPrices = new Prices(3.52, 30.87, 151.36, 21.90, 35000, 500);

$(document).ready(function () {
  $('#electricity-price').val(currentPrices.electricityPrice);
  $('#cold-water-price').val(currentPrices.coldWaterPrice);
  $('#hot-water-price').val(currentPrices.hotWaterPrice);
  $('#tube-price').val(currentPrices.tubePrice);
  $('#rent-price').val(currentPrices.rentPrice);
  $('#internet-price').val(currentPrices.internetPrice);

  var resultBlock = $('.result-block');

  $('form').on('submit', function (e) {
    e.preventDefault();
    var electricitySpent = $('#electricity-spent').val();
    var coldWaterSpent = $('#cold-water-spent').val();
    var hotWaterSpent = $('#hot-water-spent').val();
    var tubeSpent = $('#tube-spent').val();
    var result = currentPrices.calculateExpenses(electricitySpent, coldWaterSpent, hotWaterSpent, tubeSpent);
    resultBlock.text(result);
  });
});
