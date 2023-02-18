import './Profile.scss'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import ProfileCard from '../../components/profilecard/ProfileCard'
import PostSideShare from '../../components/postsideshare/PostSideShare'
import PostSideFeeds from '../../components/postsidefeeds/PostSideFeeds'
import Rightside from '../../components/rightside/Rightside'
const Profile = () => {     
  return (
    <div className='profile'>
      <div className="profile_left">
      <ProfileLeft/>
      </div>
      <div className="profile_center">
        <div>
        <ProfileCard/>
        </div>
        <PostSideShare/>
        <PostSideFeeds/>
      </div>
      <div className="profile_right">
        <Rightside/>
      </div>
    </div>
  )
}

export default Profile
