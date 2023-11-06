import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import styles from './TickerTape.module.css';

export default function TickerTape() {
  const tickerWords = [
    'open to work',
    'open to work',
    'open to work',
    'open to work',
    'open to work',
    'open to work',
  ];

  return (
    <div className={styles['ticker-tape']}>
      <div className={styles.ticker}>
        {tickerWords.map((word: string) => (
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
