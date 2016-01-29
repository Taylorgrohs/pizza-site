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

  if (size === "Extra-Large" && veggie === "Mushrooms" && meat === "bacon") {
    total += 13;
  } else if (size === "Extra-Large" && (veggie === "Mushrooms" || meat === "Bacon")) {
    total += 11;
  };

  if (size === "Large" && veggie === "Mushrooms" && meat === "bacon") {
    total += 8;
  } else if (size === "Large" && (veggie === "Mushrooms" || meat === "Bacon")) {
    total += 6;
  };

  if (size === "Medium" && veggie === "Mushrooms" && meat === "bacon") {
    total += 6
  } else if (size === "Medium" && (veggie === "Mushrooms" || meat === "Bacon")) {
    total += 4
  };

  if (size === "Small" && veggie === "Mushrooms" && meat === "bacon") {
    total += 4
  } else if (size === "Small" && (veggie === "Mushrooms" || meat === "Bacon")) {
    total += 2
  };
  return total;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("select#size").val();
    var veggie = $("select#veggie").val();
    var meat = $("select#meat").val();
    var pizzaNumber = parseInt($("select#number").val());
    var newPizza = new Pizza(size, veggie, meat);
    var grandTotal = newPizza.totalPizza() * pizzaNumber;

    $(".display").empty();
    $(".display").append("<li class='sizeli'>" + size + "</li>");
    $(".display").append("<li class='veggieli'>" + veggie + "</li>");
    $(".display").append("<li class='meatli'>" + meat + "</li>");
    $(".display").append("<li class='sizeli'> $" + grandTotal + "</li>");
    event.preventDefault();
  });
});
