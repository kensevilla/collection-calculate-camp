'use strict';

function grouping_count(collection) {
    const distinctValues = collection.filter((x, i, a) => a.indexOf(x) == i);
    console.log(distinctValues);
    return distinctValues.map(item => {
      let ken = item;
        return ken : collection.filter(number => number === item).length;
    });
}

module.exports = grouping_count;
