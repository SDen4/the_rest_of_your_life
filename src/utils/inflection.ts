/**
 * Принимает число и выбранный язык
 * Возвращает строку, включающую число, округленное до десятых, и "год/лет" в правильном склонении, либо англ версию
 *
 * @param {number} numInn
 * @param {string} lang
 * @return {*}  {string}
 */
const inflection = (numInn: number, lang: string): string => {
  const num = Math.floor(numInn);

  if (lang === 'rus') {
    if (num !== 11 && num !== 111 && (num === 1 || num % 10 === 1)) {
      return `${numInn.toFixed(1)} год`;
    } else if (
      (num > 1 && num < 5) ||
      (num > 21 && (num % 10 === 2 || num % 10 === 3 || num % 10 === 4))
    ) {
      return `${numInn.toFixed(1)} года`;
    } else {
      return `${numInn.toFixed(1)} лет`;
    }
  } else {
    return `${numInn.toFixed(1)} years`;
  }
};

export default inflection;
