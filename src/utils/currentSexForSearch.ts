/**
 * Function returns correct sex (Male/Female/Both sexes) according income argument
 *
 * @param {string} currentSex
 * @return {*}  {string}
 */
const currentSexForSearch = (currentSex: string): string => {
  if (
    currentSex.toLocaleLowerCase() === 'male' ||
    currentSex.toLocaleLowerCase() === 'муж'
  ) {
    return 'Male';
  } else if (
    currentSex.toLocaleLowerCase() === 'female' ||
    currentSex.toLocaleLowerCase() === 'жен'
  ) {
    return 'Female';
  }
  return 'Both sexes';
};

export default currentSexForSearch;
