const App = () => {
  // Course data
  const courses = [
    {
      'id': 1,
      'title': 'Half Stack application development',
      'parts': [
        {
          'name': 'Fundamentals of React',
          'exercises': 10,
          'id': 1
        },
        {
          'name': 'Using props to pass data',
          'exercises': 7,
          'id': 400
        },
        {
          'name': 'Redux',
          'exercises': 132,
          'id': 444
        },
        {
          'name': 'State of a component',
          'exercises': 14,
          'id': 3
        }
      ]
    },
    {
      'id': 2,
      'title': 'Node.js',
      'parts': [
        {
          'name': 'Routing',
          'exercises': 3,
          'id': 1
        },
        {
          'name': 'Middlewares',
          'exercises': 7,
          'id': 2
        }
      ]
    }
  ];

  // Generate courses content
  return (
    <div>
      {
        // Loop through all courses
        courses.map(course =>
          <Course course={course} key={course.id} />
        )
      }
    </div>
  );

};

// Course element
const Course = ({ course }) => (
  <div key={course.id}>
    <Header title={course.title} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);


// Header element
const Header = (props) => (
  <h1>
    {props.title}
  </h1>
);

// Course content element
const Content = ({ parts }) => (
  <ul>
    {
      parts.map(part =>
        <li key={part.id}>{part.name} ({part.exercises} exercises)</li>
      )
    }
  </ul>
);

// Total number of labs element
const Total = ({ parts }) => {

  const exerciseSum = Object.keys(parts).reduce(function (previous, key) {
    return previous + parts[key].exercises;
  }, 0);

  return (
    <p>Number of labs: {exerciseSum}</p>
  )
};



export default App