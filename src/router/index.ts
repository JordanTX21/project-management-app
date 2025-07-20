import { createRouter, createWebHistory } from 'vue-router'
import KanbanView from '@/views/KanbanView.vue'
import NotesView from '@/views/NotesView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import CalendarView from '@/views/CalendarView.vue'
import AlarmView from '@/views/AlarmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: AlarmView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/kanban',
      name: 'kanban',
      component: KanbanView,
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
  ],
})

export default router
