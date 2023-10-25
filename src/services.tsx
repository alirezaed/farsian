interface Student{
  name: string; 
  lastname: string 
}
export function addStudent(student: Student) {
  const p = new Promise((resolve, error) => {
    setTimeout(() => {
      const localStudents  = localStorage.getItem('students');
      const allStudents:Student[] = localStudents ? JSON.parse(localStudents) : [];
      allStudents.push(student);
      localStorage.setItem('students',JSON.stringify(allStudents));
      resolve(true);
    }, 2000);
  });
  return p;
}


export function getAll() {
  const p = new Promise((resolve, error) => {
    setTimeout(() => {
      const localStudents  = localStorage.getItem('students');
      const allStudents:Student[] = localStudents ? JSON.parse(localStudents) : [];
      resolve(allStudents);
    }, 2000);
  });
  return p;
}