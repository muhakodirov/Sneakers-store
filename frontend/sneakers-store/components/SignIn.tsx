import { signIn } from "next-auth/react";

 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", Object.fromEntries(formData.entries()))
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}