import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDumbbell, faHouse, faHeartPulse, faChartSimple, faGear} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import DashboardHome from './DashboardPages/DashboardHome'

function Dashboard() {
  const [dashboardState, setDashboardState] = useState<"home" | "workouts" | "health" | "analytics" | "settings">("home")
  return (
    <div className="w-full h-screen flex flex-col bg-secondary">
    {dashboardState === "home" ? <DashboardHome /> : ""}
    <nav className='fixed bottom-0 pb-2 w-screen flex flex-row justify-evenly border-t-tertiary border-t-2 pt-2'>
      <FontAwesomeIcon icon={faHouse} size="xl" onClick={() => setDashboardState("home")} className={dashboardState === "home" ? "text-accent" : ""}/>
      <FontAwesomeIcon icon={faDumbbell} size="xl"onClick={() => setDashboardState("workouts")} className={dashboardState === "workouts" ? "text-accent" : ""}/>
      <FontAwesomeIcon icon={faHeartPulse} size="xl"onClick={() => setDashboardState("health")} className={dashboardState === "health" ? "text-accent" : ""}/>
      <FontAwesomeIcon icon={faChartSimple} size="xl"onClick={() => setDashboardState("analytics")} className={dashboardState === "analytics" ? "text-accent" : ""} />
      <FontAwesomeIcon icon={faGear} size="xl" onClick={() => setDashboardState("settings")}  className={dashboardState === "settings" ? "text-accent" : ""}/>
    </nav>
    </div>
  )
}

export default Dashboard
