const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  get collectdate() {
    return new Date();
  },
};

class Plant {
  constructor({ collectdate, nickname } = {}) {
    this.collectdate = collectdate || DEFAULT_PROPERTIES.collectdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Plant;
