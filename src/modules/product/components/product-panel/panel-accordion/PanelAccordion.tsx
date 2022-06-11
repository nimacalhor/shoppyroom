import { kebabCase } from "@modules/general/libraries/helpers";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const PanelAccordion = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <Accordion expanded={active} className="panel">
      <AccordionSummary
        expandIcon={
          <IconButton onClick={() => setActive((prev) => !prev)}>
            <ExpandMoreIcon />
          </IconButton>
        }
        id={`PanelAccordion_${kebabCase(title.trim())}`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider sx={{ mb: 2 }} variant="middle" />
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default PanelAccordion;
