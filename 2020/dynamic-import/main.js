import('./module1.mjs')
  .then((module) => module.myFunction())
  .catch((error) => console.error(error));
