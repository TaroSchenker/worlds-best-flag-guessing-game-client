export const randomNumberGenerator = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

export const getFortyCountriesforQuiz = (countryData) => {
  const fortyCountriesArray = [];
  for (let i = 0; i < 40; i++) {
    const randomNumber = randomNumberGenerator(250);
    const isNumberUnique = fortyCountriesArray.find((e) => e === randomNumber);
    if (!isNumberUnique) {
      fortyCountriesArray.push({name: countryData[randomNumber].name.common,flagUrl: countryData[randomNumber].flags.svg} );
    } else {
      i--;
    }
  }

  return fortyCountriesArray;
};

export const set2dQuizArray = (countryData) => {
  const getFortyCountries = getFortyCountriesforQuiz(countryData);
  const questionArray = [];
  const chunkSize = 4;
  for (let i = 0; i < getFortyCountries.length; i += chunkSize) {
    const chunk = getFortyCountries.slice(i, i + chunkSize);
    chunk.push(randomNumberGenerator(4));
    questionArray.push(chunk);
  }
  return questionArray;
};
