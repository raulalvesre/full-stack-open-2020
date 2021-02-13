import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const goodFeedback = () => setGood(good + 1)
    const neutralFeedback = () => setNeutral(neutral + 1)
    const negativeFeedback = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button feedback='good' handleClick={goodFeedback}/>
            <Button feedback='neutral' handleClick={neutralFeedback}/>
            <Button feedback='bad' handleClick={negativeFeedback}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

const Button = ({feedback, handleClick}) => <button onClick={handleClick}>{feedback}</button>;


const Statistics = ({good, neutral, bad}) => {
    let numberOfFeedbacks = good + neutral + bad;

    if (numberOfFeedbacks === 0) {
        return <p>no feedback given</p>
    } else {
        return (
            <table>
                <tbody>
                    <Statistic text={'good'} counter={good}/>
                    <Statistic text={'neutral'} counter={neutral}/>
                    <Statistic text={'bad'} counter={bad}/>
                    <Statistic text={'all'} counter={numberOfFeedbacks}/>
                    <Statistic text={'average'} counter={(good + (bad * -1)) / numberOfFeedbacks}/>
                    <Statistic text={'positive'} counter={good / numberOfFeedbacks * 100 + ' %'}/>
                </tbody>
            </table>
        )
    }
}

const Statistic = ({text, counter}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{counter}</td>
        </tr>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)