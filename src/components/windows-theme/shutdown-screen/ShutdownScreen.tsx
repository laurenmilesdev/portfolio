import Image from 'next/image';

import img from '../../../../public/img/windows/shutdown.jpg';
import styles from './ShutdownScreen.module.css';

export const shutdownScreenDivId = 'shutdown-screen-div';
export const shutdownScreenAudioId = 'shutdown-audio';

export default function ShutdownScreen() {
  return (
    <div className={styles['shutdown-div']} id={shutdownScreenDivId}>
      <audio id={shutdownScreenAudioId}>
        <source src="./audio/windows-98-shutdown-sound.mp3" />
      </audio>
      <Image src={img} alt="Windows 98 shutdown screen" className={styles['shutdown-img']} />
    </div>
  );
}
