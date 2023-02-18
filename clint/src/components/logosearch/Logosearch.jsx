import './Logosearch.scss'
import SearchIcon from '@mui/icons-material/Search';

const Logosearch = () => {
  return (
    <div className='logosearch'>
        <span>Lamasocial</span>
        <div className="search">
            <input type="text" placeholder='#Explore' />
            <div className="s_icon">
                <SearchIcon/>
            </div>
        </div>
      
    </div>
  )
}

export default Logosearch
