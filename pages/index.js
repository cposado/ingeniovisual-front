import Head from 'next/head'
import Work from 'components/work/Work'

import DataWorks from 'data/works.json'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const data = DataWorks;
  return (
    <section>
      <Head>
        <title>Claudio Posado - Frontend / Backend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center py-16 ">
        <h1>
          Claudio Posado
        </h1>

        <h3>
          Senior Fullstack Developer
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
        { data && data.map(work => (
          <Work data={ work } key={work.name}/>
        )) }
      </div>
    </section>
  )
}
