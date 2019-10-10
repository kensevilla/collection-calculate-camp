'use strict';

function get_integer_interval(number_a, number_b) {
  return (new Array(number_b)).map(i => i + number_a);
}

module.exports = get_integer_interval;

