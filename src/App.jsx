import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Header from './components/header/Header'
import moment from 'moment'
import WavyChart from './components/wavechart/WaveChart'

function App() {
  const [hourlydata, sethourlyData] = useState([])
  const today = moment().format('MMM DD, YYYY')
  const currentHour = moment().hour()
  const getWeather = async () => {
    try {
      const apiData = {
        method: 'GET',
        url:
          'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&include=hours&key=8LWX7JM86ZW8VH3YXU72JJLK4&contentType=json',
      }

      const response = await axios(apiData)
      sethourlyData(response?.data?.days[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="homeContent">
        <div className="intro">
          <div>
            <h1>
              New Delhi,
              <br />
              India
            </h1>
            <p>{today || '--'}</p>
            <span>Cloudy</span>
          </div>
          <div className="imgWrapper">
            <img src="/images/drawerBanner.png" />
          </div>
        </div>
        <div className="hourlyTemp">
          {hourlydata?.hours?.length > 0 &&
            hourlydata.hours.splice(0, 5).map((data, i) => {
              const backendHour = parseInt(data?.datetime?.substring(0, 2), 10)
              return (
                <div key={i}>
                  <span>{data?.temp}</span>
                  {}
                </div>
              )
            })}
        </div>
      </div>
      <div className="additionalInfo">
        <div className="inner">
          <h2>Additional Info</h2>
          <div className="info">
            <div>
              <span>Precipitation</span>
              <p>3%</p>
            </div>
            <div>
              <span>Humidity</span>
              <p>74%</p>
            </div>
            <div>
              <span>Windy</span>
              <p>18 km/h</p>
            </div>
          </div>
        </div>
      </div>
      <WavyChart />
    </div>
  )
}

export default App
