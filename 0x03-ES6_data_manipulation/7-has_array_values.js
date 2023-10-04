function hasValuesFromArray(arr, values) {
  return values.every((value) => arr.has(value));
}

export default hasValuesFromArray;
