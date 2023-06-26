import Fade from '@mui/material/Fade';
import styles from './Layout.module.css';

type Props = {
  component: JSX.Element;
  title?: string;
};

export default function Layout({ component, title }: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div className={styles.container}>
        {title && (
          <div className="col-md-12 pb-3" id="title">
            <h1>{title.toUpperCase()}</h1>
          </div>
        )}
        <div className="col-md-12" id="content">
          {component}
        </div>
      </div>
    </Fade>
  );
}
