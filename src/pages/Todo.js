import {useState, useEffect} from 'react'

import React from 'react'
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons")
    .then(result => setTodos(result.data))
  }, 
  [])

console.log(todos);

  return (
    <div>
      <form>
        <input type="text" name="txttodo" id=""/>
        <button>OK</button>
      </form>
      <ul>
        
      </ul>
    </div>
  )
}

export default Todo
