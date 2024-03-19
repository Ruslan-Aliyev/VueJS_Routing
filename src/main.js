import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Food from './components/Food.vue'
import Animal from './components/Animal.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/animal', component: Animal },
		{ path: '/food', component: Food },
		{ path: "/:notFound", component: Animal },
	]
});

const app = createApp(App)

app.use(router);

app.mount('#app')
