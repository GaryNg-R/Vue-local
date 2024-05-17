function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      montsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.montsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
  attackPlayer() {
    const attackValue = getRandomValue(8, 15);
    this.playerHealth -= attackValue;
  },
});

app.mount("#game");
