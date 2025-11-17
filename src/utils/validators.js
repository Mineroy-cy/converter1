export function validateInput(value, base) { 
  value = value.trim().toUpperCase();
  base = base.toLowerCase(); // normalize base

  // Allow empty input
  if (value === "") return true;

  const regexMap = {
    binary: /^[01]+(\.[01]*)?$/,
    octal: /^[0-7]+(\.[0-7]*)?$/,
    decimal: /^[0-9]+(\.[0-9]*)?$/,
    hex: /^[0-9A-F]+(\.[0-9A-F]*)?$/,
    bcd: /^[01\s]+$/, 
  };

  return regexMap[base]?.test(value) ?? false; // safe fallback
}
