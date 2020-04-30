const getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
  }

export default getRandomInt;