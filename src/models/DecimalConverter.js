// Import the base Converter class (assumed to handle shared logic for all converters)
import Converter from "./Converter";

// Define a DecimalConverter class that extends the generic Converter
export default class DecimalConverter extends Converter {

  /**
   * Converts the stored value (inherited from Converter) to a decimal number.
   * @returns {number} The decimal representation of the value.
   */
  toDecimal() {
    return Number(this.value);
  }

  /**
   * Converts a decimal number to its binary string representation.
   * @param {number} decimal - The decimal number to convert.
   * @returns {string} Binary representation of the decimal number.
   */
  static toBinary(decimal) {
    return decimal.toString(2);
  }

  /**
   * Converts a decimal number to its octal string representation.
   * @param {number} decimal - The decimal number to convert.
   * @returns {string} Octal representation of the decimal number.
   */
  static toOctal(decimal) {
    return decimal.toString(8);
  }

  /**
   * Converts a decimal number to its hexadecimal string representation.
   * The result is returned in uppercase (e.g., 'A' instead of 'a').
   * @param {number} decimal - The decimal number to convert.
   * @returns {string} Uppercase hexadecimal representation of the decimal number.
   */
  static toHex(decimal) {
    return decimal.toString(16).toUpperCase();
  }
}
