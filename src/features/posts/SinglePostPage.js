import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlider'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  return (
    <section>
      {post ? (
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
        </article>
      ) : (
        <section>
          <h2>Post not found!</h2>
        </section>
      )}
    </section>
  )
}
