import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Toni Suwendi'
export const siteTitle = 'Blog Toni Suwendi'

export default function Layout({ children, home, descriptionSite, siteTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content={descriptionSite} />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={siteTitle}/>
        <meta property="og:description" content={descriptionSite} />
        <meta property="og:url" content="https://tonisu-blog.vercel.app" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:secure_url" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={descriptionSite} />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}