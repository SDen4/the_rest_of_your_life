export type constType = { [key: string]: string };
export type constArrType = { [key: string]: string[] };

export const formNames: constType = {
  rus: 'Страна',
  eng: 'Country'
};

export const formTitle: constType = {
  rus: 'Пожалуйста, заполни поля',
  eng: 'Please, fill the form'
};

export const formSex: constType = {
  rus: 'Пол',
  eng: 'Sex'
};

export const formSexList: constArrType = {
  rus: ['Муж', 'Жен', 'Другое'],
  eng: ['Male', 'Female', 'Other']
};

export const formButton: constType = {
  rus: 'Рассчитать',
  eng: 'Calculate'
};

export const formDate: constType = {
  rus: 'Дата рождения',
  eng: 'Birth date'
};
