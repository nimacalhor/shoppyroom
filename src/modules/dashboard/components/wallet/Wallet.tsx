import { User } from "@modules/member/libraries/member-types";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";
import Paper from "@mui/material/Paper";
import stl from './Wallet.module.scss'

function Wallet({ user }: { user: User }) {
  return (
    <Paper
      sx={{
        mt:2,
        height:200,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className={`${stl.root} panel`}
    >
      <Typography gutterBottom variant="subtitle1">{user.email}</Typography>
      <Typography variant="h4">{faker.random.numeric(5)} $</Typography>
    </Paper>
  );
}

export default Wallet;
