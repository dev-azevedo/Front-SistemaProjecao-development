<template>
  <section>
    <b-modal size="xl" ref="modal" scrollable title="Novo Cadastro">
      <form class="px-4" ref="form-new-register">
        <b-form-group
          id="nome-razao-social"
          label="Nome/Razão social"
          label-for="input-nome-razao-social"
        >
          <b-form-input
            id="input-nome-razao-social"
            v-model="dataNewRegister.name"
            class="input-teste"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="nome-fantasia"
          label="Nome Fantasia"
          label-for="input-nome-fantasia"
        >
          <b-form-input
            id="input-nome-fantasia"
            v-model="dataNewRegister.nameFantasy"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group id="cpf-cnpj" label="CPF/CNPJ" label-for="input-cpf-cnpj">
          <b-form-input
            id="input-cpf-cnpj"
            v-model="dataNewRegister.cpfCnpj"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Tipo do Cliente">
          <div class="row">
            <div class="col-1">
              <b-form-radio
                v-model="dataNewRegister.tipoCliente"
                name="WHP"
                value="WHP"
                >WHP</b-form-radio
              >
            </div>

            <div class="col-1">
              <b-form-radio
                v-model="dataNewRegister.tipoCliente"
                name="MAW"
                value="MAW"
                >MAW</b-form-radio
              >
            </div>
          </div>
        </b-form-group>
        <hr />
        <div>
          <h4><b-icon-telephone-fill></b-icon-telephone-fill> Contato</h4>
          <b-form-group
            id="nome-contato"
            label="Nome do contato:"
            label-for="input-nome-contato"
          >
            <b-form-input
              id="input-nome-contato"
              v-model="contatos.nomeContato"
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
              v-model="contatos.emailContato"
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
              v-model="contatos.telefoneContato"
              trim
            ></b-form-input>
          </b-form-group>
          <b-button variant="primary" class="mt-2" @click="novoContato"
            ><b-icon-telephone-plus-fill></b-icon-telephone-plus-fill> Adicionar
            contato</b-button
          >

          <div>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between"
                v-for="(item, index) in dataNewRegister.contatoAdicionados"
                :key="index"
              >
                <section>
                  <h6>Contato</h6>
                  <span><strong>Nome Contato: </strong></span>
                  <span>{{ item.nomeContato }}</span>
                  <br />
                  <span><strong>Email do contato: </strong></span>
                  <span>{{ item.emailContato }}</span>
                  <br />
                  <span><strong>Telefone do Contato: </strong></span>
                  <span>{{ item.telefoneContato }}</span>
                </section>
                <b-button
                  :id="`removeContact-${index}`"
                  variant="danger"
                  class="align-self-start"
                  @click="removerContato($event)"
                  >Remover</b-button
                >
              </li>
            </ul>
          </div>
        </div>
      </form>

      <!-- Start - Footer -->
      <template #modal-footer="{ cancel }">
        <b-button size="lx" variant="success" @click="Save()">
          <b-icon-download></b-icon-download> &nbsp; Salvar
        </b-button>
        <b-button size="lx" variant="dark" @click="cancel()">
          <b-icon-x-circle></b-icon-x-circle>&nbsp; Fechar
        </b-button>
      </template>
      <!-- End - Footer -->
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "modalForm",

  data() {
    return {
      dataNewRegister: {
        name: "",
        nameFantasy: "",
        cpfCnpj: "",
        tipoCliente: "",
        contatoAdicionados: [],
      },
      contatos: {
        nomeContato: "",
        emailContato: "",
        telefoneContato: "",
      },
    };
  },

  props: { openModal: Boolean },

  watch: {
    openModal(newValue) {
      if (newValue) {
        this.$refs["modal"].show();
      }
    },
  },

  methods: {
    novoContato() {
      if (
        this.contatos.nomeContato != "" &&
        this.contatos.emailContato != "" &&
        this.contatos.telefoneContato != ""
      ) {
        let dadosContato = {
          nomeContato: this.contatos.nomeContato,
          emailContato: this.contatos.emailContato,
          telefoneContato: this.contatos.telefoneContato,
        };

        this.contatos.nomeContato = "";
        this.contatos.emailContato = "";
        this.contatos.telefoneContato = "";

        this.dataNewRegister.contatoAdicionados.push(dadosContato);
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Preencha todos os campos de contato",
          showConfirmButton: false,
          confirmButtonColor: "#28a745",
          timer: 2500,
        });
      }
    },

    removerContato(e) {
      let btn = e.target;
      let id = btn.id.substring(14);
      let parent = btn.parentNode;
      parent.remove();
      this.dataNewRegister.contatoAdicionados.splice(id, 0);
    },

    Save() {},
  },
};
</script>

<style lang="scss" scoped>
</style>