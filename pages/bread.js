import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Bread({ posts }) {
  return (
    <div>
      <Head>
        <title>Bread</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
 
  const files = fs.readdirSync(path.join('posts/bread'))

  
  const posts = files.map((filename) => {
   
    const slug = filename.replace('.md', '')

    
    const markdownWithMeta = fs.readFileSync(
      path.join('posts/bread', filename),
      'utf-8'
    )

    const { data: frontmatter, content  } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
      content ,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
