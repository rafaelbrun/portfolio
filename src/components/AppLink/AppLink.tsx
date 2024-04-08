import Link from "next/link";
import { cn } from "~/utils/common";

type Props = {
  text: string;
  href: string;
  isBlank?: boolean;
  isUnderlined?: boolean;
};

const AppLink = ({
  text,
  href,
  isBlank,
  isUnderlined = false,
}: Props): JSX.Element => {
  return (
    <Link
      href={href}
      target={isBlank ? "_blank" : undefined}
      className={cn({
        "text-blue-500 underline hover:text-blue-400": isUnderlined,
      })}
    >
      <b>{text}</b>
    </Link>
  );
};

export default AppLink;
