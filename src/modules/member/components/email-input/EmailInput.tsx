import { EMAIL_INPUT } from "@modules/member/libraries/constants";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function EmailInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      defaultValue=""
      control={control}
      name={EMAIL_INPUT}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          type="email"
          label="email"
          id={EMAIL_INPUT}
          variant="standard"
          error={!!errors[EMAIL_INPUT]}
          helperText={
            errors[EMAIL_INPUT] ? errors[EMAIL_INPUT]?.message + "" : ""
          }
        />
      )}
    />
  );
}
