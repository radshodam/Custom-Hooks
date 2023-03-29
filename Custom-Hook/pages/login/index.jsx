import useInput from "@/components/hooks/useInput";
import React from "react";

export default function Index() {
  const [username, usernameBinding, usernameReset] = useInput("");
  const [passwordValue, passwordBinding, passwordReset] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${username} From radshodam.ir :))`);
    usernameReset();
    passwordReset();
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" {...usernameBinding} placeholder="Username" />

          <input type="password" {...passwordBinding} placeholder="Password" />
          <button>login</button>
          <p>
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
