import React from 'react'

const Header = ({ course }) => {
  return (
    <header>
      <h1>{course.name}</h1>
    </header>
  )
}

const Part = ({ part }) =>
  <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </div>
)

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => p.exercises + s, 0)

  return (
    <aside>
      <p>
        Yhteensä {total} tehtävää
      </p>
    </aside>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course