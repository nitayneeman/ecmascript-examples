import('./module1.mjs').then((module) => {
  // The exports are accessible through the module object
  module.myFunction();
});
