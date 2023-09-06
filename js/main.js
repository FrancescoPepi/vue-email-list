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
