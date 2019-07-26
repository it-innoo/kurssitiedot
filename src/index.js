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
      <Part name={props.parts[0].name} count={props.parts[0].exercises} />
      <Part name={props.parts[1].name} count={props.parts[1].exercises} />
      <Part name={props.parts[2].name} count={props.parts[2].exercises} />
    </main>
  )
}

const Total = (props) => {
  const num = props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises
  return (
    < p >
      Number of exercises {num}
    </p >
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))