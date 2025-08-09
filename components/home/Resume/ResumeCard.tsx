import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  image?: string;
  date?: string;
  description: string;
  subject?: string;
};

function ResumeCard({ role, Icon, date, description, image, subject }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="sm:w-18 sm:h-18 w-20 bg-blue-950 rounded-full flex items-center justify-center flex-col">
          {image ? (
            <Image
              src={image}
              alt="company"
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : Icon ? (
            <Icon className="sm:w-8 w-6 h-6 text-white" />
          ) : null}
        </div>
        <div className="flex-1">
          {date && (
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-yellow-500 text-gray-600 w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}
          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>
          <h2 className="text-xl text-yellow-500">{subject}</h2>
          <p className="text-gray-300 text-sm sm:text-base pt-3  text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
