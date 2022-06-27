import { PASSWORD_INPUT } from "@modules/member/libraries/constants";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function PasswordInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      defaultValue=""
      control={control}
      name={PASSWORD_INPUT}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          type="password"
          label="password"
          variant="standard"
          id={PASSWORD_INPUT}
          error={!!errors[PASSWORD_INPUT]}
          helperText={
            errors[PASSWORD_INPUT] ? errors[PASSWORD_INPUT]?.message + "" : ""
          }
        />
      )}
    />
  );
}
