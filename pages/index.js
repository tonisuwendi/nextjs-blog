import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const description = "Blog Toni Suwendi using NextJS"

export default function Home ({ allPostsData }) {
  return (
    <Layout home descriptionSite={description}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Toni. I'm a software engineer. You can contact me on <a target="_blank" href="https://twitter.com/tonisuwen">Twitter</a> or <a target="_blank" href="https://instagram.com/tonisuwen">Instagram</a></p>
        <p>
          By the way, i'm the owner of Buntomart. For more about buntomart, you can visit {' '}
          <a target="_blank" href="https://buntomart.com">buntomart.com</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}