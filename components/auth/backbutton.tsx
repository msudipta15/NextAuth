import Link from "next/link";

export function Backbutton({ text, href }: { text: string; href: string }) {
  return (
    <div className="text-center w-full">
      <Link href={href}>{text}</Link>
    </div>
  );
}
