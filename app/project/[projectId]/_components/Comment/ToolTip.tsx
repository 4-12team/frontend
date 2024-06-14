import React from "react";
import Image from "next/image";
import infoIcon from "@/public/icons/info.svg";

const ToolTip = () => {
  return (
    <div className="group relative">
      <Image src={infoIcon} alt="평가 기준 설명." width={24} height={24} />
      <div className="absolute left-6 translate-y-1 text-nowrap rounded-bl-lg rounded-br-lg rounded-tr-lg bg-gray-800 p-4 text-sm text-white opacity-0 transition-all duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        1. 아이디어 부문은 프로젝트의 독창성을 의미합니다.
        <br />
        2. 디자인 부문은 프로젝트의 사용성과 미적 완성도를 의미합니다.
        <br />
        3. 기능은 서비스 요소들의 기능적 완성도와 구현 정도를 의미합니다.
        <br />
        4. 완성도는 전반적인 서비스의 만족감과 사용 후 만족감을 의미합니다.
      </div>
    </div>
  );
};

export default ToolTip;
