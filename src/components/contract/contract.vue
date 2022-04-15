<template>
  <div class="bg-light rounded">
    <div class="d-flex justify-content-between p-2">
      <h3>
        <b-icon-file-text></b-icon-file-text>
        Contrato
      </h3>
      <b-button variant="primary" v-b-modal.newRegisterModal
        ><b-icon-file-earmark-plus></b-icon-file-earmark-plus> Novo
        Contrato</b-button
      >
    </div>
    <b-table striped hover :fields="fields"></b-table>

    <div>
      <b-modal id="newRegisterModal" size="xl" scrollable title="Novo Cadastro">
        <template #modal-footer="{ cancel }">
          <b-button size="lx" variant="primary" @click="Save()">
            Salvar
          </b-button>
          <b-button size="lx" variant="secondary" @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      salvar: false,
      fields: [
        {
          key: "tipoContrato",
          label: "Tipo do Contrato",
        },
        {
          key: "parceiro",
          label: "Parceiro(s)",
        },
        {
          key: "cliente",
          label: "Cliente(s)",
        },
        {
          key: "produto",
          label: "Produto",
        },
        {
          key: "tipoCliente",
          label: "Tipo do Cliente",
        },
      ],
    };
  },

  methods: {
    Save() {
      this.salvar = true;
      return this.salvar;
    },
  },
};
</script>
<style>
</style>