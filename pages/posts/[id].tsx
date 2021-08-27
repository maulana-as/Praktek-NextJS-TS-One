import Layout from "../../components/layout"
import styles from './PostIndex.module.css'

async function getAllPostIds() {
  const url = "http://localhost:3001/posts"
  const res = await fetch(url)
  const AllPosts = await res.json()
  const allPostId = AllPosts.map((post: any) => {
    return { params: { id: post.alias } }
  })
  console.log(allPostId, '<<allPostId')
  return allPostId
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

async function getPostData(id: String) {
  const apiUrl = ` http://localhost:3001/posts?alias=${id}`
  const res = await fetch(apiUrl)
  const postData = await res.json()
  // console.log(postData, '<<postData');

  return postData
}

type Params = {
  [param: string]: any;
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData: postData[0]
    }
  }
}

type PostData = {
  [postData: string]: any;
}

function Post({ postData }: PostData) {
  return (
    <Layout>
      <div className={styles.card}>
        <h1>{postData.title}</h1>
        <p>{postData.excerpt}</p>
      </div>
    </Layout>
  )
}

export default Post