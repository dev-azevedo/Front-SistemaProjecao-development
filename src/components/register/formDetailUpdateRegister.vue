<template>
  <div>
    <div class="px-4">
      <b-form-group label="Nome:" label-for="name-datail-person">
        <b-form-input
          id="name-datail-person"
          v-model="dataDetail[0].nome"
          trim
          disabled
        ></b-form-input>
      </b-form-group>

      <hr />
      <b-form-group
        label="Nome Fantasia:"
        label-for="name-fantasy-datail-person"
      >
        <b-form-input
          id="name-fantasy-datail-person"
          v-model="dataDetail[0].nomeF"
          trim
          disabled
        ></b-form-input>
      </b-form-group>

      <hr />
      <b-form-group label="CPF/CNPJ:" label-for="cpfCnpj-datail-person">
        <b-form-input
          id="cpfCnpj-datail-person"
          v-model="dataDetail[0].cpfCnpj"
          trim
          disabled
        ></b-form-input>
      </b-form-group>

      <hr />
      <ul class="list-group">
        <h4><b-icon-telephone-fill></b-icon-telephone-fill> Contatos</h4>
        <li
          class="list-group-item"
          v-for="(item, index) in dataDetail[0].contatosAdicionados"
          :key="index"
        >
          <b-button
            :id="`removeContactUpdate-${index}`"
            variant="danger"
            class="float-right mb-2"
            @click="removeContactUpdate($event)"
            v-show="editDataPerson"
            >Remover</b-button
          >
          <b-form-group
            label="Nome do contato:"
            label-for="name-contact-datail-person"
          >
            <b-form-input
              id="name-contact-datail-person"
              v-model="dataDetail[0].contatosAdicionados[index].nomeContato"
              trim
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email do contato:"
            label-for="email-contact-datail-person"
          >
            <b-form-input
              id="email-contact-datail-person"
              v-model="dataDetail[0].contatosAdicionados[index].emailContato"
              trim
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Telefone do contato:"
            label-for="phone-contact-datail-person"
          >
            <b-form-input
              id="phone-contact-datail-person"
              v-model="dataDetail[0].contatosAdicionados[index].telefoneContato"
              trim
              disabled
            ></b-form-input>
          </b-form-group>
        </li>
      </ul>

      <div v-show="editDataPerson" class="my-2">
        <span
          @click="validate.iconPlusContact = !validate.iconPlusContact"
          v-b-toggle.collapse-2
          class="m-1"
          ><h4 class="d-inline">+ Contato</h4>
          <b-icon-caret-down-fill
            v-if="validate.iconPlusContact"
          ></b-icon-caret-down-fill>
          <b-icon-caret-up-fill v-else></b-icon-caret-up-fill>
        </span>

        <b-collapse id="collapse-2">
          <div>
            <h5>Adicionar Contato</h5>
            <b-form-group
              id="nome-contato"
              label="Nome do contato:"
              label-for="input-nome-contato"
            >
              <b-form-input
                id="input-nome-contato"
                v-model="plusContact.nomeContato"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="email-contato"
              label="E-mail do Contato:"
              label-for="input-email-contato"
            >
              <b-form-input
                id="input-email-contato"
                v-model="plusContact.emailContato"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="telefone-contato"
              label="Telefone/Celular do Contato:"
              label-for="input-telefone-contato"
            >
              <b-form-input
                id="input-telefone-contato"
                v-model="plusContact.telefoneContato"
                trim
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" class="mt-2" @click="novoContato"
              ><b-icon-telephone-plus-fill></b-icon-telephone-plus-fill>
              Adicionar contato</b-button
            >
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataPerson: { type: Object },
    editDataPerson: { type: Boolean },
    saveUpdate: { type: Boolean },
  },
  data() {
    return {
      dataDetail: [],
      validate: {
        validateUpdate: false,
        iconPlusContact: true,
      },
      plusContact: {
        nomeContato: "",
        emailContato: "",
        telefoneContato: "",
      },
    };
  },
  created() {
    this.preSetPerson();
  },

  watch: {
    editDataPerson(newValue) {
      if (newValue) {
        this.updateRegister();
      } else {
        this.cancelUpdateRegister();
      }
    },

    saveUpdate(newValue) {
      if (newValue) {
        console.log(this.dataDetail[0]);
        let user = JSON.parse(localStorage.getItem("user"));
        console.log("User", user);
      }
    },
  },

  methods: {
    preSetPerson() {
      this.dataDetail.length = 0;
      this.dataDetail.push(JSON.parse(JSON.stringify(this.dataPerson)));
      console.log("Data: ", this.dataDetail);
      return this.dataDetail;
    },

    updateRegister() {
      let allInput = document.querySelectorAll("input");
      allInput.forEach((input) => {
        input.removeAttribute("disabled");
      });
    },

    novoContato() {
      if (
        this.plusContact.nomeContato != "" &&
        this.plusContact.emailContato != "" &&
        this.plusContact.telefoneContato != ""
      ) {
        let dadosContato = {
          nomeContato: this.plusContact.nomeContato,
          emailContato: this.plusContact.emailContato,
          telefoneContato: this.plusContact.telefoneContato,
        };

        this.dataDetail[0].contatosAdicionados.push(dadosContato);
        this.plusContact.nomeContato = "";
        this.plusContact.emailContato = "";
        this.plusContact.telefoneContato = "";
        console.log(this.dataDetail);
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Preencha todos os campos de contato",
          showConfirmButton: true,
          confirmButtonColor: "#28a745",
          timer: 2500,
        });
      }
    },

    cancelUpdateRegister() {
      this.dataDetail[0].nome = this.dataPerson.nome;
      this.dataDetail[0].nomeF = this.dataPerson.nomeF;
      this.dataDetail[0].cpfCnpj = this.dataPerson.cpfCnpj;
      this.dataDetail[0].contatosAdicionados = JSON.parse(
        JSON.stringify(this.dataPerson.contatosAdicionados)
      );

      let allInput = document.querySelectorAll("input");
      allInput.forEach((input) => {
        input.setAttribute("disabled", true);
      });
    },

    removeContactUpdate(e) {
      let btn = e.target;
      let id = btn.id.substring(20);
      let parent = btn.parentNode;
      parent.remove();
      this.dataDetail[0].contatosAdicionados.splice(id, 1);
    },
  },
};
</script>
<style>
</style>