import { LineChart } from '@mui/x-charts/LineChart'
import './wave.scss'

function WavyChart() {
  return (
    <div className="lineChartContainer">
      <div className="inner">
        <div className="header">
          <h2>Temperature</h2>
          <select value="10">
            <option value={'10'}> Last Month</option>
          </select>
        </div>
        <div className="chartWrapper">
          <LineChart
            //   xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
                color: '#FFD9B1',
              },
              {
                data: [3, 4, 6, 7, 2, 5],
                area: true,
                color: '#FF8900',
              },
            ]}
            width={600}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default WavyChart
