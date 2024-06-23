"use client";

import React from "react";
import { useEnterCommentContext } from "../../_context/EnterCommentProvider";
import EnterButton from "./EnterButton";

const MAX_COMMENT_LIMIT = 150;

function WriteText() {
  const { comment, handleCommentChange } = useEnterCommentContext();

  return (
    <>
      <div className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 bg-white p-3">
        <textarea
          onChange={handleCommentChange}
          className="h-full w-full resize-none bg-white text-sm text-gray-600 outline-none placeholder:text-gray-500"
          placeholder="댓글을 입력해주세요"
          maxLength={MAX_COMMENT_LIMIT}
        />
        <p className="mt-auto text-nowrap text-sm text-gray-500">
          {comment.length}/{MAX_COMMENT_LIMIT}
        </p>
      </div>
      <EnterButton />
    </>
  );
}

export default WriteText;
