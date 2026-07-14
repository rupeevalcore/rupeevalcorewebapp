import React from "react";

export function SectionContainer({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`
        w-full
        px-5
        sm:px-6
        lg:px-8
        xl:px-10
        mx-auto
        max-w-[1440px]
        ${className}
      `}
    >
      {children}
    </section>
  );
}
