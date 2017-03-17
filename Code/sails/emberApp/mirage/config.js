export default function() {

  this.namespace = '/api';

  let courses = [
{
type: 'courses',
id: 'CSCE10',
attributes: {
number: "10",
name: "Introduction to CSE"
}
      },
{
type: 'courses',
id: 'CSCE100',
attributes: {
number: "100",
name: "Introduction to Informatics"
}
      },
{
type: 'courses',
id: 'CSCE101',
attributes: {
number: "101",
name: "Fundamentals of Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE101L',
attributes: {
number: "101L",
name: "Fundamentals of Computing Laboratory"
}
      },
{
type: 'courses',
id: 'CSCE120',
attributes: {
number: "120",
name: "Learning to Code"
}
      },
{
type: 'courses',
id: 'CSCE155A',
attributes: {
number: "155A",
name: "Computer Science I"
}
      },
{
type: 'courses',
id: 'CSCE155E',
attributes: {
number: "155E",
name: "Computer Science I: Systems Engineering Focus"
}
      },
{
type: 'courses',
id: 'CSCE155H',
attributes: {
number: "155H",
name: "Honors: Computer Science I"
}
      },
{
type: 'courses',
id: 'CSCE155N',
attributes: {
number: "155N",
name: "Computer Science I: Engineering and Science Focus"
}
      },
{
type: 'courses',
id: 'CSCE155T',
attributes: {
number: "155T",
name: "Computer Science I: Informatics Focus"
}
      },
{
type: 'courses',
id: 'CSCE156',
attributes: {
number: "156",
name: "Computer Science II"
}
      },
{
type: 'courses',
id: 'CSCE156H',
attributes: {
number: "156H",
name: "Honors: Computer Science II"
}
      },
{
type: 'courses',
id: 'CSCE183H',
attributes: {
number: "183H",
name: "Honors: Computer Problem Solving Essentials"
}
      },
{
type: 'courses',
id: 'CSCE184H',
attributes: {
number: "184H",
name: "Honors: Software Development Essentials"
}
      },
{
type: 'courses',
id: 'CSCE190',
attributes: {
number: "190",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE196',
attributes: {
number: "196",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE220',
attributes: {
number: "220",
name: "Software Development for Smart-Mobile Systems"
}
      },
{
type: 'courses',
id: 'CSCE230',
attributes: {
number: "230",
name: "Computer Organization"
}
      },
{
type: 'courses',
id: 'CSCE230H',
attributes: {
number: "230H",
name: "Honors: Computer Organization"
}
      },
{
type: 'courses',
id: 'CSCE235',
attributes: {
number: "235",
name: "Introduction to Discrete Structures"
}
      },
{
type: 'courses',
id: 'CSCE235H',
attributes: {
number: "235H",
name: "Honors: Introduction to Discrete Structures"
}
      },
{
type: 'courses',
id: 'CSCE236',
attributes: {
number: "236",
name: "Embedded Systems"
}
      },
{
type: 'courses',
id: 'CSCE251',
attributes: {
number: "251",
name: "Unix Programming Environment"
}
      },
{
type: 'courses',
id: 'CSCE251K',
attributes: {
number: "251K",
name: "C Programming "
}
      },
{
type: 'courses',
id: 'CSCE252A',
attributes: {
number: "252A",
name: "FORTRAN Programming"
}
      },
{
type: 'courses',
id: 'CSCE283H',
attributes: {
number: "283H",
name: "Honors: Foundation of Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE284H',
attributes: {
number: "284H",
name: "Honors: Foundation of Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE290',
attributes: {
number: "290",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE296',
attributes: {
number: "296",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE310',
attributes: {
number: "310",
name: "Data Structures and Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE310H',
attributes: {
number: "310H",
name: "Honors: Data Structure and Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE311',
attributes: {
number: "311",
name: "Data Structures and Algorithms for Informatics"
}
      },
{
type: 'courses',
id: 'CSCE320',
attributes: {
number: "320",
name: "Data Analysis"
}
      },
{
type: 'courses',
id: 'CSCE322',
attributes: {
number: "322",
name: "Programming Language Concepts"
}
      },
{
type: 'courses',
id: 'CSCE322H',
attributes: {
number: "322H",
name: "Honors: Programming Language Concepts"
}
      },
{
type: 'courses',
id: 'CSCE335',
attributes: {
number: "335",
name: "Digital Logic Design"
}
      },
{
type: 'courses',
id: 'CSCE351',
attributes: {
number: "351",
name: "Operating System Kernels"
}
      },
{
type: 'courses',
id: 'CSCE361',
attributes: {
number: "361",
name: "Software Engineering"
}
      },
{
type: 'courses',
id: 'CSCE361H',
attributes: {
number: "361H",
name: "Honors: Software Engineering"
}
      },
{
type: 'courses',
id: 'CSCE370H',
attributes: {
number: "370H",
name: "Data and Models II: Data Science Fundamentals"
}
      },
{
type: 'courses',
id: 'CSCE378',
attributes: {
number: "378",
name: "Human-Computer Interaction"
}
      },
{
type: 'courses',
id: 'CSCE378H',
attributes: {
number: "378H",
name: "Honors: Human-Computer Interaction"
}
      },
{
type: 'courses',
id: 'CSCE383H',
attributes: {
number: "383H",
name: "Honors: Fundamentals of Software Engineering "
}
      },
{
type: 'courses',
id: 'CSCE384H',
attributes: {
number: "384H",
name: "Honors : Applied Numerical Analysis"
}
      },
{
type: 'courses',
id: 'CSCE390',
attributes: {
number: "390",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE396',
attributes: {
number: "396",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE399H',
attributes: {
number: "399H",
name: "Honors Thesis"
}
      },
{
type: 'courses',
id: 'CSCE401H',
attributes: {
number: "401H",
name: "Honors: RAIK Design Studio I"
}
      },
{
type: 'courses',
id: 'CSCE402H',
attributes: {
number: "402H",
name: "Honors: RAIK Design Studio II"
}
      },
{
type: 'courses',
id: 'CSCE403H',
attributes: {
number: "403H",
name: "Honors: RAIK Design Studio III"
}
      },
{
type: 'courses',
id: 'CSCE404H',
attributes: {
number: "404H",
name: "Honors: RAIK Design Studio IV"
}
      },
{
type: 'courses',
id: 'CSCE410',
attributes: {
number: "410",
name: "Information Retrieval Systems"
}
      },
{
type: 'courses',
id: 'CSCE411',
attributes: {
number: "411",
name: "Data Modeling for Systems Development"
}
      },
{
type: 'courses',
id: 'CSCE411H',
attributes: {
number: "411H",
name: "Honors: Data Modeling for Systems Development"
}
      },
{
type: 'courses',
id: 'CSCE413',
attributes: {
number: "413",
name: "Database Systems"
}
      },
{
type: 'courses',
id: 'CSCE421',
attributes: {
number: "421",
name: "Foundation of Constraint Processing"
}
      },
{
type: 'courses',
id: 'CSCE423',
attributes: {
number: "423",
name: "Design and Analysis of Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE424',
attributes: {
number: "424",
name: "Computational Complexity Theory"
}
      },
{
type: 'courses',
id: 'CSCE425',
attributes: {
number: "425",
name: "Compiler Construction"
}
      },
{
type: 'courses',
id: 'CSCE428',
attributes: {
number: "428",
name: "Automata"
}
      },
{
type: 'courses',
id: 'CSCE430',
attributes: {
number: "430",
name: "Computer Architecture"
}
      },
{
type: 'courses',
id: 'CSCE432',
attributes: {
number: "432",
name: "High-Performance Processor Architectures"
}
      },
{
type: 'courses',
id: 'CSCE434',
attributes: {
number: "434",
name: "VLSI Design"
}
      },
{
type: 'courses',
id: 'CSCE435',
attributes: {
number: "435",
name: "Cluster and Grid Computing"
}
      },
{
type: 'courses',
id: 'CSCE436',
attributes: {
number: "436",
name: "Advanced Embedded Systems"
}
      },
{
type: 'courses',
id: 'CSCE437',
attributes: {
number: "437",
name: "File and Storage Systems"
}
      },
{
type: 'courses',
id: 'CSCE438',
attributes: {
number: "438",
name: "Sensor Networks"
}
      },
{
type: 'courses',
id: 'CSCE440',
attributes: {
number: "440",
name: "Numerical Analysis I"
}
      },
{
type: 'courses',
id: 'CSCE441',
attributes: {
number: "441",
name: "Approximation of Functions"
}
      },
{
type: 'courses',
id: 'CSCE447',
attributes: {
number: "447",
name: "Numerical Linear Algebra"
}
      },
{
type: 'courses',
id: 'CSCE451',
attributes: {
number: "451",
name: "Operating Systems Principles"
}
      },
{
type: 'courses',
id: 'CSCE455',
attributes: {
number: "455",
name: "Distributed Operating Systems"
}
      },
{
type: 'courses',
id: 'CSCE456',
attributes: {
number: "456",
name: "Parallel Programming"
}
      },
{
type: 'courses',
id: 'CSCE457',
attributes: {
number: "457",
name: "Systems Administration"
}
      },
{
type: 'courses',
id: 'CSCE461',
attributes: {
number: "461",
name: "Advanced Topics in Software Engineering"
}
      },
{
type: 'courses',
id: 'CSCE462',
attributes: {
number: "462",
name: "Communication Networks"
}
      },
{
type: 'courses',
id: 'CSCE463',
attributes: {
number: "463",
name: "Data and Network Security"
}
      },
{
type: 'courses',
id: 'CSCE464',
attributes: {
number: "464",
name: "Internet Systems and Programming"
}
      },
{
type: 'courses',
id: 'CSCE465',
attributes: {
number: "465",
name: "Wireless Communication Networks"
}
      },
{
type: 'courses',
id: 'CSCE466',
attributes: {
number: "466",
name: "Software Design and Architecture"
}
      },
{
type: 'courses',
id: 'CSCE467',
attributes: {
number: "467",
name: "Testing"
}
      },
{
type: 'courses',
id: 'CSCE468',
attributes: {
number: "468",
name: "Requirements Elicitation"
}
      },
{
type: 'courses',
id: 'CSCE470',
attributes: {
number: "470",
name: "Computer Graphics"
}
      },
{
type: 'courses',
id: 'CSCE471',
attributes: {
number: "471",
name: "Introduction to Bioinformatics"
}
      },
{
type: 'courses',
id: 'CSCE472',
attributes: {
number: "472",
name: "Digital Image Processing"
}
      },
{
type: 'courses',
id: 'CSCE473',
attributes: {
number: "473",
name: "Computer Vision"
}
      },
{
type: 'courses',
id: 'CSCE474',
attributes: {
number: "474",
name: "Introduction to Data Mining"
}
      },
{
type: 'courses',
id: 'CSCE475',
attributes: {
number: "475",
name: "Multiagent Systems"
}
      },
{
type: 'courses',
id: 'CSCE476',
attributes: {
number: "476",
name: "Introduction to Artificial Intelligence"
}
      },
{
type: 'courses',
id: 'CSCE476H',
attributes: {
number: "476H",
name: "Honors: Introduction to Artificial Intelligence"
}
      },
{
type: 'courses',
id: 'CSCE477',
attributes: {
number: "477",
name: "Cryptography and Computer Security"
}
      },
{
type: 'courses',
id: 'CSCE478',
attributes: {
number: "478",
name: "Introduction to Machine Learning "
}
      },
{
type: 'courses',
id: 'CSCE479',
attributes: {
number: "479",
name: "Introduction to Neural Networks"
}
      },
{
type: 'courses',
id: 'CSCE486',
attributes: {
number: "486",
name: "Computer Science Professional Project"
}
      },
{
type: 'courses',
id: 'CSCE487',
attributes: {
number: "487",
name: "Computer Science Senior Design Project"
}
      },
{
type: 'courses',
id: 'CSCE488',
attributes: {
number: "488",
name: "Computer Engineering Professional Development"
}
      },
{
type: 'courses',
id: 'CSCE489',
attributes: {
number: "489",
name: "Computer Engineering Senior Design Project"
}
      },
{
type: 'courses',
id: 'CSCE490',
attributes: {
number: "490",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE491',
attributes: {
number: "491",
name: "Internship in Computing Practise"
}
      },
{
type: 'courses',
id: 'CSCE493',
attributes: {
number: "493",
name: "Innovation Lab Project"
}
      },
{
type: 'courses',
id: 'CSCE493A',
attributes: {
number: "493A",
name: "Interdiscipinary Capstone"
}
      },
{
type: 'courses',
id: 'CSCE496',
attributes: {
number: "496",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE496H',
attributes: {
number: "496H",
name: "Honors: Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: 'CSCE498',
attributes: {
number: "498",
name: "Computer Problems"
}
      },
{
type: 'courses',
id: 'CSCE891',
attributes: {
number: "891",
name: "Internship in Computer Practise"
}
      },
{
type: 'courses',
id: 'CSCE897',
attributes: {
number: "897",
name: "Master Project"
}
      },
{
type: 'courses',
id: 'CSCE899',
attributes: {
number: "899",
name: "Master Thesis"
}
      },
{
type: 'courses',
id: 'CSCE910',
attributes: {
number: "910",
name: "Information Organization and Retrieval"
}
      },
{
type: 'courses',
id: 'CSCE913',
attributes: {
number: "913",
name: "Advanced Topics in Database Systems"
}
      },
{
type: 'courses',
id: 'CSCE914',
attributes: {
number: "914",
name: "Constraint Database Systems"
}
      },
{
type: 'courses',
id: 'CSCE921',
attributes: {
number: "921",
name: "Advanced Constraint Processing"
}
      },
{
type: 'courses',
id: 'CSCE923',
attributes: {
number: "923",
name: "Development and Analysis of Efficient Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE924',
attributes: {
number: "924",
name: "Graph Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE925',
attributes: {
number: "925",
name: "Scheduling Theory"
}
      },
{
type: 'courses',
id: 'CSCE930',
attributes: {
number: "930",
name: "Advanced Computer Architecture"
}
      },
{
type: 'courses',
id: 'CSCE932',
attributes: {
number: "932",
name: "Fault-Tolerance: Testing and Testable Design"
}
      },
{
type: 'courses',
id: 'CSCE933',
attributes: {
number: "933",
name: "Fault-Tolerance: System Design and Analysis"
}
      },
{
type: 'courses',
id: 'CSCE936',
attributes: {
number: "936",
name: "Cyber-Physical Systems"
}
      },
{
type: 'courses',
id: 'CSCE942',
attributes: {
number: "942",
name: "Numerical Analysis III"
}
      },
{
type: 'courses',
id: 'CSCE952',
attributes: {
number: "952",
name: "Advanced Computer Networks"
}
      },
{
type: 'courses',
id: 'CSCE953',
attributes: {
number: "953",
name: "Optical Communication Networks"
}
      },
{
type: 'courses',
id: 'CSCE961',
attributes: {
number: "961",
name: "Coding Theory"
}
      },
{
type: 'courses',
id: 'CSCE962',
attributes: {
number: "962",
name: "Advanced Software Engineering "
}
      },
{
type: 'courses',
id: 'CSCE970',
attributes: {
number: "970",
name: "Pattern Recognition"
}
      },
{
type: 'courses',
id: 'CSCE971',
attributes: {
number: "971",
name: "Advanced Bioinformatics"
}
      },
{
type: 'courses',
id: 'CSCE973',
attributes: {
number: "973",
name: "Support Vector Machines"
}
      },
{
type: 'courses',
id: 'CSCE974',
attributes: {
number: "974",
name: "Genetic Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE976',
attributes: {
number: "976",
name: "Advanced Artificial Intelligence"
}
      },
{
type: 'courses',
id: 'CSCE977',
attributes: {
number: "977",
name: "Data Encryption"
}
      },
{
type: 'courses',
id: 'CSCE979',
attributes: {
number: "979",
name: "Advances in Neural Networks and Genetic Algorithms"
}
      },
{
type: 'courses',
id: 'CSCE99',
attributes: {
number: "99",
name: "Graduate Seminar"
}
      },
{
type: 'courses',
id: 'CSCE990',
attributes: {
number: "990",
name: "Seminar"
}
      },
{
type: 'courses',
id: 'CSCE996',
attributes: {
number: "996",
name: "Research Problems Other Than Thesis"
}
      },
{
type: 'courses',
id: 'CSCE999',
attributes: {
number: "999",
name: "Doctoral Dissertation"
}
      }
];

  this.get('/courses', function() {
    return { data: courses };
  });



    // Find and return the provided course from our course list above
  this.get('/courses/:id', function (db, request) {
    return { data: courses.find((course) => request.params.id === course.id) };
  });

}
