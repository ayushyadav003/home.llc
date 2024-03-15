import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Header from './components/header/Header'
import moment from 'moment'
import WavyChart from './components/wavechart/WaveChart'
import { weatherIcons } from './utils/utils'

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

  console.log(hourlydata, typeof currentHour)

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
            hourlydata.hours
              .slice(
                currentHour > 5 ? currentHour : 0,
                currentHour < 5 ? currentHour - 5 : currentHour + 5,
              )
              .map((data, i) => {
                return (
                  <div key={i}>
                    <span>
                      {moment(data?.datetime, 'HH:mm:ss').format('HH:mm')}
                    </span>
                    <img src={weatherIcons[i]} alt="icon" />
                    <span>{data?.temp}</span>
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
