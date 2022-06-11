import UnderlinedLink from "@modules/general/components/underlined-link";
import Typography from "@mui/material/Typography";
import stl from "./SectionHeading.module.scss";

const SectionHeading = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className={stl.root}>
      <UnderlinedLink underlined={true} href={href}>more</UnderlinedLink>
      <Typography className={stl.root__title} variant="h4">
        {title}
      </Typography>
    </div>
  );
};

export default SectionHeading;
