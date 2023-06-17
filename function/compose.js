/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (funcs) => (x) => funcs.reduceRight((acc, func) => func(acc), x);
