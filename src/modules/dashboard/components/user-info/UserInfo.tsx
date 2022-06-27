import { User } from "@modules/member/libraries/member-types";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function UserInfo({ user }: { user: User }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
      }}
    >
      <Avatar sizes="large" sx={{ mb: 2 }}>
        <PersonIcon />
      </Avatar>
      <Typography variant="h6">{user.email}</Typography>
    </Box>
  );
}

export default UserInfo;
