import Page_Header from "@/components/Page_Header";
import ResumeContent from "@/components/ResumeContent";
import React from "react";

const Page:React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-center gap-12 max-[1200px]:flex-col">
        <div className="min-[1200px]:sticky top-6 flex min-[1200px]:h-[600px] min-[1200px]:py-2">
          <Page_Header />
        </div>
        <div >
          <ResumeContent />
        </div>
      </div>
    </>
  );
};

export default Page;

