<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Lamento,pág. não encontrada<strong>(404)</strong></p>
    <q-btn
    unelevated
      color="light-blue"
      style="width:200px;"
      to="/"
      label="Voltar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
