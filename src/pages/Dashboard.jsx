import { useSelector } from "react-redux"
import { utilService } from "../services/util.service"
import { DashboardMiniUser } from '../cmps/Dashboard/DashboardMiniUser'
import { DashboardLevelOverview } from '../cmps/Dashboard/DashboardLevelOverview'
import { DashboardOrderList } from '../cmps/Dashboard/DashboardOrderList.jsx'

export function Dashboard() {
    const user = useSelector(storeState => storeState.userModule.user)
    
    return (
        <section className="dashboard">
            <div className="user-details">
                <div className="user-overview">
                    <DashboardMiniUser user={user}/>
                    <DashboardLevelOverview user={user}/>                   
                    <div className="monthly-earnings">
                        <p>Earned in {utilService.getCurrDate('month')}</p>
                        <p>$12041</p>
                    </div>
                </div>
            </div>
            <DashboardOrderList user={user}/>
        </section>
    )
}