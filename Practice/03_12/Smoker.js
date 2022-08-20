/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Smoker {
  constructor(
    // Defines parameters of Smoker:
    name,
    typeFuel,
    placement,
    lit
  ) {
    // Define Telephone properties:
    this.name = name;
    this.typeFuel = typeFuel;
    this.placement = placement;
    this.lit = lit;
  }
  // Add methods like normal functions for the Telephone:
  isLit(LitStatus) {
    this.lit = LitStatus;
  }
}

export default Smoker;
