import React, { useState } from "react";

// Utils
import { Card } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { addToken, addUserInfo } from "Redux/actions";

// Components
import Input from "Components/Input";
import GreenButton from "Components/GreenButton";

// Apis
import { login } from "Routes/login";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const SignInCard = styled(Card)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "40rem",
  border: "2px solid rgba(224, 224, 224, 0.5)",
  boxShadow: "none",
});

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch(null);
  const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    try {
      setIsLoading(true);
      const res = await login({ email, password });
      dispatch(addToken(res.token));
      dispatch(addUserInfo(res.user));
      history.push("/phone-book");
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
      setIsLoading(false);
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className={classes.root}>
        <SignInCard>
          <header>
            <div className="mx-10 mt-12 mb-16 flex justify-center items-center">
              <span className="text-4xl font-bold text-green-600 text-center">
                Welcome to Phonebook!
              </span>
            </div>
          </header>
          <main>
            <div className="flex flex-col justify-center items-center mx-14  text-xl">
              <Input
                header="Email address"
                placeholder="Enter email address"
                setInput={setEmail}
              />
              <Input
                header="Password"
                placeholder="Enter password"
                setInput={setPassword}
              />
            </div>
            <div className="flex justify-center items-center mt-2 mb-16 mx-14">
              <GreenButton
                onClickFunction={handleLogin}
                text={isLoading ? "Loading..." : "Login"}
              />
            </div>
          </main>
        </SignInCard>
      </div>
    </div>
  );
}
