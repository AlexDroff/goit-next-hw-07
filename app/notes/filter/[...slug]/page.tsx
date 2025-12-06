import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";
import NotesClient from "./Notes.client";

const VALID_TAGS = ["Todo", "Work", "Personal", "Meeting", "Shopping"] as const;

export default async function FilteredNotesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const tagValue = resolvedParams.slug?.[0];

  const initialTag: NoteTag | undefined =
    tagValue &&
    tagValue !== "all" &&
    (VALID_TAGS as readonly string[]).includes(tagValue)
      ? (tagValue as NoteTag)
      : undefined;

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
