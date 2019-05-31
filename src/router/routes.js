import FindPokemon from '../components/FindPokemon.vue';
import MyLayout from '../layouts/MyLayout.vue';

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [
      {
        path: '',
        component: FindPokemon
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
