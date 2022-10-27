import { DEFAULT_LANGUAGE } from '../helpers/locale/locale';

export default function useDateTimeFormat(timestamp: string) {
  const date = new Date(timestamp);
  const language = DEFAULT_LANGUAGE;
  console.log('date', date);
  console.log('invalid date', timestamp);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  new Intl.DateTimeFormat(language, options).format(date);
}
