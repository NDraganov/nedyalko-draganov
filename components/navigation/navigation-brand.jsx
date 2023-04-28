import Image from "next/image";
import Link from "next/link";

const NavigationBrand = () => {
  return (
    <Link href="/" title="Home page">
      {/* Logo create by Logo.com, crafted by me */}
      <Image src="/images/logo.svg" alt="logo" width={60} height={60} />
    </Link>
  );
};

export default NavigationBrand;
