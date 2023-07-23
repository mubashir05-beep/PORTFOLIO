import Page_Header from "@/components/Page_Header";
import ResumeContent from "@/components/ResumeContent";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex w-full justify-center gap-12 max-[1200px]:flex-col">
        <div className="min-[1200px]:sticky top-6 flex min-[1200px]:h-[600px] ">
          <Page_Header />
        </div>
        <div className="h-[10000px]">
          <ResumeContent />
        </div>
      </div>
    </>
  );
};

export default Page;

