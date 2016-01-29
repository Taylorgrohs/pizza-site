describe("Pizza",function(){
  it("will create a pizza profile", function(){
    var testPizza = new Pizza("Large", "Mushrooms", "pepperoni");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.veggie).to.equal("Mushrooms");
    expect(testPizza.meat).to.equal("pepperoni");
  });

  it("will total up the pizza and figure out the price", function(){
    var testPizza = new Pizza("Large", "Mushrooms", "pepperoni");
    expect(testPizza.totalPizza()).to.equal(16);
  });
});
