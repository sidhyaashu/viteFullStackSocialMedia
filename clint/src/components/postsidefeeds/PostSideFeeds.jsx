import './PostSideFeeds.scss'
import { PostData } from '../../data/PostData'
import Post from './post/Post'

const PostSideFeeds = () => {
  return (
    <div className='postsidefeeds'>
      {PostData.map((post,id)=>{
        return <Post data={post} key={id}/>
      })}
    </div>
  )
}

export default PostSideFeeds

