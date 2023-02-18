import './Home.scss'
import Postside from '../../components/postside/Postside'
import Profileside from '../../components/profileside/Profileside'
import Rightside from '../../components/rightside/Rightside'

const Home = () => {
  return (
    <div className='home'>
      <Profileside/>
      <Postside/>
      <Rightside/>
    </div>
  )
}

export default Home
