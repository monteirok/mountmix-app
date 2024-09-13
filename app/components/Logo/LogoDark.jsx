import Image from 'next/image';
import styles from "./Logo.module.css";

export default function LogoDark() {
  return (
    <>
      <div className='w-13 md:w-fit'>
        <Image className={styles['logo']} src='/logos/logo-dark.png' width={2901} height={615} alt='Mountain Mixology logo dark.' />
      </div>
    </>
  );
}
