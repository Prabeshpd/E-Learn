function dateParser(value) {
  if (typeof value === 'string') {
    return new Date(value);
  }
  return value;
}
export default dateParser;
