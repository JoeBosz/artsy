import { useState } from "react";
import Input from "../components/form/input";
import { useMutation } from "@apollo/client";
import { CREATE_STUDENT, LOGIN } from "../schema/mutations";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registeredStudent] = useMutation(CREATE_STUDENT);
  const [loginStudent, { error }] = useMutation(LOGIN);
  console.log(error);
  const handleUserName = (e) => {
    setUserName(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await loginStudent({
      variables: {
        username,
        password,
      },
    });
  };

  const handleRegister = async (e) => {
    await registeredStudent({
      variables: {
        username,
        password,
      },
    });
  };

  return (
    <main>
      <h2 className="text-center">
        {isRegistering ? "Register a New Account" : "Login To Your Account"}
      </h2>
      <form className="flex flex-col items-center gap-y-2 px-4">
        <Input
          style={{ color: "black" }}
          onChange={(e) => handleUserName(e.target.value)}
          type="text"
          label="Username"
          id="username"
          placeholder="Enter your username"
          required
        />
        <Input
          style={{ color: "black" }}
          onChange={(e) => handlePassword(e.target.value)}
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button
          onClick={(e) =>
            isRegistering === "Register a New Account"
              ? handleRegister(e)
              : handleLogin(e)
          }
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
