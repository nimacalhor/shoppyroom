import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DeviceType } from "../../libraries/device-type";

const Logo = ({ deviceType }: { deviceType: DeviceType }) => {
  return (
    <Link href="/" passHref prefetch={false}>
      <div>
        <Image
          src="/images/logo/logo.png"
          alt="shoppyroom"
          width={deviceType.isMobile ? 96 : 142}
          height={deviceType.isMobile ? 39 : 58}
          layout="raw"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
