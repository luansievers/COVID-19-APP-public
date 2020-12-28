<template>
        <v-btn fab dark :color="color" @click="updateAnswer">
            <v-icon>mdi-account-convert</v-icon>
        </v-btn>
</template>

<script>
    export default {
        name: "VAtomButtonUpdateAnswers",
        props: {
            color: {
                type: String,
                default: 'primary'
            },
        },
        methods: {
            updateAnswer() {
                this.$store.commit('users/set_answers_update');
            }
        },
    }
</script>

<style scoped>

</style>
