function getListStudentsIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((student) => student.id);
}

const array = [
  { id: 1, firstName: "Guillaume", location: "San Francisco" },
  { id: 2, firstName: "James", location: "Columbia" },
  { id: 3, firstName: "Serena", location: "San Francisco" },
];
console.log(getListStudentsIds(array));
