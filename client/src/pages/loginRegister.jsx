import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_STUDENT, LOGIN } from "../schema/mutations";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registeredStudent] = useMutation(CREATE_STUDENT);
  const [loginStudent] = useMutation(LOGIN);

  const handleUserName = (e) => {
    setUserName(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await registeredStudent({
      variables: {
        username,
        password,
      },
    });
  };

  const handleRegister = async (e) => {
    await loginStudent({
      variables: {
        username,
        password,
      },
    });
  };

  return (
    <main id="loginbackgroundimage">
      <h2 className="text-center">
        {isRegistering ? "Register a New Account" : "Login to Your Account"}
      </h2>
      <form className="flex flex-col items-center gap-y-2 px-4">
        <input
          style={{ color: "black" }}
          onChange={(e) => handleUserName(e.target.value)}
          type="text"
          label="Username"
          id="username"
          placeholder="Enter your username"
          required
        />
        <input
          style={{ color: "black" }}
          onChange={(e) => handlePassword(e.target.value)}
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button
          onClick={(e) => (isRegistering ? handleRegister(e) : handleSubmit(e))}
          type="button"
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
