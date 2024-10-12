// Mark-and-Sweep - algorithm for detecting garbage
// JS - only stage of garbage collection

// If there is an active relation to an object
// It won't go off the RAM
const a = {
  a: 1,
  b: {},
};

// bad case
const c = a.b;

// OK case
const d = { ...a.b };
