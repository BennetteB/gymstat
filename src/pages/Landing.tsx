import GYMSTAT_LOGO from "../assets/GYMSTAT_LOGO"
import dumbell_image from "../assets/Dumbells.png"
import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export default function Landing() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col bg-black-dark">
      <nav className="max-h-16 w-full bg-black-dark">
        <div className="w-fit h-fit mx-auto mt-4 max-w-[12rem]">
          <GYMSTAT_LOGO />
        </div>
      </nav>
      <div className="mx-auto mt-20">
        <div className="w-80">
          <img src={dumbell_image} alt="An image of two stacked dumbells"/>
        </div>
      </div>
      <section className="max-w-md mt-20 mx-auto">
        <h1 className="font-bold text-5xl text-center">TAKE YOUR <span className="text-accent">WORKOUTS</span> TO THE NEXT LEVEL</h1>
      </section>
      <section className="mt-24 mx-auto w-fit">
        <h1 className="font-bold text-4xl text-center">ANALYSE YOUR <span className="text-accent">WORKOUTS</span> AND MAKE <span className="text-accent">IMPROVEMENTS</span></h1>
        <div className="w-fit h-fit mx-auto mt-8">
          <Line options={exampleAreaGraphOptions} data={exampleAreaGraphData} className="w-20 h-20 min-w-[5rem] min-h-[5rem]" />
        </div>
        <div className="w-fit h-fit mx-auto mt-8">
          <Radar options={exampleAreaGraphOptions} data={exampleRadarGraphData} width={300} height={300} className="w-10 h-10 min-w-[5rem] min-h-[5rem]" />
        </div>
      </section>
      <section className="mt-24 mx-auto w-fit">
        <h1 className="font-bold text-4xl text-center">VIEW YOUR <span className="text-accent">PROGRESS</span> AND GET <span className="text-accent">MOTIVATED</span></h1>
        <div className="w-fit h-fit mx-auto mt-8">
          <Line options={exampleAreaGraphOptions} data={exampleAreaGraphData} className="w-20 h-20 min-w-[5rem] min-h-[5rem]" />
        </div>
        <div className="w-fit h-fit mx-auto mt-8">
          <Radar options={exampleAreaGraphOptions} data={exampleRadarGraphData} width={300} height={300} className="w-10 h-10 min-w-[5rem] min-h-[5rem]" />
        </div>
      </section>
    </div>
  )
}



const exampleAreaGraphOptions = {
  responsive: false,
  plugins: {
    legend: {
        display: false,
    },
   },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
};

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];

export const exampleAreaGraphData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [25,27,29,29,31,32,33],
      borderColor: '#fcfbfd',
      backgroundColor: (context: ScriptableContext<"line">) => {
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, 0, 0, 100);
                  gradient.addColorStop(0, "rgba(255, 211, 13,0.7)");
                  gradient.addColorStop(1, "rgba(255, 211, 13,0)");
                  return gradient;
                },
    },
  ],
};

export const exampleRadarGraphData = {
  labels: ['Upper Body', 'Arms', 'Core', 'Legs', 'Back'],
  datasets: [
    {
      label: '% in Strength Gain',
      data: [32, 44, 38, 51, 29],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};
