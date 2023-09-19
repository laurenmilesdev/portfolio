import Image from 'next/image';
import React from 'react';

import img from '../../../../../public/img/home/headshot.png';
import styles from './Home.module.css';

type Props = {
  subtitle: string;
  description: string;
  useWindowsTheme: boolean;
};

export const subtitleDivId = 'home-subtitle';
export const descriptionDivId = 'home-description';
export const imageId = 'logo';
export const altText = 'Image of Lauren within text that says Lauren Miles';

export default function Home({ subtitle, description, useWindowsTheme }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div
        className={`${
          useWindowsTheme ? styles['windows-theme-subtitle'] : styles.subtitle
        } col-md-12`}
        id={subtitleDivId}
      >
        {subtitle}
      </div>

      <div className={`${styles.description} col-md-12`} id={descriptionDivId}>
        {description}
      </div>

      <div className="col-md-12">
        <Image
          src={img}
          alt={altText}
          className={useWindowsTheme ? styles['windows-theme-logo'] : styles.logo}
          id={imageId}
          priority
        />
      </div>
    </div>
  );
}
