import Fade from '@mui/material/Fade';
import styles from './Layout.module.css';

type Props = {
  component: JSX.Element;
  title?: string;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div className={styles.container} data-testid="container">
        {props.title && (
          <div className="col-md-12" data-testid="title">
            <h1>{props.title}</h1>
          </div>
        )}
        <div className="col-md-12" data-testid="content">
          {props.component}
        </div>
      </div>
    </Fade>
  );
}
