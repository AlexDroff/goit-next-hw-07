import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import type { ReactNode } from "react";

export default function ModalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
