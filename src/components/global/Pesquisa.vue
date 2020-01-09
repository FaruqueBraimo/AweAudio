<template>
    <div class="q-pa-md" style="width: 100%">
        <q-input
            rounded
            outlined
            dense
            v-model="text"
            color="grey"
           
            placeholder="Pesquise ..."
        >
            <template v-slot:prepend>
                <q-icon name="search" />
            </template>
            <template v-slot:append>
                <q-btn icon="short_text" @click="text = ''" flat round/>
            </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        name: "SearchComponent",
        data () {
            return {
                text: ''
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>