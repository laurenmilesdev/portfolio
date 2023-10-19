import styles from './Clock.module.css';

type Props = {
  currentTime: Date;
};

export const clockId = 'clock';

export function getCurrentTimeString(currentDate: Date) {
  const minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();
  let minutesString = '';
  let ampm = 'PM';

  if (hours > 12) hours -= 12;
  else ampm = 'AM';

  if (minutes < 10) minutesString = `0${minutes}`;
  else minutesString = `${minutes}`;

  return `${hours}:${minutesString} ${ampm}`;
}

export default function Clock({ currentTime }: Props) {
  return (
    <div className={`${styles.clock} col-md-12`} id={clockId}>
      {getCurrentTimeString(currentTime)}
    </div>
  );
}
