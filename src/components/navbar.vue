<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="light"
      class="p-4 border-bottom border-success"
    >
      <b-navbar-brand><span class="text-dark">Logo TJ</span></b-navbar-brand>
      <div class="w-100 d-flex justify-content-between">
        <section>
          <router-link
            class="mx-2 text-success text-decoration-none fs-5"
            to="/cadastrar"
          >
            Cadastrar</router-link
          >
          <router-link
            class="mx-2 text-success text-decoration-none fs-5"
            to="/contrato"
            >Contrato</router-link
          >
          <router-link
            class="mx-2 text-success text-decoration-none fs-5"
            to="/faturamento"
            >Faturamento</router-link
          >
          <router-link
            class="mx-2 text-success text-decoration-none fs-5"
            to="/"
            >Resumo</router-link
          >
        </section>
        <section>
          <span class="text-success mx-2 fs-5">
            <b-icon-person-fill></b-icon-person-fill> Logado</span
          >
          <span class="text-success mx-2 fs-5"
            ><b-icon-box-arrow-right></b-icon-box-arrow-right> Sair</span
          >
        </section>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>


<style>
</style>