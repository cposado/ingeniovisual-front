import Head from 'next/head'
import Work from 'components/work/Work'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, fa } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Home = ({ works }) => {
  // if (error) {
  //   return <div>An error occured: {error.message}</div>;
  // }
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
          <a className="p-1" href="https://www.linkedin.com/in/claudio-posado" target="blank" rel="noopener">
            <FontAwesomeIcon icon={faLinkedin} className="icon-bars" size="lg"/>
          </a>

          <a className="p-1" href="mailto:claudioposado@gmail.com" target="blank" rel="noopener">
            <FontAwesomeIcon icon={faEnvelope} className="icon-bars" size="lg"/>
          </a>
        </div>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
        { works && works.map(work => (
          <Work data={ work } key={work.name}/>
        )) }
      </div>
    </section>
  )
}


// Home.getInitialProps = async ctx => {
//   try {
//     const res = await axios.get(`${process.env.API_URL}/works`);
//     const works = res.data;
//     return { works };
//   } catch (error) {
//     return { error };
//   }
// };

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.API_URL}/works`);
  const works = data;
  return { props: { works } }
}

export default Home
