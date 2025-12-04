// app/notes/layout.tsx
import type { ReactNode } from "react";
import styles from "./notes-layout.module.css";

export default function NotesLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
