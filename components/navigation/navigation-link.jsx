import Link from "next/link";

const NavigationLink = ({ href, title, text }) => {
  return (
    <li>
      <Link href={href} title={title}>
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
