const students = [
  {
    name: 'nissim',
    age: 33,
    hobbies: ['roller', 'foot', 'trips'],
  },
  {
    name: 'jc',
    age: 21,
    hobbies: ['basket', 'foot', 'trips'],
  },
  {
    name: 'rachid',
    age: 22,
    hobbies: ['hockey', 'foot', 'trips'],
  },
  {
    name: 'pierre',
    age: 40,
    hobbies: ['roller', 'pétanque', 'trips'],
  },
];

// transform this array so that the name starts with an upperCase letter
const modifiedStudents = students.map(student => {
  student.name = student.name.charAt(0).toUpperCase() + student.name.slice(1);
  return student;
});

// using forEach method
students.forEach(student => {
  student.name = student.name.charAt(0).toUpperCase() + student.name.slice(1);
});

console.log('ModifiedStudents = ', modifiedStudents);
console.log('students = ', students);

// create a new array so that we only keep students that are older than 25 years old
const filteredStudents = students.filter(student => {
  const isValid = student.age > 25;
  return isValid;
});

// same syntax but more simpler
const filteredStudents1 = students.filter(student => {
  return student.age > 25;
});

// even simpler
const filteredStudents2 = students.filter(student => student.age > 25);

console.log('Filtered students = ', filteredStudents2);
