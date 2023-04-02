// import LoginRegister component in App.jsx
import { useState } from "react";
import { Input } from "../components/form";

// Using LoginRegister component in App.jsx
export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);

  // If isRegistering is true, then we are registering a new account
  return (
    <main>
      <h2 className="text-center">
        {isRegistering ? "Register a New Account" : "Login To Your Account"}
      </h2>
      <form className="flex flex-col items-center gap-y-2 px-4">
        <Input
          type="text"
          label="Username"
          id="username"
          placeholder="Enter your username"
          required
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          className="button mt-4 bg-green-500 hover:bg-green-300"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsRegistering((prev) => !prev);
          }}
          className="text-center text-sm text-gray-500 hover:text-gray-300"
        >
          {isRegistering ? "Already have an account?" : "Need to register?"}
        </button>
      </form>
    </main>
  );
}
