import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> 
          10 Things That Require Zero Talent
        </p> 
        <p> 
          • Being On Time<br></br>• Making An Effort<br></br>• Being High Energy<br></br>• Having A Positive Attitude<br></br>• Being Passionate<br></br>• Using Good Body Language<br></br>• Being Coachable<br></br>• Doing A Little Extra<br></br>• Being Prepared<br></br>• Having A Strong Work Ethic
        </p>
        
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}