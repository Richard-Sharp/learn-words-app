// const url = "https://reactmarathon-api.netlify.app/api/translate";
// https://reactmarathon-api.netlify.app/api/translate?text=привет&lang=ru-en

import {API_KEY, baseURL} from "./baseURL";


const getTranslateWord = async (text, lang = 'en-ru') => {
	const response = await fetch(baseURL +`api/translate?text=${text}&lang=${lang}`, {
		headers: {
			'Authorization': API_KEY
		}
	});
	const  bodyResponse = await response.json();
	return bodyResponse;
}

export default getTranslateWord;