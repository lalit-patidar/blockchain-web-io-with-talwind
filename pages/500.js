// pages/404.js
import Head from 'next/head'
import {Footer, Navbar} from "../components";
import styles from '../style';

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
     <h1 className='text-4xl'>500 - Server-side error occurred</h1>
     </div>
          
    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
  );
  }