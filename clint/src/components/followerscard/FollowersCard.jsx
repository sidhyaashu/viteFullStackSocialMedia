import './FollowersCard.scss'
import { Followers } from '../../data/FollowersDara'

const FollowersCard = () => {
  return (
    <div className='followerscard'>
      <h3>Who is following</h3>
      {Followers.map((follower,id)=>{
        return(
            <div className="followers" key={id}>
                <div>
                    <img src={follower.img} alt="" />
                    <div className="followername">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                </div>
                <button>
                    follow
                </button>
            </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
