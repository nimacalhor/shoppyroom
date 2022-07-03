import stl from "./UnderlinedLink.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";

const UnderlinedLink = ({
  href,
  children,
  underlined,
}: {
  href: string;
  children: any;
  underlined?: boolean;
}) => {
  const className = `${stl.root} ${underlined ? stl.root__underlined : ""}`;
  return (
    <Link {...{ href }}>
      <Button className={className} color="primary" variant="text">
        {children}
      </Button>
    </Link>
  );
};

export default UnderlinedLink;
