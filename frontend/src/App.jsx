import axios from 'axios'; 
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => { 
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const num1 = formData.get('num1'); 
    const num2 = formData.get('num2'); 
    console.log('Numbers:', num1, num2); 

    try { 
      const response = await axios.post('/api/add', { num1, num2 }); 
      console.log('Result:', response.data.result); 
      setResult(response.data.result); 
    } catch (error) { 
      console.error('Error:', error); 
    } 

  }
  return (
    <>
    <form onSubmit={handleSubmit}> 
      <div>
        <div>Enter two numbers to add: </div>
        <input type="number" name="num1" placeholder="Enter a number" /> 
        <input type="number" name="num2" placeholder="Enter another number" /> 
        <button type="submit">Submit</button> 

        <div id="result">
          {result !== null && <div id="finalResult">{result}</div>}
        </div> 
      </div>

    </form>
    </>
  )
}

export default App
