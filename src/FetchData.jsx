import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FetchData() {
    const [records, setRecords] = useState([]);
        
        
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setRecords(data))
        .catch((err) => console.log(err))
    }, [])


  return (
    <div> 
        {records.map((list, index) => (
                <li key={index}>{list.id} | {list.name} </li>
            ))
        }
    </div>
  )
}

export default FetchData