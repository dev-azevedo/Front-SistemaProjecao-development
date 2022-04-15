<template>
  <div>
    <div class="bg-light rounded">
      <div class="d-flex justify-content-between p-2">
        <h3>
          <b-icon-person-fill></b-icon-person-fill>
          Pessoa
        </h3>
        <b-button variant="primary" v-b-modal.newRegisterModal
          ><b-icon-person-plus-fill></b-icon-person-plus-fill> Novo
          Cadastro</b-button
        >
      </div>
      <b-table
        sticky-header
        striped
        hover
        :fields="fields"
        :items="DadosTabela"
        @row-clicked="myHandler"
        style="cursor: pointer"
      >
      </b-table>

      <div>
        <b-modal
          id="newRegisterModal"
          size="xl"
          scrollable
          title="Novo Cadastro"
        >
          <FormNewRegister :save="salvar" />

          <template #modal-footer="{ cancel }">
            <b-button size="lx" variant="success" @click="Save()">
              <b-icon-download></b-icon-download> &nbsp; Salvar
            </b-button>
            <b-button size="lx" variant="dark" @click="cancel()">
              <b-icon-x-circle></b-icon-x-circle>&nbsp; Fechar
            </b-button>
          </template>
        </b-modal>
      </div>
    </div>

    <b-modal ref="my-modal" scrollable size="xl" title="Detalhes">
      <FormDatailUpdateRegister
        :dataPerson="dataDatail"
        :editDataPerson="validate.btnEdit"
        :saveUpdate="salvarAlteracao"
      />

      <template #modal-footer>
        <b-button
          size="lx"
          variant="primary"
          v-show="!validate.btnCancelUpdate"
          @click="updateRegister()"
        >
          <b-icon-pencil-square></b-icon-pencil-square> Editar</b-button
        >
        <b-button
          size="lx"
          variant="secondary"
          v-show="validate.btnCancelUpdate"
          @click="cancelUpdate()"
        >
          <b-icon-x-circle></b-icon-x-circle>
          Cancelar
        </b-button>
        <b-button
          size="lx"
          variant="success"
          v-show="validate.btnCancelUpdate"
          @click="saveUpdate()"
        >
          <b-icon-x-circle></b-icon-x-circle>
          Salvar Alteração
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import FormNewRegister from "./formNewRegister.vue";
import FormDatailUpdateRegister from "./formDetailUpdateRegister.vue";
export default {
  components: {
    FormNewRegister,
    FormDatailUpdateRegister,
  },
  data() {
    return {
      teste: true,
      salvar: false,
      salvarAlteracao: false,
      dados: [],
      dataDatail: {
        nome: "",
        nomeF: "",
        cpfCnpj: "",
        contatosAdicionados: [],
      },

      fields: [
        {
          key: "nome",
          label: "Nome/Razão Social",
        },
        {
          key: "nomeF",
          label: "Nome Fantasia",
        },
        {
          key: "cpfCnpj",
          label: "CPF/CNPJ",
        },
      ],
      DadosTabela: [],

      validate: {
        btnCancelUpdate: false,
        btnEdit: false,
      },
    };
  },

  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    user.map((pessoa) => {
      if (pessoa.nameFantasy == "") {
        pessoa.nameFantasy = "Não Cadastrado";
      }

      let dadosUser = {
        nome: pessoa.name,
        nomeF: pessoa.nameFantasy,
        cpfCnpj: pessoa.cpfCnpj,
        contatos: pessoa.contatoAdicionados,
      };
      this.DadosTabela.push(dadosUser);
    });
  },

  methods: {
    Save() {
      this.salvar = true;
      return this.salvar;
    },

    myHandler(item) {
      this.validate.btnCancelUpdate = false;
      this.validate.btnRemoveContact = false;

      this.dataDatail.contatosAdicionados = [];
      this.dataDatail.nome = item.nome;
      this.dataDatail.nomeF = item.nomeF;
      this.dataDatail.cpfCnpj = item.cpfCnpj;
      for (const key in item.contatos) {
        let contato = {
          nomeContato: item.contatos[key].nomeContato,
          emailContato: item.contatos[key].emailContato,
          telefoneContato: item.contatos[key].telefoneContato,
        };
        this.dataDatail.contatosAdicionados.push(contato);
      }

      this.$refs["my-modal"].show();
    },

    updateRegister() {
      this.validate.btnEdit = true;
      this.validate.btnCancelUpdate = true;
    },

    cancelUpdate() {
      this.validate.btnCancelUpdate = false;
      this.validate.btnEdit = false;
      // let dadosBase = JSON.parse(JSON.stringify(this.dataDatailPreview));
    },

    saveUpdate() {
      this.salvarAlteracao = true;
      return this.salvarAlteracao;
    },
  },
};
</script>
<style lang="">
</style>