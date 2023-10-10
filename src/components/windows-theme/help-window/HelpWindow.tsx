import { Dispatch, SetStateAction } from 'react';
import HelpWindowHeader from './help-window-header/HelpWindowHeader';
import HelpWindowContent from './help-window-content/HelpWindowContent';
import PageModel from '../../../models/component-helpers/page';

import styles from './HelpWindow.module.css';

type Props = {
  helpTabValue: number;
  setHelpTabValue: Dispatch<SetStateAction<number>>;
};

export default function HelpWindow({ helpTabValue, setHelpTabValue }: Props) {
  const helpTabs: PageModel[] = [
    new PageModel(
      'Why are the Windows features limited?',
      tabContent(
        'Why are the Windows features limited?',
        <>
          Since most of this Windows theme was created using CSS, unfortunately with that comes
          limitations. CSS is simply the styling applied to a website or application, it does not
          include the user interactivity. Since I used JavaScript for some of the functionality,
          enhancements can be made in the future to improve the UI experience.
        </>
      )
    ),
    new PageModel(
      'Why create a Windows theme for my portfolio?',
      tabContent(
        'Why create a Windows theme for my portfolio?',
        <>
          Nostalgia. Technology has rapidly advanced in the past 50 years and I think sometimes we
          miss simpler times. This theme reminds me of when I would have to logoff the internet to
          make a phone call on the landline.
        </>
      )
    ),
    new PageModel(
      'How did I create this theme?',
      tabContent(
        'How did I create this theme?',
        <>
          As a typical developer, I wanted a jumping off point and some basic CSS already laid out
          so it would take less time to create the foundation. I stumbled upon a very helpful
          project{' '}
          <a href="https://codepen.io/smpnjn/pen/ExLbvdJ?editors=1100" target="_blank">
            CSS Only Windows 98
          </a>{' '}
          (got to give credit where credit is due). This project helped me layout the general
          styling used for an old Windows OS. I took some of the CSS styling straight from that
          project, but updated a lot of it to be more concise while also adding in responsiveness.
          Instead of using CSS for any functionality, I created JavaScript code for it. The
          functionality within the CSS Only Windows 98 project was more limited than I wanted.
        </>
      )
    ),
  ];

  return (
    <div className={styles['help-window']}>
      <HelpWindowHeader />

      <HelpWindowContent
        helpTabs={helpTabs}
        helpTabValue={helpTabValue}
        setHelpTabValue={setHelpTabValue}
      />
    </div>
  );
}

export function tabContent(title: string, description: JSX.Element): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
