import './TrendCard.scss'
import { TrendData } from '../../../data/Trend.js'
const TrendCard = () => {
  return (
    <div className='trendcard'>
        <h3>Trending</h3>
        {TrendData.map((trend , id)=>{
            return(
                <div className="trend" key={id}>
                    <span>#{trend.name}</span>
                    <span>{trend.share} K Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
