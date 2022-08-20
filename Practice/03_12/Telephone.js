/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Telephone {
  constructor(
    // Defines parameters of Telephone:
    name,
    lines,
    physicalPhone,
    ringing
  ) {
    // Define Telephone properties:
    this.name = name;
    this.lines = lines;
    this.physicalPhone = physicalPhone;
    this.ringing = ringing;
  }
  // Add methods like normal functions for the Telephone:
  isRinging(RingStatus) {
    this.ringing = RingStatus;
  }
}

export default Telephone;
