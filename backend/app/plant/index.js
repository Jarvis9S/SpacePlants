const TRAITS = require("../../data/traits.json");

const DEFAULT_PROPERTIES = {
  plantId: undefined,
  nickname: "unnamed",
  travelId: undefined,
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
  constructor({ plantId, collectdate, nickname, traits, travelId } = {}) {
    this.plantId = plantId || DEFAULT_PROPERTIES.plantId;
    this.collectdate = collectdate || DEFAULT_PROPERTIES.collectdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.travelId = travelId || DEFAULT_PROPERTIES.travelId;
  }
}

module.exports = Plant;
