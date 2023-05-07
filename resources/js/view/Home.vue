<template>
    <div class="text-center">
        <h2>Starter Kit for Vue SPA inside Laravel</h2>
        <h4>{{ count }}</h4>
        <button class="btn btn-primary" @click="$store.commit('INCREMENT')"> +</button>
        <button class="btn btn-info ms-2" @click="DECREMENT"> -</button>

    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: "Home",
    computed: {
        ...mapState({
            count: state => state.count
        })
    },
    methods: {
        ...mapMutations([
            'DECREMENT'
        ])
    }
}
</script>
