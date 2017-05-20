import sayHi from "./app/sayHello";
// Import whatever the default export is from /app/sayHello
// and refer to it in this file as 'Hello'

const name = "Nitish";
// Reference to the <div id="root"> element in
const root = document.getElementById("root");

// Call the function that was imported from /app/sayHello, passing in
// `const name` that was created on line 5.
sayHi(name);
root.textContent = `Helllloooo ${name}!`;
