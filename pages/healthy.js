import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Carnivore({ posts }) {
  return (
    <div>
      <Head>
        <title>Healthy</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
 
  const files = fs.readdirSync(path.join('posts/healthy'))

  
  const posts = files.map((filename) => {
   
    const slug = filename.replace('.md', '')

    
    const markdownWithMeta = fs.readFileSync(
      path.join('posts/healthy', filename),
      'utf-8'
    )

    const { data: frontmatter, content  } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
      content,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
