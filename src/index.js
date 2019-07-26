import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.count}
    </p>
  )
}

const Content = (props) => {
  return (
    <main>
      <Part name={props.part1} count={props.exercises1} />
      <Part name={props.part2} count={props.exercises2} />
      <Part name={props.part3} count={props.exercises3} />
    </main>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.num}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        exercises1={course.parts[0].exercises}
        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}
        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      />
      <Total num={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))