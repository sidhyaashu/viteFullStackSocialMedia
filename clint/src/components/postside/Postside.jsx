import PostSideFeeds from '../postsidefeeds/PostSideFeeds'
import PostSideShare from '../postsideshare/PostSideShare'
import './Postside.scss'

const Postside = () => {
  return (
    <div className='postside'>
      <PostSideShare/>
      <PostSideFeeds/>
    </div>
  )
}

export default Postside
