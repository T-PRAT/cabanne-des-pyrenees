import { signup } from './action'
import { useActionState } from 'react'

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, { errors: { name: [], email: [], password: [] } })
  return (
    <form action={action}>
      <label>
        Name:
        <input type="text" name="name" />
        {state?.errors?.name && <div>{state.errors.name}</div>}
      </label>
      <label>
        Email:
        <input type="email" name="email" />
        {state?.errors?.email && <div>{state.errors.email}</div>}
      </label>
      <label>
        Password:
        <input type="password" name="password" />
        {state?.errors?.password && <div>{state.errors.password}</div>}
      </label>
      <button disabled={pending} type="submit">
        {pending ? 'Loading...' : 'Signup'}
      </button>
    </form>
  )
}
