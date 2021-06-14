export default function ({ $auth, redirect }) {
  if ($auth.user.role !== 'doctor') redirect('/dashboard')
}
