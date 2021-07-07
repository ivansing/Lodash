const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    if (number < lower) {
      return lowerClampedValue;
    } else if (number > upper) {
      return clampedValue;
    }
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor(length - string.length) / 2;
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    if (object["key"] !== undefined) {
      return true;
    } else {
      return false;
    }
  },
  invert(obj) {
    let invertedObject = {};
    let originalValue;
    for (let key in obj) {
      originalValue = obj[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(obj, predicate) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop(arr, num) {
    if (num === undefined) {
      num = 1;
    }
    const droppedArray = arr.slice(num);
    return droppedArray;
  },
  dropWhile(arr, predicate) {
    let newArray = [];
    let i = 0;
    while (i < arr) {
      newArray.drop(i);
      i++;
    }
    return newArray;
  },
  chunk(arr, size) {
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < arr.length; i += size) {
      let arrayChunk = arr.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
