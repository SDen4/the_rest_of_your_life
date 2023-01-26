export type constType = { rus: string; eng: string };

export type constArrType = { rus: string[]; eng: string[] };

export type saveResultType = { valueYears: number; statYear: number };

export type saveBirthDateType = { birthDate: Date; userYears: number };

export type translatedItemType = {
  data: { translatedText: string };
  status: 'success' | 'error';
};
