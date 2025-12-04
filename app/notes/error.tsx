"use client";

export default function NotesError({ error }: { error: Error }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      <h2>Failed to load notes</h2>
      <p>{error.message}</p>
    </div>
  );
}
