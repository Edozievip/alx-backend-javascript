function getStudentsIdsSum(students) {
  return students.reduce((total, student) => total + student.id, 0);
}

export default getStudentsIdsSum;
