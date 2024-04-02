import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4 ">
         
        <span className="grow"></span>
        
        <span className="grow-0 py-2 text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          Gmail
        </span>
        <span className="grow-0 py-2 text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          Images
        </span>
      
        <ProfileIcon />
      </div>
    </header>
  );
};

export default HomeHeader;
