// Validation stuff ______________________________
import { SignUpFormInput } from "@modules/member/libraries/member-types";
import { EMAIL_INPUT, PASSWORD_INPUT } from "../../libraries/constants";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { toastError, toastSuccess, redirectUser } from "./helper";
import { postNewUser } from "../../store/api/store-api";
import { signupSchema } from "../../libraries/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import hash from "@modules/general/libraries/hash";
import { SignInResponse } from "next-auth/react";

// necessary ui components ______________________________
import Typography from "@mui/material/Typography";
import PasswordInput from "../password-input";
import Avatar from "@mui/material/Avatar";
import stl from "./AuthForm.module.scss";
import EmailInput from "../email-input";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

// other ______________________________
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";

const LinearProgress = dynamic(() => import("@mui/material/LinearProgress"));
const Progress = dynamic(() => import("@mui/material/CircularProgress"));
const PersonIcon = dynamic(() => import("@mui/icons-material/Person"));
const LoginIcon = dynamic(() => import("@mui/icons-material/Login"));
const EditIcon = dynamic(() => import("@mui/icons-material/Edit"));
const DoneIcon = dynamic(() => import("@mui/icons-material/Done"));
const Button = dynamic(() => import("@mui/material/Button"));
const Box = dynamic(() => import("@mui/material/Box"));

// ______________________________
function SignUp() {
  const [redirectPending, setRedirectPending] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  const router = useRouter();

  const methods = useForm<SignUpFormInput>({
    resolver: yupResolver(signupSchema),
  });

  const formSubmitHandler: SubmitHandler<SignUpFormInput> = async function (
    data
  ) {
    setPending(true);
    // login ______________________________
    if (isLogin) {
      const signInResult = (await signIn("credentials", {
        redirect: false,
        email: data[EMAIL_INPUT],
        password: data[PASSWORD_INPUT],
      })) as unknown as SignInResponse;

      console.log(signInResult);
      if (signInResult.ok) {
        toastSuccess("logged in successfully");
        setRedirectPending(true);
        redirectUser(router).then(() => setRedirectPending(false));
      }
      if (signInResult.error) toastError(signInResult.error);

      // sign up ______________________________
    } else {
      const response = await postNewUser({
        email: data[EMAIL_INPUT],
        password: data[PASSWORD_INPUT],
        id: hash(data),
      });
      if (response.newUser) {
        toastSuccess(
          "signed up successfully with email : " + response.newUser.email
        );
        setRedirectPending(true);
        redirectUser(router).then(() => setRedirectPending(false));
      }
      if (response.error) toastError(response.error);
    }
    setPending(false);
  };

  return (
    <FormProvider {...methods}>
      {redirectPending && <LinearProgress />}
      <Paper
        sx={{
          width: {
            xs: "90vw",
            sm: "60vw",
            md: "40vw",
          },
        }}
        className={stl.root}
        component="form"
        onSubmit={methods.handleSubmit(formSubmitHandler)}
      >
        <div className={stl.root__iconCnt}>
          <Avatar className={stl.root__iconCnt__avatar}>
            <PersonIcon />
          </Avatar>
        </div>
        <Typography variant="h5" gutterBottom>
          {!isLogin ? "sign up" : "log in"}
        </Typography>
        <Stack className={stl.root__stack} direction="column" spacing={2}>
          <EmailInput />
          <PasswordInput />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            type="submit"
            disabled={pending}
            variant="contained"
            endIcon={!pending && <DoneIcon />}
          >
            {pending ? <Progress /> : "submit"}
          </Button>
          <Button
            size="small"
            variant="outlined"
            endIcon={isLogin ? <EditIcon /> : <LoginIcon />}
            onClick={() => setIsLogin((prevState) => !prevState)}
          >
            {isLogin ? "sign up" : "sign in"}
          </Button>
        </Stack>
      </Paper>
    </FormProvider>
  );
}

export default SignUp;
