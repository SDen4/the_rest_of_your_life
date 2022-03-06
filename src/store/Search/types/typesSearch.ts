export type saveResultType = {
  valueYears: number;
  statYear: number;
};

export type saveBirthDateType = {
  birthDate: Date;
  userYears: number;
};

export type translatedItemType = {
  data: { translatedText: string };
  status: 'success' | 'error';
};

export type getBirthDateSagaType = {
  type: 'main/BIRTH_DATE';
  payload: Date;
};
