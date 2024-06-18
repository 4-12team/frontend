"use client";

import React, { useState } from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import Button from "@/app/_components/Button/Button";
import ToolTip from "../Comment/ToolTip";
import WriteCommentShield from "../Shield/WriteCommentShield";

const ratingCategory = [
  { id: 0, name: "아이디어" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기능" },
  { id: 3, name: "완성도" },
];

const isLogin = true;
const MAX_COMMENT_LIMIT = 150;
const MAX_STAR = 5;

function WriteCommentSection() {
  const [ratings, setRatings] = useState([0, 0, 0, 0]);

  const handleRating = (categoryId: number, rating: number) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [categoryId]: rating,
    }));
  };

  return (
    <section className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      {!isLogin && <WriteCommentShield />}
      <div className={`${!isLogin && "blur-sm"}`}>
        <div className="mb-8 flex items-center gap-1">
          <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
          <ToolTip />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between px-3">
            {ratingCategory.map(category => (
              <div className="flex flex-col gap-1.5" key={category.id}>
                <p className="text-base font-medium text-gray-900">{category.name}</p>
                <div className="flex items-center">
                  {[...Array(ratings[category.id])].map((_, index) => (
                    <Image
                      src={fullStarIcon}
                      alt="노란색 별."
                      width={40}
                      key={index}
                      onClick={() => handleRating(category.id, index + 1)}
                    />
                  ))}
                  {[...Array(MAX_STAR - ratings[category.id])].map((_, index) => (
                    <Image
                      src={emptyStarIcon}
                      alt="회색 별."
                      width={40}
                      key={index}
                      onClick={() => handleRating(category.id, ratings[category.id] + index + 1)}
                    />
                  ))}
                  <p className="h-full min-w-7 content-end text-sm tracking-widest text-gray-600">
                    {ratings[category.id]}/{MAX_STAR}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 bg-white p-3 text-gray-500">
            <textarea
              className="h-full w-full resize-none bg-white text-sm text-black outline-none placeholder:text-gray-500"
              placeholder="댓글을 입력해주세요"
              maxLength={MAX_COMMENT_LIMIT}
            />
            <p className="mt-auto text-nowrap text-sm text-gray-500">0/{MAX_COMMENT_LIMIT}</p>
          </div>
          <Button className="ml-auto" buttonSize="small" bgColor="mainBlue">
            등록
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WriteCommentSection;
