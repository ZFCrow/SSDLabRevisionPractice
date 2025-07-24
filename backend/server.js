import express from 'express'; 
import cors from 'cors'; 
import { add } from './calculations.js'; 

const app = express(); 


app.use(express.json()); 
app.use(cors({origin: '*'})); // Enable CORS for all origins

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.post('/add', (req, res) => { 
    const { num1: a, num2:b } = req.body; 
    const result = add(a, b); 
    console.log('Adding:', a, b, 'Result:', result); 
    res.json({ result }); 
});

app.listen(3000, '0.0.0.0', () => { 
    console.log('Server is running on port 3000');
}); 