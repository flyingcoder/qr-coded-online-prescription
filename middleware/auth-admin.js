export default async function ({ $auth, redirect, store }) {
  await $auth
  const user = $auth.user
  if (user && user.role === 'admin') {
    // let the user in
  } else {
    store.dispatch('snackbar/setSnackbar', {
      color: 'error',
      text: 'You must be an admin to view that page.',
    })
    redirect('/')
  }
}
