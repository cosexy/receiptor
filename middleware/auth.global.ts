export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  if (to.path !== '/' && !authStore.token) {
    return navigateTo('/')
  } else if (to.path === '/' && authStore.token) {
    return navigateTo('/invoices')
  }
})
