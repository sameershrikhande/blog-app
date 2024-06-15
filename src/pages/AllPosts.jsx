import {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
// import PostCard from '../components/PostCard'

function AllPosts() {
  const[posts, setPosts] = useState([])
  
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  // appwriteService.getPosts([]).then((posts) => {
  //   if (posts) {
  //     setPosts(posts.documents)
  //   }
  // })

  return (
    <div className='w-full py-8'>
      {/* <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container> */}

<Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>

    </div>
  )
}

export default AllPosts