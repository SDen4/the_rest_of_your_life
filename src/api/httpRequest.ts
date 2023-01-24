import { API } from './api';

export async function httpRequest(countryName: string) {
  const params = new URLSearchParams();
  params.append('source_language', 'en');
  params.append('target_language', 'ru');
  params.append('text', `In ${countryName}`);

  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      'x-rapidapi-key': '98974f94fdmshf0e666910f99f56p166f4ejsn57d787efb8c9'
    }
  };

  const response = await API.post('translate', params, config).then(
    (res) => res.data
  );
  return response;
}
