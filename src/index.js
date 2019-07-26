import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ parts }) => {
  const rows = () => parts.map(part =>
    <Part
      key={part.id}
      part={part}
    />
  )

  return (
    <main>
      {rows()}
    </main>
  )
}

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <aside>
      <p>
        Number of exercises {total}
      </p>
    </aside>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))