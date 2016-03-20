var Prices = function (electricity, coldWater, hotWater, tube, rent, internet) {
  this.electricityPrice = electricity;
  this.coldWaterPrice = coldWater;
  this.hotWaterPrice = hotWater;
  this.tubePrice = tube;
  this.rentPrice = rent;
  this.internetPrice = internet;
  this.calculateCost = function (electricitySpent, coldWaterSpent, hotWaterSpent, tubeSpent) {
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

  $('form').on('submit', function (e) {
    e.preventDefault();
    var electricitySpent = $('#electricity-spent').val();
    var coldWaterSpent = $('#cold-water-spent').val();
    var hotWaterSpent = $('#hot-water-spent').val();
    var tubeSpent = $('#tube-spent').val();
    console.log(currentPrices.calculateCost(electricitySpent, coldWaterSpent, hotWaterSpent, tubeSpent));
  });
});
