const TRAITS = require("../data/traits.json");

const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  get collectdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });

    return traits;
  },
};

class Plant {
  constructor({ collectdate, nickname, traits } = {}) {
    this.collectdate = collectdate || DEFAULT_PROPERTIES.collectdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Plant;
