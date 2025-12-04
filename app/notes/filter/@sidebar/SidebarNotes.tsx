// app/notes/filter/@sidebar/SidebarNotes.tsx
"use client";

import Link from "next/link";
import styles from "./SidebarNotes.module.css";

const TAGS = [
  { value: "all", label: "All notes" },
  { value: "Todo", label: "Todo" },
  { value: "Work", label: "Work" },
  { value: "Personal", label: "Personal" },
  { value: "Meeting", label: "Meeting" },
  { value: "Shopping", label: "Shopping" },
];

export default function SidebarNotes() {
  return (
    <ul className={styles.menuList}>
      {TAGS.map((tag) => (
        <li key={tag.value} className={styles.menuItem}>
          <Link href={`/notes/filter/${tag.value}`} className={styles.menuLink}>
            {tag.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
