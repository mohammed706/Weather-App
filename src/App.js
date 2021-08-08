import React, { Component } from 'react'
import Weather from './Component/weather'
import Form from './Component/form'

const api_key = "13c6ac2146269445f94bb778aba690af";
//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
class App extends Component{
  state = {
    temperature:'',
    city : '',
    country : '',
    humidity : '',
    discription : '',
    error :''

  }

  handelSubmit = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value ;
    const country = e.target.elements.country.value ;
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data =await response.json();
    console.log(data)
    if (city && country ){
      this.setState({
        temperature:data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        discription : data.weather[0].description,
        error :''
      })
    } else {
        this.setState ({
          temperature:'',
          city : '',
          country : '',
          humidity : '',
          discription : '',
          error :'you are not Entered any city or country bitch ... go and put that shit '
        })
        
    }
   
      
  }
  render() {
    return(
      <div className = 'container'>
          <div className='form-container'>
          
          <Form handelSubmit = {this.handelSubmit}/>
          <Weather 
            temperature={this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            discription = {this.state.discription}
            error ={this.state.error}/>
      
        </div>

      </div>
    )
  }
  
    
  

}
export default App
