import Link from "next/link";

import { Wrapper } from "@/components/Wrapper";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Wrapper className="w-full pt-12">
          <Link className="text-5xl font-semibold" href={"/"}>
            Suhas Kashyap
          </Link>
        </Wrapper>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between py-12">
        {children}
      </main>
    </>
  );
}
