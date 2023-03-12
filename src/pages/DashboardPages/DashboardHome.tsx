import DashboardPage from "./DashboardPage"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import {
  Chart as ChartJS,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'

ChartJS.register(
  MatrixElement,
  MatrixController,
);

function DashboardHome() {
  return (
    <DashboardPage>
      <div className="text-primary mx-auto text-center mt-8 text-xl">
        <p>Your Last Workout Was</p>
        <p className="text-2xl font-semibold"><span className="text-accent">4</span> Days Ago</p>
        <div className="w-56 h-48 mx-auto mt-4">
          <Chart type="matrix" data={matrixChartData} options={matrixChartOptions} />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold pl-5">Favourite Stats</h2>
        <div className="flex flex-col mx-auto w-56 h-32 mt-4 justify-center text-center border-dashed border-4 border-accent rounded-sm text-accent">
          <FontAwesomeIcon icon={faSquarePlus} size="2xl" className="" />
          <p className="text-xl mt-1">Add Chart</p>
        </div>
      </div>
    </DashboardPage>
  )
}

export default DashboardHome

const matrixChartData = {
  datasets: [{
    label: 'Heatmap',
    data: [
      { x: "March", y: "Week 1", v: 0 },
      { x: "March", y: "Week 2", v: 0 },
      { x: "March", y: "Week 3", v: 10 },
      { x: "March", y: "Week 4", v: 0 },
      { x: "April", y: "Week 1", v: 20 },
      { x: "April", y: "Week 2", v: 10 },
      { x: "April", y: "Week 3", v: 20 },
      { x: "April", y: "Week 4", v: 30 },
      { x: "May", y: "Week 1", v: 10 },
      { x: "May", y: "Week 2", v: 10 },
      { x: "May", y: "Week 3", v: 30 },
      { x: "May", y: "Week 4", v: 20 },
      { x: "June", y: "Week 1", v: 0 },
      { x: "June", y: "Week 2", v: 20 },
      { x: "June", y: "Week 3", v: 30 },
      { x: "June", y: "Week 4", v: 30 },
      { x: "July", y: "Week 1", v: 30 },
      { x: "July", y: "Week 2", v: 10 },
      { x: "July", y: "Week 3", v: 0 },
      { x: "July", y: "Week 4", v: 30 },
      { x: "August", y: "Week 1", v: 30 },
      { x: "August", y: "Week 2", v: 20 },
      { x: "August", y: "Week 3", v: 20 },
      { x: "August", y: "Week 4", v: 0 },
    ],
    backgroundColor: (context: any) => {
      const value = context.dataset.data[context.dataIndex]["v"];
      const alpha = (value - 5) / 40;
      return `rgba(36,121,219,${alpha})`
    },
    width: ({ chart }: { chart: any }) => (chart.chartArea || {}).height / 4 - 1,
    height: ({ chart }: { chart: any }) => (chart.chartArea || {}).height / 4 - 1,
  }]

}

const matrixChartOptions: ChartOptions<"matrix"> = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1.35,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: 'category',
      labels: ["March", "April", "May", "June", "July", "August"],
      grid: {
        display: false,
      }
    },
    y: {
      offset: true,
      type: 'category',
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      grid: {
        display: false,
      }
    }
  }

}
