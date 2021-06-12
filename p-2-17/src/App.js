import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      debug: {newName}
      `${newName} is already added to phonebook`
      `string text`

`string text line 1
 string text line 2`

`string text ${newName} string text`

tag`string text ${newName} string text`
      ...
    </div>
  )
}

export default App

