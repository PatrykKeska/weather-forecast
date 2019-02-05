import React from 'react'
import '../component/Form.css'

const Form = (props) => {

    return (
        <form className="form" onSubmit={props.click}>
            <input value={props.value} onChange={props.change} type="text"
                placeholder='nazwa miasta...'
            />
            <button >Szukaj </button>

        </form>
    )

}


export default Form