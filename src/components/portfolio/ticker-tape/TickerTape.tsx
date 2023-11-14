import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import styles from './TickerTape.module.css';

type Props = {
  text: string[];
};

export const tickerTapeDivId = 'ticker-tape';

export default function TickerTape({ text }: Props) {
  return (
    <div className={styles['ticker-tape']} id={tickerTapeDivId}>
      <div className={styles.ticker}>
        {text.map((word: string, index: number) => (
          <div className={styles['ticker-item']} key={index}>
            {word} <SentimentSatisfiedAltIcon fontSize="small" sx={{ marginBottom: '.25rem' }} />{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
