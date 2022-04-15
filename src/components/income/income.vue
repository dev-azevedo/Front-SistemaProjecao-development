<template>
  <div>
    <div class="bg-light rounded">
      <div class="d-flex justify-content-between p-2">
        <h3>
          <b-icon-file-earmark-bar-graph></b-icon-file-earmark-bar-graph>
          Faturamento
        </h3>
        <b-button variant="primary" v-b-modal.newRegisterModal
          ><b-icon-file-earmark-plus></b-icon-file-earmark-plus> Novo
          Faturamento</b-button
        >
      </div>
      <b-table striped hover :fields="fields"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "cliente",
          label: "Cliente",
        },
        {
          key: "produto",
          label: "Produto",
        },
        {
          key: "TipoCliente",
          label: "Tipo Cliente",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>