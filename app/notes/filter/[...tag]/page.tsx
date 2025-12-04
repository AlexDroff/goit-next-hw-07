// app/notes/filter/[...tag]/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";
import NotesClient from "../../Notes.client";

export default async function FilteredNotesPage({
  params,
}: {
  params: Promise<{ tag: string[] }>;
}) {
  const { tag } = await params;

  const tagValue = tag?.[0];
  const initialTag: NoteTag | undefined =
    tagValue && tagValue !== "all" ? (tagValue as NoteTag) : undefined;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", { tag: initialTag }],
    queryFn: () => fetchNotes({ tag: initialTag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={initialTag} />
    </HydrationBoundary>
  );
}
