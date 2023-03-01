import {
  MutableRefObject,
  ReactEventHandler,
  SyntheticEvent,
  useRef,
  useState
} from "react";
import LoginBox from "./login/LoginBox";
import LoginCheckbox from "./login/LoginCheckbox";
import LoginForm from "./login/LoginForm";
import LoginInput from "./login/LoginInput";
import LoginInputLabel from "./login/LoginInputLabel";
import LoginSumitBtn from "./login/LoginSumitBtn";
import LoginTitle from "./login/LoginTitle";
import PageBox from "./login/PageBox";
import validator from "validator";
import ErrorTextBox from "../components/ErrorText";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [errors, setErrors] = useState(null as null | string[]);
  /**
   * Local State
   * Default: checked
   * Toggle checked state of the "remember me" checkbox
   */
  const [willRemember, setWillRemember] = useState(true);
  /**
   * Handler for onChange event of remember me checkbox
   */
  const onCheckboxChange: ReactEventHandler = () => {
    setWillRemember((state) => !state);
  };
  /**
   * Validate inputs, then send the login request
   */
  const onSubmit: ReactEventHandler = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const username = usernameRef.current.value,
      password = passwordRef.current.value;
    let isEmailValid = validator.isEmail(username);
    let meetPasswordLength = validator.isLength(password, {
      min: 8,
      max: 16
    });
    let isStrongPassword = validator.isStrongPassword(password, {
      minUppercase: 1,
      minSymbols: 1
    });
    setErrors(null);
    if (!isEmailValid) {
      setErrors((state) => {
        if (!Array.isArray(state)) {
          state = [];
        }
        state.push("Username must be an email address");
        return state;
      });
    }
    if (!meetPasswordLength) {
      setErrors((state) => {
        if (!Array.isArray(state)) {
          state = [];
        }
        state.push(
          `Minimum and maximum password length is 8 and 16. Received ${password.length}.`
        );
        return state;
      });
    }
    if (!isStrongPassword) {
      setErrors((state) => {
        if (!Array.isArray(state)) {
          state = [];
        }
        state.push(`Must have at least 1 uppercase letter and 1 special character.`);
        return state;
      });
    }
  };
  const onUsernameChange: ReactEventHandler = (ev: SyntheticEvent) => {
    if (usernameRef.current !== null) {
      setUsername(usernameRef.current.value);
    }
  };
  const onPasswordChange: ReactEventHandler = (ev: SyntheticEvent) => {
    if (passwordRef.current != null) {
      setPassword(passwordRef.current.value);
    }
  };
  /**
   * Error Messages
   */
  let MessageList = null;
  if (errors !== null) {
    MessageList = errors.map((it: string, id) => {
      return (
        <ErrorTextBox key={Math.random().toString(36) + id}>{it}</ErrorTextBox>
      );
    });
  }
  return (
    <PageBox>
      <LoginBox>
        <LoginTitle>Unreal ERP</LoginTitle>
        <LoginForm>
          <LoginInputLabel htmlFor="username">
            <span>username:</span>
          </LoginInputLabel>
          <LoginInput
            onChange={onUsernameChange}
            value={username}
            ref={usernameRef}
            type="email"
            name="username"
          />
          <LoginInputLabel htmlFor="password">
            <span>password:</span>
          </LoginInputLabel>
          <LoginInput
            onChange={onPasswordChange}
            value={password}
            ref={passwordRef}
            type="password"
            name="password"
          />
          <LoginCheckbox
            onChange={onCheckboxChange}
            checked={willRemember}
            type="checkbox"
            name="rememberme"
          />
          <LoginInputLabel htmlFor="rememberme">
            <span>remember me</span>
          </LoginInputLabel>
          <LoginSumitBtn onClick={onSubmit} type="submit">
            login
          </LoginSumitBtn>
        </LoginForm>
        <>{MessageList}</>
      </LoginBox>
    </PageBox>
  );
};
export default Login;
