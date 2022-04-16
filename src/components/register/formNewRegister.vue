<template>
  <div>
    
  </div>
</template>

<script>
export default {
  props: { save: { type: Boolean } },
  data() {
    return {
      contatos: {
        nomeContato: "",
        emailContato: "",
        telefoneContato: "",
      },
      dataNewRegister: {
        name: "",
        nameFantasy: "",
        cpfCnpj: "",
        contatoAdicionados: [],
      },
      teste: "1",
      optionsTypeClient: [],
    };
  },

  created() {},

  watch: {
    save(newValue, oldValue) {
      if (newValue) {
        let emptyField = [];
        for (var [key, value] of Object.entries(this.dataNewRegister)) {
          if (
            key != "contatoAdicionados" &&
            key != "nameFantasy" &&
            value == ""
          ) {
            emptyField.push(key);
          }
        }

        if (emptyField.length != 0) {
          // PopUp("error", "Deu ruim", "teste");
          alert("Preencha os campos");
        } else {
          if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"));
            user.push(this.dataNewRegister);
            localStorage.setItem("user", JSON.stringify(user));

            this.resetForm();
          } else {
            let user = [this.dataNewRegister];
            localStorage.setItem("user", JSON.stringify(user));
            this.resetForm();
          }
        }

        return oldValue;
      }
    },
  },

  methods: {
    

    // Limpando formulario
    resetForm() {
      for (const key in this.dataNewRegister) {
        if (key != "contatoAdicionados") {
          this.dataNewRegister[key] = "";
        } else {
          this.dataNewRegister[key] = [];
        }
      }
    },
  },
};
</script>
<style lang="">
</style>