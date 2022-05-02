
import Cookie from 'js-cookie'
export default{
    state:{
        token:'',
        admin:'',
    },
    mutations:{
        setToken(state,val){
            state.token = val;
            Cookie.set('token',val)
        },
        clearToken(state){
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state){
            state.token = state.Cookie || Cookie.get('token')
        },

        setAdmin(state,val){
            state.admin = val;
            Cookie.set('admin',val)
        },
        clearAdmin(state){
            state.admin = ''
            Cookie.remove('admin')
        },
        getAdmin(state){
            state.admin = state.Cookie || Cookie.get('admin')
        },
    }
}