const students = [
  {
    id: 1,
    f_name: "Pyke",
    l_name: "Doe",
    gender: "Male",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Mobile Gamer", "Programmer", "Designer"],
  },
  {
    id: 2,
    f_name: "Yaksu",
    l_name: "Clair",
    gender: "Male",
    married: true,
    age: 31,
    paid: 575,
    courses: ["React JS", "Node"],
  },
  {
    id: 3,
    f_name: "Hanney",
    l_name: "Santos",
    gender: "Female",
    married: false,
    age: 28,
    paid: 450,
    courses: ["Writer", "Teaching", "Designer"],
  },
];

// Map
let studentName = students.map((student, index) => {
  return student.f_name;
});
console.log(studentName);

// Filter
let studentMarried = students.filter((student, index) => student.married);
console.log(studentMarried);

// Some
let hasStudentBelow25 = students.some((student, index) => student.age < 25);
console.log(hasStudentBelow25);

// Find
let hasStudentAbove30 = students.find((student, index) => student.age > 30);
console.log(hasStudentAbove30);

// Reduce
let totalPaid = students.reduce(
  (accumulator, student, currentIndex, students) => {
    accumulator = accumulator + student.paid;
    return accumulator;
  },
  0
);
console.log(totalPaid);
