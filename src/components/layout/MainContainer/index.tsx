import { MainContainerProps } from './MainContainer';
import Image from 'next/image';

import styles from './MainContainer.module.css';

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/images/main-background.png"
          alt="Fondo de estrellas"
          fill
          priority
          quality={90} 
          style={{ objectFit: 'cover', objectPosition: 'left bottom' }}
        />
      </div>
			<div className={styles.logoWrapper}>
        <Image
          src="/images/logo.png"
          alt="Rick & Morty"
          width={332}
					height={95}
          priority
          quality={90} 
          style={{ objectFit: 'contain'}}
        />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;