import Converter from "./Converter";

/**
 * Converter class for hexadecimal number operations
 * @extends Converter
 */
export default class HexConverter extends Converter {
  /**
   * Converts the hexadecimal value to decimal
   * @returns {number} The decimal representation of the hexadecimal value
   */
  toDecimal() {
    return parseInt(this.value, 16);
  }

  /**
   * Converts a decimal number to its hexadecimal representation
   * @param {number} decimal - The decimal number to convert
   * @returns {string} The uppercase hexadecimal representation of the decimal number
   */
  static fromDecimal(decimal) {
    return decimal.toString(16).toUpperCase();
  }
}
