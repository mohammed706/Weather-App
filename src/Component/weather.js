import React from 'react' 

const Weather = (props) => {
    
    return(
        <div className='info'>
            {
                props.temperature && 
                <p className='info-key'>temperature:
                    <span className='info-value'>{props.temperature}</span>
                </p>
            }
            {
                props.city && 
                <p className='info-key'>city:
                    <span className='info-value'>{props.city}</span>
                </p>
            }
            {
                props.country && 
                <p className='info-key'>country:
                    <span className='info-value'>{props.country}</span>
                </p>
            }
            {
                props.humidity && 
                <p className='info-key'>humidity:
                    <span className='info-value'>{props.humidity}</span>
                </p>
            }
            {
                props.discription && 
                <p className='info-key'>discription:
                    <span className='info-value'>{props.discription}</span>
                </p>
            }
            {
                props.error && 
                <p className='info-key'>error:
                    <span className='info-value'>{props.error}</span>
                </p>
            }
            
            

        </div>
    )

}
export default Weather 