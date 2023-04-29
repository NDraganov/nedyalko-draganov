import Image from "next/image";
import Link from "next/link";

const NavigationBrand = ({ onClick }) => {
  return (
    <Link href="/" title="Home page">
      {/* Logo create by Logo.com, crafted by me */}
      <Image
        src="/images/logo.svg"
        alt="logo"
        priority={true}
        width={60}
        height={60}
        onClick={onClick}
      />
    </Link>
  );
};

export default NavigationBrand;
