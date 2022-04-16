<template>
  <section>
    <div class="bg-light rounded">
      <div class="d-flex justify-content-between p-2">
        <h3>
          <b-icon-person-fill></b-icon-person-fill>
          Pessoa
        </h3>
        <b-button variant="primary" @click="openModal = true"
          ><b-icon-person-plus-fill></b-icon-person-plus-fill> Novo
          Cadastro</b-button
        >
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Nome Fantasia</th>
            <th scope="col">CPF/CNPJ</th>
            <th scope="col">Tipo do Cliente</th>
            <th scope="col">Nome do Contato</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody v-for="(dados, index) in DadosTabela" :key="index">
          <tr>
            <td>{{ index }}</td>
            <td>{{ dados.nome }}</td>
            <td>{{ dados.nomeF }}</td>
            <td>{{ dados.cpfCnpj }}</td>
            <td>--</td>
            <td v-for="(list, index) in dados.contatos" :key="index">
              <p>{{ list.nomeContato }}</p>
            </td>
            <td v-for="(list, index) in dados.contatos" :key="index">
              <p>{{ list.emailContato }}</p>
            </td>
            <td v-for="(list, index) in dados.contatos" :key="index">
              <p>{{ list.telefoneContato }}</p>
            </td>
            <td>
              <button class="btn btn-warning">Editar</button>
            </td>
            <td>
              <button class="btn btn-danger">Deletar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ModalForm :openModal="openModal" />
  </section>
</template>
<script>
import ModalForm from "./../components/ModalForm.vue";
export default {
  components: {
    ModalForm,
  },

  data() {
    return {
      teste: true,
      salvar: false,
      salvarAlteracao: false,
      dados: [],
      openModal: false,
      DadosTabela: [],
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
      console.log(this.DadosTabela);
    });
  },

  methods: {
    Save() {
      this.salvar = true;
      return this.salvar;
    },
  },
};
</script>
<style lang="">
</style>