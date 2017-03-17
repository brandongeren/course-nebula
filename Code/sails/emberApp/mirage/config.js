export default function() {

  this.namespace = '/api';

  let courses = [
{
type: 'courses',
id: '10',
attributes: {
number: "10",
name: "Introduction to CSE"
}
      },
{
type: 'courses',
id: '100',
attributes: {
number: "100",
name: "Introduction to Informatics"
}
      },
{
type: 'courses',
id: '101',
attributes: {
number: "101",
name: "Fundamentals of Computer Science"
}
      },
{
type: 'courses',
id: '101L',
attributes: {
number: "101L",
name: "Fundamentals of Computing Laboratory"
}
      },
{
type: 'courses',
id: '120',
attributes: {
number: "120",
name: "Learning to Code"
}
      },
{
type: 'courses',
id: '155A',
attributes: {
number: "155A",
name: "Computer Science I"
}
      },
{
type: 'courses',
id: '155E',
attributes: {
number: "155E",
name: "Computer Science I: Systems Engineering Focus"
}
      },
{
type: 'courses',
id: '155H',
attributes: {
number: "155H",
name: "Honors: Computer Science I"
}
      },
{
type: 'courses',
id: '155N',
attributes: {
number: "155N",
name: "Computer Science I: Engineering and Science Focus"
}
      },
{
type: 'courses',
id: '155T',
attributes: {
number: "155T",
name: "Computer Science I: Informatics Focus"
}
      },
{
type: 'courses',
id: '156',
attributes: {
number: "156",
name: "Computer Science II"
}
      },
{
type: 'courses',
id: '156H',
attributes: {
number: "156H",
name: "Honors: Computer Science II"
}
      },
{
type: 'courses',
id: '183H',
attributes: {
number: "183H",
name: "Honors: Computer Problem Solving Essentials"
}
      },
{
type: 'courses',
id: '184H',
attributes: {
number: "184H",
name: "Honors: Software Development Essentials"
}
      },
{
type: 'courses',
id: '190',
attributes: {
number: "190",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '196',
attributes: {
number: "196",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '220',
attributes: {
number: "220",
name: "Software Development for Smart-Mobile Systems"
}
      },
{
type: 'courses',
id: '230',
attributes: {
number: "230",
name: "Computer Organization"
}
      },
{
type: 'courses',
id: '230H',
attributes: {
number: "230H",
name: "Honors: Computer Organization"
}
      },
{
type: 'courses',
id: '235',
attributes: {
number: "235",
name: "Introduction to Discrete Structures"
}
      },
{
type: 'courses',
id: '235H',
attributes: {
number: "235H",
name: "Honors: Introduction to Discrete Structures"
}
      },
{
type: 'courses',
id: '236',
attributes: {
number: "236",
name: "Embedded Systems"
}
      },
{
type: 'courses',
id: '251',
attributes: {
number: "251",
name: "Unix Programming Environment"
}
      },
{
type: 'courses',
id: '251K',
attributes: {
number: "251K",
name: "C Programming "
}
      },
{
type: 'courses',
id: '252A',
attributes: {
number: "252A",
name: "FORTRAN Programming"
}
      },
{
type: 'courses',
id: '283H',
attributes: {
number: "283H",
name: "Honors: Foundation of Computer Science"
}
      },
{
type: 'courses',
id: '284H',
attributes: {
number: "284H",
name: "Honors: Foundation of Computer Science"
}
      },
{
type: 'courses',
id: '290',
attributes: {
number: "290",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '296',
attributes: {
number: "296",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '310',
attributes: {
number: "310",
name: "Data Structures and Algorithms"
}
      },
{
type: 'courses',
id: '310H',
attributes: {
number: "310H",
name: "Honors: Data Structure and Algorithms"
}
      },
{
type: 'courses',
id: '311',
attributes: {
number: "311",
name: "Data Structures and Algorithms for Informatics"
}
      },
{
type: 'courses',
id: '320',
attributes: {
number: "320",
name: "Data Analysis"
}
      },
{
type: 'courses',
id: '322',
attributes: {
number: "322",
name: "Programming Language Concepts"
}
      },
{
type: 'courses',
id: '322H',
attributes: {
number: "322H",
name: "Honors: Programming Language Concepts"
}
      },
{
type: 'courses',
id: '335',
attributes: {
number: "335",
name: "Digital Logic Design"
}
      },
{
type: 'courses',
id: '351',
attributes: {
number: "351",
name: "Operating System Kernels"
}
      },
{
type: 'courses',
id: '361',
attributes: {
number: "361",
name: "Software Engineering"
}
      },
{
type: 'courses',
id: '361H',
attributes: {
number: "361H",
name: "Honors: Software Engineering"
}
      },
{
type: 'courses',
id: '370H',
attributes: {
number: "370H",
name: "Data and Models II: Data Science Fundamentals"
}
      },
{
type: 'courses',
id: '378',
attributes: {
number: "378",
name: "Human-Computer Interaction"
}
      },
{
type: 'courses',
id: '378H',
attributes: {
number: "378H",
name: "Honors: Human-Computer Interaction"
}
      },
{
type: 'courses',
id: '383H',
attributes: {
number: "383H",
name: "Honors: Fundamentals of Software Engineering "
}
      },
{
type: 'courses',
id: '384H',
attributes: {
number: "384H",
name: "Honors : Applied Numerical Analysis"
}
      },
{
type: 'courses',
id: '390',
attributes: {
number: "390",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '396',
attributes: {
number: "396",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '399H',
attributes: {
number: "399H",
name: "Honors Thesis"
}
      },
{
type: 'courses',
id: '401H',
attributes: {
number: "401H",
name: "Honors: RAIK Design Studio I"
}
      },
{
type: 'courses',
id: '402H',
attributes: {
number: "402H",
name: "Honors: RAIK Design Studio II"
}
      },
{
type: 'courses',
id: '403H',
attributes: {
number: "403H",
name: "Honors: RAIK Design Studio III"
}
      },
{
type: 'courses',
id: '404H',
attributes: {
number: "404H",
name: "Honors: RAIK Design Studio IV"
}
      },
{
type: 'courses',
id: '410',
attributes: {
number: "410",
name: "Information Retrieval Systems"
}
      },
{
type: 'courses',
id: '411',
attributes: {
number: "411",
name: "Data Modeling for Systems Development"
}
      },
{
type: 'courses',
id: '411H',
attributes: {
number: "411H",
name: "Honors: Data Modeling for Systems Development"
}
      },
{
type: 'courses',
id: '413',
attributes: {
number: "413",
name: "Database Systems"
}
      },
{
type: 'courses',
id: '421',
attributes: {
number: "421",
name: "Foundation of Constraint Processing"
}
      },
{
type: 'courses',
id: '423',
attributes: {
number: "423",
name: "Design and Analysis of Algorithms"
}
      },
{
type: 'courses',
id: '424',
attributes: {
number: "424",
name: "Computational Complexity Theory"
}
      },
{
type: 'courses',
id: '425',
attributes: {
number: "425",
name: "Compiler Construction"
}
      },
{
type: 'courses',
id: '428',
attributes: {
number: "428",
name: "Automata"
}
      },
{
type: 'courses',
id: '430',
attributes: {
number: "430",
name: "Computer Architecture"
}
      },
{
type: 'courses',
id: '432',
attributes: {
number: "432",
name: "High-Performance Processor Architectures"
}
      },
{
type: 'courses',
id: '434',
attributes: {
number: "434",
name: "VLSI Design"
}
      },
{
type: 'courses',
id: '435',
attributes: {
number: "435",
name: "Cluster and Grid Computing"
}
      },
{
type: 'courses',
id: '436',
attributes: {
number: "436",
name: "Advanced Embedded Systems"
}
      },
{
type: 'courses',
id: '437',
attributes: {
number: "437",
name: "File and Storage Systems"
}
      },
{
type: 'courses',
id: '438',
attributes: {
number: "438",
name: "Sensor Networks"
}
      },
{
type: 'courses',
id: '440',
attributes: {
number: "440",
name: "Numerical Analysis I"
}
      },
{
type: 'courses',
id: '441',
attributes: {
number: "441",
name: "Approximation of Functions"
}
      },
{
type: 'courses',
id: '447',
attributes: {
number: "447",
name: "Numerical Linear Algebra"
}
      },
{
type: 'courses',
id: '451',
attributes: {
number: "451",
name: "Operating Systems Principles"
}
      },
{
type: 'courses',
id: '455',
attributes: {
number: "455",
name: "Distributed Operating Systems"
}
      },
{
type: 'courses',
id: '456',
attributes: {
number: "456",
name: "Parallel Programming"
}
      },
{
type: 'courses',
id: '457',
attributes: {
number: "457",
name: "Systems Administration"
}
      },
{
type: 'courses',
id: '461',
attributes: {
number: "461",
name: "Advanced Topics in Software Engineering"
}
      },
{
type: 'courses',
id: '462',
attributes: {
number: "462",
name: "Communication Networks"
}
      },
{
type: 'courses',
id: '463',
attributes: {
number: "463",
name: "Data and Network Security"
}
      },
{
type: 'courses',
id: '464',
attributes: {
number: "464",
name: "Internet Systems and Programming"
}
      },
{
type: 'courses',
id: '465',
attributes: {
number: "465",
name: "Wireless Communication Networks"
}
      },
{
type: 'courses',
id: '466',
attributes: {
number: "466",
name: "Software Design and Architecture"
}
      },
{
type: 'courses',
id: '467',
attributes: {
number: "467",
name: "Testing"
}
      },
{
type: 'courses',
id: '468',
attributes: {
number: "468",
name: "Requirements Elicitation"
}
      },
{
type: 'courses',
id: '470',
attributes: {
number: "470",
name: "Computer Graphics"
}
      },
{
type: 'courses',
id: '471',
attributes: {
number: "471",
name: "Introduction to Bioinformatics"
}
      },
{
type: 'courses',
id: '472',
attributes: {
number: "472",
name: "Digital Image Processing"
}
      },
{
type: 'courses',
id: '473',
attributes: {
number: "473",
name: "Computer Vision"
}
      },
{
type: 'courses',
id: '474',
attributes: {
number: "474",
name: "Introduction to Data Mining"
}
      },
{
type: 'courses',
id: '475',
attributes: {
number: "475",
name: "Multiagent Systems"
}
      },
{
type: 'courses',
id: '476',
attributes: {
number: "476",
name: "Introduction to Artificial Intelligence"
}
      },
{
type: 'courses',
id: '476H',
attributes: {
number: "476H",
name: "Honors: Introduction to Artificial Intelligence"
}
      },
{
type: 'courses',
id: '477',
attributes: {
number: "477",
name: "Cryptography and Computer Security"
}
      },
{
type: 'courses',
id: '478',
attributes: {
number: "478",
name: "Introduction to Machine Learning "
}
      },
{
type: 'courses',
id: '479',
attributes: {
number: "479",
name: "Introduction to Neural Networks"
}
      },
{
type: 'courses',
id: '486',
attributes: {
number: "486",
name: "Computer Science Professional Project"
}
      },
{
type: 'courses',
id: '487',
attributes: {
number: "487",
name: "Computer Science Senior Design Project"
}
      },
{
type: 'courses',
id: '488',
attributes: {
number: "488",
name: "Computer Engineering Professional Development"
}
      },
{
type: 'courses',
id: '489',
attributes: {
number: "489",
name: "Computer Engineering Senior Design Project"
}
      },
{
type: 'courses',
id: '490',
attributes: {
number: "490",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '491',
attributes: {
number: "491",
name: "Internship in Computing Practise"
}
      },
{
type: 'courses',
id: '493',
attributes: {
number: "493",
name: "Innovation Lab Project"
}
      },
{
type: 'courses',
id: '493A',
attributes: {
number: "493A",
name: "Interdiscipinary Capstone"
}
      },
{
type: 'courses',
id: '496',
attributes: {
number: "496",
name: "Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '496H',
attributes: {
number: "496H",
name: "Honors: Special Topics in Computer Science"
}
      },
{
type: 'courses',
id: '498',
attributes: {
number: "498",
name: "Computer Problems"
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
