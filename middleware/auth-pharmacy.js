export default function ({ $auth, redirect }) {
  if ($auth.user.role !== 'pharmacy') redirect('/dashboard')
}
