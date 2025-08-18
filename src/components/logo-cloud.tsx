import { clsx } from "clsx";

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "mx-auto flex max-w-3xl flex-wrap items-center justify-between",
      )}
    >
      <img
        alt={"Logo de la French Tech"}
        src="/logo-cloud/french-tech.webp"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-20"
      />
      <img
        alt={"Logo de la BPI France"}
        src="/logo-cloud/bpi-france.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt={"Logo de la Nouvelle Aquitaine France"}
        src="/logo-cloud/nouvelle-aquitaine.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-24"
      />
    </div>
  );
}
