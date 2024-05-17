const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      montsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.montsterHealth -= attackValue;
    },
  },
  attackPlayer() {
    const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
    this.playerHealth -= attackValue;
  },
});

app.mount("#game");
