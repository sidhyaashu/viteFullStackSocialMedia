import './Profilecard.scss'
import img1 from '../../images/img1.jpg'

const ProfileCard = () => {

    const profilePage = true ;

  return (
    <div className='profilecard'>
        
        <div className="profileImages">
            <img src={"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"} alt="" />
            <img src={img1} alt="" />
        </div>

        <div className="profileName">
            <span>Asutosh sidhya</span>
            <span>Seniour Mobile Android devloper</span>
        </div>

        <div className="followstatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6565</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>
                {profilePage && (
                <>
                <div className="vl"></div>
                <div className="follow">
                    <span>3</span>
                    <span>Post</span>
                </div>
                </>
                )}

            </div>
            <hr />
        </div>

        {profilePage? " ":<span>My Profile</span>}

      
    </div>
    
  )
}

export default ProfileCard
