import Fade from '@mui/material/Fade';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

import ImageType from '@/types/component-helpers/image';

import styles from './Layout.module.css';

type Props = {
  title: string;
  content: JSX.Element;
  animatedTitle: boolean;
  includeEmail: boolean;
  emailSubtitle: string;
  emailDescription: string;
  image?: ImageType;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div className={`${styles.container} col-md-12`}>
        <LeftContainer title={props.title} content={props.content} animated={props.animatedTitle} />
        <RightContainer
          includeEmail={props.includeEmail}
          emailSubtitle={props.emailSubtitle}
          emailDescription={props.emailDescription}
          image={props.image}
        />
      </div>
    </Fade>
  );
}
