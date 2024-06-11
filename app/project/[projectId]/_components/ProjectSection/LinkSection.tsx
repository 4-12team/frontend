import React from "react";
import Link from "next/link";

interface LinkListProps {
  linkList: {
    id: number;
    url: string;
  }[];
}

function LinkSection({ linkList }: LinkListProps) {
  return (
    <section>
      <p className="mb-4 text-lg font-bold">추가 링크</p>
      <div className="flex gap-2">
        {linkList.map(link => (
          <Link
            href={`${link.url}`}
            target="_blank"
            className="max-w-44 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl px-3 py-1 text-sm"
            key={link.id}>
            {link.url}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LinkSection;
