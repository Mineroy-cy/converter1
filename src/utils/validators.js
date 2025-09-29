export function validateInput(value, base) {
  switch (base) {
    case "binary":
      return /^[01]*$/.test(value);
    case "octal":
      return /^[0-7]*$/.test(value);
    case "decimal":
      return /^[0-9]*$/.test(value);
    case "hex":
      return /^[0-9A-Fa-f]*$/.test(value);
    case "bcd":
      return /^[01\s]*$/.test(value); // BCD is binary in groups of 4
    default:
      return true;
  }
}
