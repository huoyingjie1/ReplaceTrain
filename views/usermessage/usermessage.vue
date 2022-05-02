<template>
    <div>个人中心</div>
</template>
<script>
    export default{
        name:'home',
        data(){
            return{
            }
        },
        computed:{
            UserName(){
                return this.$store.state.user.token
            }
        },
        methods:{
        },

    }
</script>