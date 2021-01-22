import Head from 'next/head'
import Work from 'components/work/Work'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, fa } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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

        <div className="my-4">
          <a className="p-1" href="https://github.com/cposado" target="blank" rel="noopener">
            <FontAwesomeIcon icon={faGithub} className="icon-bars" size="lg"/>
          </a>
          <a className="p-1" href="https://www.linkedin.com/public-profile/in/claudio-posado-00491b4/" target="blank" rel="noopener">
            <FontAwesomeIcon icon={faLinkedin} className="icon-bars" size="lg"/>
          </a>

          <a className="p-1" href="mailto:claudioposado@gmail.com" target="blank" rel="noopener">
            <FontAwesomeIcon icon={faEnvelope} className="icon-bars" size="lg"/>
          </a>

        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
        { data && data.map(work => (
          <Work data={ work } key={work.name}/>
        )) }
      </div>
    </section>
  )
}
