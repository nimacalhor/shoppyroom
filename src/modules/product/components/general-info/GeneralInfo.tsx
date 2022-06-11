import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import stl from './GeneralInfo.module.scss'

const GeneralInfo = ({ body }: { body: string }) => {
  return (
    <Paper className={`${stl.root} panel`}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="h5">general info</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography>{body}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneralInfo;
