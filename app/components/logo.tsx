type LogoProps = {
  className?: string;
};

export function RaydioLogo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    // Brand mark is a static SVG; next/image adds nothing here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/raydio-icon.svg"
      alt=""
      width={1711}
      height={2640}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  );
}

export function RaydioWordmark({ className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`.trim()}>
      <RaydioLogo className="h-7 w-auto" />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink">
        Raydio
      </span>
    </span>
  );
}
