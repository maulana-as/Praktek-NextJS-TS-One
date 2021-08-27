import Layout from "../components/layout"
import styles from './HomePost.module.css'
import Link from "next/link"

export async function getStaticProps() {
  const url = "http://localhost:3001/posts"
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {
      externalPostData: data
    }
  }
}

type externalData = (string | any)[]

interface IData {
  externalPostData: externalData
}

const Posts: React.FC<IData> = ({ externalPostData }) => {
  return (
    <Layout>
      <section className={styles.latestPost}>
        <h2>All Posts</h2>
        {
          // JSON.stringify(externalPostData)
          externalPostData.map((data, index) => (
            <div className={styles.latestPost} key={index}>
              <Link href={data.link}>
                <h3>{data.title}</h3>
              </Link>
              <p>{data.excerpt}</p>
            </div>
          ))
        }
      </section>

    </Layout>
  )
}

export default Posts