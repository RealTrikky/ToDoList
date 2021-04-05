import { useState } from "react"
import React from 'react'

function ListerAdd({onCreate}) {
    const [value, setValue] = useState('')

    function submitDeal(event) {
        event.preventDefault()

        if (value.trim()) {
         onCreate(value)
         setValue('')
        }
    }
    return (
        <form onSubmit={submitDeal}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add New</button>
        </form>
    )
}

export default ListerAdd