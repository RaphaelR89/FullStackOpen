const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  // console.log(parts);

  const Header = (props) => {
    // console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    );
  };
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.total}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total total={total} />
    </div>
  );
};

export default App;
