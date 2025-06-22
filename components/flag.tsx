import Image from "next/image";

const countryToFlag = {
  france: "/flags/france.svg",
  us: "/flags/united-states.svg",
};

export const Flag = ({
  country,
  width = 24,
  height = 16,
  className = "",
  alt,
}: {
  country: "france" | "us";
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}) => {
  const src = countryToFlag[country];
  return (
    <Image
      priority
      src={src}
      alt={alt || `${country} flag`}
      width={width}
      height={height}
      className={className}
      style={{ display: "inline-block" }}
    />
  );
};
