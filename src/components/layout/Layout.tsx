import Fade from '@mui/material/Fade';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

import styles from './Layout.module.css';

type Props = {
  title: string;
  animatedTitle: boolean;
  leftComponent: JSX.Element;
  rightComponent?: JSX.Element;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div className={styles.container}>
        <LeftContainer
          title={props.title}
          content={props.leftComponent}
          animated={props.animatedTitle}
        />
        <RightContainer content={props.rightComponent} />
      </div>
    </Fade>
  );
}
