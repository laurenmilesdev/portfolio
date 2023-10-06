import Image from 'next/image';
import { Tab, Tabs } from '@mui/material';

import styles from './HelpWindowTabs.module.css';

type Props = {
  helpTabTitles: string[];
  tabValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function HelpWindowTabs({ helpTabTitles, tabValue, handleChange }: Props) {
  const helpImageLogo = (
    <Image
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACAAIAAAACAgICAgAD//wDAwMD///9lJw0+AAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBhgXChR06RP7AAAAvUlEQVQoz3XRUQ6DIAyAYeYNKOwd8QTLEn1eMg+wxF7AB7zBvP7aUlBM5hufP5QEY/58N7iAs7ENHrYVZ20jHDQiwUk4mPF1CAV3RKwNB7i88UMAGnj6LRDKCE9GAKGOmOWMIZQ70JqmwBg08Ljw1CGFcknPaxgJIMoOXlPA8GSRkXZMKRpILHM+Ia1gYPtKIyeknrZsu0oOGLJoYKybsmhgul5Fg0M0qLKXoEoNihyByto8Jsk5ELm+dqfBDwcgN9nfkQsOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjEwOjIwLTA0OjAw2N+qCAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzoxMDoyMC0wNDowMKmCErQAAAAASUVORK5CYII="
      alt="Help book image"
      width={18}
      height={18}
      className={styles['help-book-image-logo']}
    />
  );

  return (
    <Tabs
      value={tabValue}
      onChange={handleChange}
      className="help-tabs"
      orientation="vertical"
      centered
    >
      {helpTabTitles.map((title: string, index: number) => {
        const labelComponent = (
          <div className="col-md-12">
            {helpImageLogo}
            {title}
          </div>
        );

        return (
          <Tab
            className={`${styles['help-tab']} help-tab`}
            label={labelComponent}
            key={index}
            {...a11yProps(index)}
            id={`help-tab-${index}`}
          />
        );
      })}
    </Tabs>
  );
}

function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}
