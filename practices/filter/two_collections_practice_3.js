'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(item => {
    return collection_b.filter(itemB => item%itemB===0).length>0;
  });
}

module.exports = choose_divisible_integer;
