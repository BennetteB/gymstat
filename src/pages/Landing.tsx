import GYMSTAT_LOGO from "../assets/GYMSTAT_LOGO"
import workoutMachineImage from "../assets/WorkoutMachineImage1000px.png"
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
  ScriptableContext,
  ChartOptions,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  MatrixElement,
  MatrixController,
);


export default function Landing() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col bg-secondary">
      <nav className="max-h-16 w-full fixed bg-secondary flex">
        <div className="w-fit h-fit mx-auto my-2 max-w-[10rem]">
          <GYMSTAT_LOGO />
        </div>
      </nav>
      <main id="content" className="max-h-screen">
        <section className="flex flex-wrap h-screen">
          <div className="my-auto mx-auto max-w-xs pt-14">
            <h1 className="text-4xl font-bold">TAKE YOUR <span className="text-accent">WORKOUTS</span> TO THE NEXT <span className="text-accent">LEVEL</span></h1>
            <p className="mt-1 font-medium">Use <span className="text-accent">GYMSTAT</span> to track your workouts and health, and achieve the <span className="text-accent">results</span> you want</p>
          </div>
          <div className="max-w-sm lg:max-w-xl mx-auto my-auto">
            <img src={workoutMachineImage} alt="An image of two stacked dumbells" />
          </div>
        </section>
        <section className="flex flex-wrap-reverse h-screen text-end">
          <div className="flex flex-col mx-auto my-auto xl:flex-row xl:w-[50rem] ">
            <div className="w-56 h-56 mx-auto mt-auto pt-14 lg:w-80 lg:h-80">
              <Line options={areaChartOptions} data={areaChartData} />
            </div>
            <div className="w-44 h-44 mx-auto mb-auto lg:w-80 lg:h-80">
              <Radar options={radarChartOptions} data={radarChartData} />
            </div>
          </div>
          <div className="my-auto mx-auto max-w-xs pt-14">
            <h1 className="text-4xl font-bold">VIEW YOUR <span className="text-accent">PROGRESS</span></h1>
            <p className="font-medium">See how far you have come and how much you have <span className="text-accent">achieved</span></p>
          </div>
        </section>
        <section className="flex flex-wrap h-screen">
          <div className="mx-auto my-auto max-w-xs pt-14">
            <h1 className="text-4xl font-bold">GET <span className="text-accent">MOTIVATED</span></h1>
            <p className="font-medium"><span className="text-accent">Plan</span> and <span className="text-accent">look forward</span> to your workouts</p>
          </div>
          <div className="flex flex-col mx-auto my-auto xl:flex-row xl:pt-14 xl:w-[50rem]">
            <div className="w-56 h-48 mx-auto my-auto">
              <Chart type="matrix" data={matrixChartData} options={matrixChartOptions} />
            </div>
            <div className="w-56 h-24 bg-primary rounded-sm mx-auto my-auto flex flex-col text-secondary justify-center">
              <h2 className="font-semibold text-3xl mx-auto ">46%</h2>
              <p className="mx-auto text-accent font-medium">Bench Press</p>
              <p className="mx-auto leading-3 text-tertiary mb-2">| Strength Increase |</p>
            </div>
            <div className="w-56 h-24 bg-primary rounded-sm mx-auto my-auto flex flex-col text-secondary justify-center">
              <h2 className="font-semibold text-3xl mx-auto ">-14KG</h2>
              <p className="mx-auto text-accent font-medium">Weight</p>
              <p className="mx-auto leading-3 text-tertiary mb-2">| Weight Loss |</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col h-screen text-center">
          <div className="pt-14 mx-auto my-auto">
            <h1 className="text-4xl font-bold">SIGN UP <span className="text-accent">OR</span> LOG IN</h1>
            <p className="font-medium">Start tracking your workouts and health today!</p>
            <SigninForm  className="mt-8"/>
          </div>
          <footer className="mt-auto">By Bennette Benoy</footer>
        </section>
        <section className="h-1"></section>
      </main>
    </div>
  )
}

function SigninForm({className} : {className : string}) {
  const [signupState, setSignupState] = useState<"signup" | "login">("signup")
  return (
    <div className={className}>
        <div className="flex flex-row justify-center">
          <input type="radio" id="signup-radio" name="signin" className="peer/signin absolute w-0 h-0 opacity-0" checked={signupState === "signup" ? true : false} onClick={() => setSignupState("signup")} />
          <label htmlFor="signup-radio" className="w-20 bg-tertiary rounded-l-sm peer-checked/signin:bg-accent transition-colors">Sign up</label>
          <input type="radio" id="login-radio" name="signin" className="peer/login absolute w-0 h-0 opacity-0" checked={signupState === "login" ? true : false} onClick={() => setSignupState("login")} />
          <label htmlFor="login-radio" className="w-20 bg-tertiary rounded-r-sm peer-checked/login:bg-accent transition-colors">Log in</label>
        </div>
        <form className="mt-4 flex flex-col">
          <input type="email" placeholder="Email" className="w-60 h-8 mx-auto"/>
          <input type="password" placeholder="Password" className="w-60 h-8 mx-auto"/>
          { signupState === "signup" ?
            <input type="password" placeholder="Confirm Password" className="w-60 h-8 mx-auto"/>
            : ""
          }
          <input type="submit" className="w-60 h-8 mt-4 mx-auto bg-accent text-primary rounded-sm"/>
        </form>
    </div>

  )
}

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

const areaChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  }
}

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];

const areaChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [25, 27, 29, 29, 31, 32, 33],
      pointRadius: 1.5,
      lineTension: 0.2,
      borderColor: '#fcfbfd',
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 125);
        gradient.addColorStop(0, "rgba(36, 121, 219,0.7)");
        gradient.addColorStop(0.5, "rgba(36, 121, 219,0.3)");
        gradient.addColorStop(1, "rgba(36, 121, 219,0)");
        return gradient;
      },
    },
  ],
};

const radarChartOptions: ChartOptions<'radar'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 70,
      ticks: {
        stepSize: 0,
        backdropColor: "transparent",
        color: "white",
      },
      grid: {
        color: "black",
      }

    }
  }
}

const radarChartData = {
  labels: ['Upper Body', 'Legs', 'Back', 'Core', 'Cardio'],
  datasets: [
    {
      label: '% Improvement',
      data: [64, 56, 34, 60, 45],
      backgroundColor: "rgba(36, 121, 219,0.3)",
      borderColor: "rgba(36, 121, 219,0.7)",
      borderWidth: 1,
    }
  ]
}
