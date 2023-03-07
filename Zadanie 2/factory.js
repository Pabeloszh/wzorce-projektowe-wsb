class Pizza {
    constructor(name) {
      this.name = name;
    }
  
    prepare() {
      console.log(`Preparing ${this.name} pizza`);
    }
  
    bake() {
      console.log(`Baking ${this.name} pizza`);
    }
}
  
class CheesePizza extends Pizza {
    constructor() {
      super("cheese");
    }
}
  
class PepperoniPizza extends Pizza {
    constructor() {
      super("pepperoni");
    }
}
  
class VeggiePizza extends Pizza {
    constructor() {
      super("veggie");
    }
}
  
class PizzaFactory {
    createPizza(type) {
      let pizza;
      if (type === "cheese") {
        pizza = new CheesePizza();
      } else if (type === "pepperoni") {
        pizza = new PepperoniPizza();
      } else if (type === "veggie") {
        pizza = new VeggiePizza();
      }
      return pizza;
    }
}

const factory = new PizzaFactory();
const cheesePizza = factory.createPizza("cheese");
const pepperoniPizza = factory.createPizza("pepperoni");

cheesePizza.prepare(); 
pepperoniPizza.prepare(); 