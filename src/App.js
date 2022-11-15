import axios from 'axios';
import './App.css';
import {useState} from 'react'


function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random').then(res => {
      setQuote(res.data)
      
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <div className= "container">
        <button onClick={getQuote}>get Quote</button>
        {quote && <p>{ quote.content }</p>}
        {quote && <p>{ quote.author }</p>}
      </div>
      
    </div>
  );
}

export default App;
