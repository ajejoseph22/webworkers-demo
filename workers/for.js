setTimeout(() => {
  throw new Error("Not compatible");
}, 4000);

// setTimeout(() => {
//     postMessage('Hello World!');
// }, 5000);

self.addEventListener("message", event => {
  if (event.data.toLowerCase() === "click") {
    setTimeout(() => postMessage("I received it"), 2000);
  }
});
