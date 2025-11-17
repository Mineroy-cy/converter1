export function baseToDecimal(value, radix) {
  value = value.toUpperCase();
  const [integer, fraction] = value.split(".");

  let intVal = parseInt(integer, radix);

  if (!fraction) return intVal;

  let fracVal = 0;
  for (let i = 0; i < fraction.length; i++) {
    const digit = parseInt(fraction[i], radix);
    fracVal += digit / Math.pow(radix, i + 1);
  }

  return intVal + fracVal;
}

export function decimalToBase(decimal, radix, precision = 10) {
  const intPart = Math.floor(decimal);
  let fracPart = decimal - intPart;

  let intStr = intPart.toString(radix).toUpperCase();
  if (fracPart === 0) return intStr;

  let fracStr = ".";
  let limit = precision;

  while (fracPart > 0 && limit--) {
    fracPart *= radix;
    const digit = Math.floor(fracPart);
    fracStr += digit.toString(radix).toUpperCase();
    fracPart -= digit;
  }

  return intStr + fracStr;
}
