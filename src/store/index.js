import { createStore } from 'vuex';

export default createStore({
    state: {
        partidas: [],
        usuario: JSON.parse(localStorage.getItem('user')) || { name: '', tag: '' }
    },
    mutations: {
        setUser(state, user) {
            state.usuario = user;
        },
        setPartidas(state, resposta) {
            state.partidas = resposta;
            let divmain = document.querySelector('.principal');
            divmain.style.display = 'flex';
            let bodystats = document.querySelector('.bodystats');
            bodystats.style.display = 'flex'    
            let load = document.querySelector('.preloader.loading')
            load.style.display = 'none'

        }
    },
    actions: {
        async getMatchs(state) {
            let load = document.querySelector('.preloader.loading');
            load.style.display = 'block';
            let body = document.querySelector('.bodystats');
            body.style.display = 'none';
            const response = await fetch(`https://api.henrikdev.xyz/valorant/v3/matches/na/${state.state.usuario.name}/${state.state.usuario.tag}`)

            let resposta = (await response.json()).data;


            state.commit('setPartidas', resposta)

        }

    },
    modules: {

    }
})
