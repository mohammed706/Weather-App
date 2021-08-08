import React from 'react' 

const Form = (props) =>  {
    return(
        <form onSubmit={props.handelSubmit} >
            <input type='text' name='country' placeholder ='country' /><br/>
            <input type='text' name='city' placeholder ='city' /><br/>
            <button className ='myButton'>Get Weather</button>

        </form>
    )

}
export default Form 