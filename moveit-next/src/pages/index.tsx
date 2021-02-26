import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import {Profile} from '../components/Profile'

import styles from '../styles/Home.module.css'
 
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"/>
      </Head>
          <ExperienceBar />
          <section>
            <div>
              <Profile />
            </div>
            <div>

            </div>
          </section>
    </div>
  )
}