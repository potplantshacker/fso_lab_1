import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({
    "good": 0,
    "neutral": 0,
    "bad": 0,
    "total": 0
  })

  const handleGoodFeedback = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1,
      total: feedback.total + 1
    }
    setFeedback(newFeedback)
  }

  const handleNeutralFeedback = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1,
      total: feedback.total + 1
    }
    setFeedback(newFeedback)
  }

  const handleBadFeedback = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1,
      total: feedback.total + 1
    }
    setFeedback(newFeedback)
  }


  return (
    <div>

      <h1>Give feedback</h1>

      <Button handleClick={handleGoodFeedback} text='Good' />
      <Button handleClick={handleNeutralFeedback} text='Neutral' />
      <Button handleClick={handleBadFeedback} text='Bad' />

      <Statistics feedbackData={feedback} />
    </div>
  )
}

// ---- Component that generates feedback statistics 
const Statistics = ({ feedbackData }) => {
  // No feedback
  if (feedbackData.total === 0) {
    return (
      <div>No feedback given</div>
    );
  }

  // Feedback found
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Statistic</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="Good" value={feedbackData.good} />
          <StatisticLine text="Neutral" value={feedbackData.neutral} />
          <StatisticLine text="Bad" value={feedbackData.bad} />
          <StatisticLine text="All" value={feedbackData.total} />
          <StatisticLine text="Average" value={((feedbackData.good * 1 + feedbackData.bad * -1) / (feedbackData.total || 1)).toFixed(2)} />
          <StatisticLine text="Positive" value={(feedbackData.good / feedbackData.total * 100).toFixed(2) + "%"} />
        </tbody>
      </table>



    </div>

  );
}


// ---- Individual statistics 
const StatisticLine = ({ text, value }) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)


// ---- Button component 
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)


export default App

