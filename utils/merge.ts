/**
 * merge two objects into one and return the result as reference to dest
 *
 * @params {object} destination
 * @params {string} source object to clone the properties
 * @params {boolean}
 *
 * @returns {object} Reference to the dest
 *
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;

function merge<T extends object, U extends object>(dest: T, src: U, override = true): T & U {
  if (!dest) throw new TypeError('argument dest is required');
  if (!src) throw new TypeError('argument src is required');

  Object.keys(src).forEach((key) => {
    if (!override && hasOwnProperty.call(dest, key)) return;

    const descriptor = Object.getOwnPropertyDescriptor(src, key);
    Object.defineProperty(dest, key, descriptor);
  });

  return dest as T & U;
}

export default merge;
