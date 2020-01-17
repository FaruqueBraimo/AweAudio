
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'definicoes', component: () => import('pages/Definicoes.vue') },
      { path: 'palavra/:id', component: () => import('pages/Palavra.vue') },
      { path: 'favoritos', component: () => import('pages/Favoritos.vue') },
      { path: 'historico', component: () => import('pages/Historico.vue') },
      { path: 'diario', component: () => import('pages/PalavaraDoDia.vue') },
      { path: 'questao', component: () => import('pages/Questao.vue') },

    ]
  },

  {
    path: '/questao',
    component: () => import('layouts/QuestaoLayout.vue'),
    children: [
      { path: 'quiz', component: () => import('pages/Questao.vue') },
      // { path: 'candidates', component: () => import('pages/admin/Candidates.vue') },
    
  

    ]

  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
