// pages/404.js
import Head from 'next/head'
import {Footer, Navbar} from "../components";
import styles from '../style';
import Link from 'next/link';
export default function Custom404() {
    return (
    <div>
    <main >
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        </div>
     </main>   
     <div className='w-full h-[60vh]  flex justify-center items-center'>
        <div>

     <h1 className='text-4xl'>404 - Page Not Found</h1>
    <Link href="/">
    <a><button className='bg-black text-white p-3 ml-28 mt-10'>Go Back</button></a>
    </Link> 
     </div>
        </div>
          
    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
  );
  }