import * as f from './index.js';

describe('Capitalize first character of a string', () => {
  test('All lowercase', () => {
    expect(f.capitalize('hello world')).toBe('Hello world');
  });

  test('First letter lowercase, rest uppercase', () => {
    expect(f.capitalize('hELLO WORLD')).toBe('HELLO WORLD');
  });

  test('First letter already uppercase', () => {
    expect(f.capitalize('World hello')).toBe('World hello');
  });

  test('Punctuation as the first character', () => {
    expect(f.capitalize('!now with punctuation')).toBe('!now with punctuation');
  });
});

describe('String reverse', () => {
  test('reverse a correct string', () => {
    expect(f.reverseString('hello world')).toBe('dlrow olleh');
  });

  test('reverse a reversed string', () => {
    expect(f.reverseString('dlrow olleh')).toBe('hello world');
  });

  test('reverse a palidrome', () => {
    expect(f.reverseString('Racecar')).toBe('racecaR');
  });
});

describe('Calculator', () => {
  describe('add', () => {
    test('add the same positive numbers', () => {
      expect(f.calculator.add(1, 1)).toBe(2);
    });

    test('add two different positive numbers', () => {
      expect(f.calculator.add(1, 2)).toBe(3);
    });

    test('add a positive and zero', () => {
      expect(f.calculator.add(0, 3)).toBe(3);
    });

    test('add two zeros', () => {
      expect(f.calculator.add(0, 0)).toBe(0);
    });

    test('add a positive and negative', () => {
      expect(f.calculator.add(-1, 1)).toBe(0);
    });

    test('add two negative numbers', () => {
      expect(f.calculator.add(-1, -1)).toBe(-2);
    });

    test('add a negative and zero', () => {
      expect(f.calculator.add(-1, 0)).toBe(-1);
    });
  });

  describe('subtract', () => {
    test('subtract the same positive numbers', () => {
      expect(f.calculator.subtract(1, 1)).toBe(0);
    });

    test('subtract two different positive numbers', () => {
      expect(f.calculator.subtract(1, 2)).toBe(-1);
    });

    test('subtract a positive and zero', () => {
      expect(f.calculator.subtract(0, 3)).toBe(-3);
    });

    test('subtract two zeros', () => {
      expect(f.calculator.subtract(0, 0)).toBe(0);
    });

    test('subtract a positive and negative', () => {
      expect(f.calculator.subtract(-1, 1)).toBe(-2);
    });

    test('subtract two negative numbers', () => {
      expect(f.calculator.subtract(-1, -1)).toBe(0);
    });

    test('subtract a negative and zero', () => {
      expect(f.calculator.subtract(-1, 0)).toBe(-1);
    });
  });

  describe('multiply', () => {
    test('multiply the same positive numbers', () => {
      expect(f.calculator.multiply(1, 1)).toBe(1);
    });

    test('multiply two different positive numbers', () => {
      expect(f.calculator.multiply(1, 2)).toBe(2);
    });

    test('multiply a positive and zero', () => {
      expect(f.calculator.multiply(0, 3)).toBe(0);
    });

    test('multiply two zeros', () => {
      expect(f.calculator.multiply(0, 0)).toBe(0);
    });

    test('multiply a positive and negative', () => {
      expect(f.calculator.multiply(-1, 1)).toBe(-1);
    });

    test('multiply two negative numbers', () => {
      expect(f.calculator.multiply(-1, -1)).toBe(1);
    });

    test('multiply a negative and zero', () => {
      expect(f.calculator.multiply(-1, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divide the same positive numbers', () => {
      expect(f.calculator.divide(1, 1)).toBe(1);
    });

    test('divide two different positive numbers', () => {
      expect(f.calculator.divide(1, 2)).toBe(0.5);
    });

    test('divide zero by a positive', () => {
      expect(f.calculator.divide(0, 3)).toBe(0);
    });

    test('divide two zeros', () => {
      expect(f.calculator.divide(0, 0)).toBeNaN();
    });

    test('divide a positive and negative', () => {
      expect(f.calculator.divide(-1, 1)).toBe(-1);
    });

    test('divide two negative numbers', () => {
      expect(f.calculator.divide(-1, -1)).toBe(1);
    });

    test('divide zero by a negative', () => {
      expect(f.calculator.divide(0, -1)).toBe(0);
    });
  });
});

describe('ceasar cipher', () => {
  test('start of alphabet, lowercase', () => {
    expect(f.ceasarCipher('abc', 3)).toBe('def');
  });

  test('start of alphabet, lowercase looping back to start', () => {
    expect(f.ceasarCipher('abc', 26)).toBe('abc');
  });

  test('start of alphabet, lowercase with shift over 26', () => {
    expect(f.ceasarCipher('abc', 29)).toBe('def');
  });

  test('start of alphabet, uppercase', () => {
    expect(f.ceasarCipher('ABC', 3)).toBe('DEF');
  });

  test('start of alphabet, uppercase looping back to start', () => {
    expect(f.ceasarCipher('ABC', 26)).toBe('ABC');
  });

  test('start of alphabet, uppercase with shift over 26', () => {
    expect(f.ceasarCipher('ABC', 29)).toBe('DEF');
  });

  test('end of alphabet, lowercase', () => {
    expect(f.ceasarCipher('xyz', 3)).toBe('abc');
  });

  test('end of alphabet, uppercase', () => {
    expect(f.ceasarCipher('XYZ', 3)).toBe('ABC');
  });

  test('with spaces and punctuation', () => {
    expect(f.ceasarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
  });
});

describe('analyze array', () => {
  test('All zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const expected = {
      average: 0,
      min: 0,
      max: 0,
      length: 5,
    };
    expect(f.analyzeArray(arr)).toEqual(expected);
  });

  test('all ones', () => {
    const arr = [1, 1, 1, 1, 1];
    const expected = {
      average: 1,
      min: 1,
      max: 1,
      length: 5,
    };
    expect(f.analyzeArray(arr)).toEqual(expected);
  });

  test('random positive numbers', () => {
    const arr = [1, 8, 3, 4, 2, 6];
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    expect(f.analyzeArray(arr)).toEqual(expected);
  });
});
