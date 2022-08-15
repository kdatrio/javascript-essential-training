/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const drawer = {
  name: "Top Drawer",
  direction: "Right",
  isFull: true,
  isOpen: false,
};

const telephone = {
  name: "Desk Phone",
  telephoneNumber: "8639442996",
  voicemail: true,
  lineKeys: {
    line1: "Keith",
    dialTone: false,
  },
};
