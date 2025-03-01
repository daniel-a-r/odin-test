export const capitalize = (s) => {
  return s.at(0).toUpperCase() + s.slice(1);
};

export const reverseString = (s) => {
  const chars = s.split('');
  for (let i = 0; i < Math.floor(chars.length / 2); i++) {
    const temp = chars.at(i);
    chars[i] = chars.at(chars.length - i - 1);
    chars[chars.length - i - 1] = temp;
  }
  return chars.join('');
};

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }

    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      return NaN;
    } else if (a === 0) {
      return 0;
    }

    return a / b;
  },
};

const normalizeShift = (shift) => {
  if (shift >= 26) {
    shift = shift % 26;
  }
  return shift;
};

const charCodeCheckCase = (charCode, lowerBound, upperBound) => {
  if (charCode >= lowerBound && charCode <= upperBound) {
    return true;
  }
  return false;
};

const charCodeRepLowercase = (charCode) => {
  return charCodeCheckCase(charCode, 97, 122);
};

const charCodeRepUppercase = (charCode) => {
  return charCodeCheckCase(charCode, 65, 90);
};

const charCodeIsLetter = (charCode) => {
  if (charCodeRepLowercase(charCode) || charCodeRepUppercase(charCode)) {
    return true;
  }
  return false;
};

export const ceasarCipher = (s, shift) => {
  shift = normalizeShift(shift);

  const chars = s.split('');

  chars.forEach((c, i) => {
    const charCode = c.charCodeAt(0);
    if (charCodeIsLetter(charCode)) {
      const shifted = charCode + shift;
      if (charCodeRepLowercase(charCode) && shifted > 122) {
        chars[i] = String.fromCharCode(shifted - 123 + 97);
      } else if (charCodeRepUppercase(charCode) && shifted > 90) {
        chars[i] = String.fromCharCode(shifted - 91 + 65);
      } else {
        chars[i] = String.fromCharCode(shifted);
      }
    }
  });

  return chars.join('');
};

const calcAvg = (arr) => {
  const initialVal = 0;
  const sum = arr.reduce((accumlator, currentVal) => {
    return accumlator + currentVal;
  }, initialVal);
  return sum / arr.length;
};

export const analyzeArray = (arr) => {
  const average = calcAvg(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
};
