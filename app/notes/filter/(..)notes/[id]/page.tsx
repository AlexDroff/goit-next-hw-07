"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/Modal/Modal"), { ssr: false });
const NotePreview = dynamic(
  () => import("@/components/NotePreview/NotePreview"),
  { ssr: false }
);

export default function InterceptedNotePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview noteId={id} />
    </Modal>
  );
}
