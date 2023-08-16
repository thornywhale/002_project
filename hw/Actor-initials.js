/**
 *
 * @param {string} name
 * @returns {string}
 */
function getActorsInitials(name) {
  return name
    .trim()
    .split(" ")
    .map((initial) => initial[0].toUpperCase())
    .join("");
}

console.log(getActorsInitials(" Tom Cruise ")); // Output: TC