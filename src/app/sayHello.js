export default name => alert(`Hello ${name}`);

export const donut = "I WANT YOUR DONUTS";

/**
 * Same code, ES5(-ish) style:
 * 
 * var donut = 'I WANT YOUR DONUTS';
 * 
 * module.exports = function(name) {
 *    return alert('Hello ' + name);
 * };
 * exports.donut = donut;
 * 
 */
