const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      mail: [],
    };
  },

  methods: {
    generaMail() {
      this.mail = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((gotten) => {
            this.mail.push(gotten.data.response);
          });
      }
    },
  },

  mounted() {
    this.generaMail();
  },
}).mount("#app");
