function Pizza (size, veggie, meat) {
  this.size = size;
  this.veggie = veggie;
  this.meat = meat;
};

Pizza.prototype.totalPizza = function() {
  var total = 10;
  var size = this.size;
  var veggie = this.veggie;
  var meat = this.meat;
  debugger;
  if(size === "Large" && veggie === "Mushrooms" && meat === "Pepperoni") {
    total += 6;
  }
  return total;
}
