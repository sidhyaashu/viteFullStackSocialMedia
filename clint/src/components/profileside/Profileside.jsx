import FollowersCard from '../followerscard/FollowersCard'
import Logosearch from '../logosearch/Logosearch'
import ProfileCard from '../profilecard/ProfileCard'
import './Profileside.scss'

const Profileside = () => {
  return (
    <div className='profileside'>
      <Logosearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default Profileside
