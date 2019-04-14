import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import App from './app.vue'

const apolloClient = new ApolloClient({
	uri: process.env.GRAPHQL_ENDPOINT
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
	defaultClient: apolloClient
})

new Vue({
	el: '#app',
	apolloProvider,
	render: h => h(App)
})
