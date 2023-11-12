import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import styles from './TickerTape.module.css';

type Props = {
  text: string[];
};

export default function TickerTape({ text }: Props) {
  return (
    <div className={styles['ticker-tape']}>
      <div className={styles.ticker}>
        {text.map((word: string) => (
          <>
            <div className={styles['ticker-item']}>
              {word.toUpperCase()}{' '}
              <SentimentSatisfiedAltIcon fontSize="small" sx={{ marginBottom: '0.07rem' }} />
            </div>{' '}
          </>
        ))}
      </div>
    </div>
  );
}
