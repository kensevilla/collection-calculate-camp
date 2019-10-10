'use strict';

function choose_no_repeat_number(collection) {

  return collection.filter((x, i, a) => a.indexOf(x) == i);
}

module.exports = choose_no_repeat_number;
