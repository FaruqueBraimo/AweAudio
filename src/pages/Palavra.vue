<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card flat bordered v-for="animation in skeletonAnimations" :key="animation" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Comer</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-skeleton :animation="animation" square height="200px"  />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      skeletonAnimations: [
        'wave'
      ]
    }
  }
}
</script>