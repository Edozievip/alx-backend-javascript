function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return students
  .filter((student) => student.location === city)
  .map((student) => {
    const [newGrade] = newGrades.filter((obj) => obj.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
    };
    });
}

export default updateStudentGradeByCity;
