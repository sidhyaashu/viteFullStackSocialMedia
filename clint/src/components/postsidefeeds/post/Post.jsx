import './Post.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import img1 from '../../../images/img1.jpg'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Post = ({data}) => {
  return (
    <div className='post'>
        <div className="personInfo">
            <div className='div-1'>
            <img src={img1} alt="" />
            <span>Asutosh sidhya</span>
            </div>
            <div className="div-2">
              <MoreVertOutlinedIcon/>
            </div>
        </div>
      <img src={data.img} alt="" />
      <div className="postReaction">
        <div className="reaction">{data.liked?<FavoriteBorderIcon/>:<FavoriteIcon style={{color:"orange"}}/>}</div>
        <div className="reaction"><InsertCommentOutlinedIcon/></div>
        <div className="reaction"><SendOutlinedIcon/></div>
      </div>
      <div className="descinfo">
        <span><b>{data.likes}</b> likes</span>
        <abbr title={data.desc}>{data.desc}</abbr>
      </div>

    </div>
  )
}

export default Post
