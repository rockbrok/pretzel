export default function Login() {
  return (
    <section>
      <h1>Login</h1>
      <form className="flex flex-col w-[300px] justify-center items-center">
      <label for="email">Email</label>
      <input 
        placeholder="Enter email" 
        type="email"
        id="email"
      />
      <label for="password">Password</label>
      <input 
        placeholder="Enter password" 
        type="password" 
        id="password"
      />
      <button type="submit">Login</button>
      </form>
    </section>
  );
};