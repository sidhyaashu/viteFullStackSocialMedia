import './ProfileLeft.scss'
import Logosearch from '../../components/logosearch/Logosearch'
import FollowersCard from '../../components/followerscard/FollowersCard'
import InfoCard from '../infocard/InfoCard'


const ProfileLeft = () => {
  return (
    <div className='profileleft'>
      <Logosearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
