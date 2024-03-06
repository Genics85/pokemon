function SideDrawer() {
  return (
    <div
      className={`${
        false ? "" : "hidden"
      } fixed flex justify-end  top-0 right-0 z-40 h-screen w-screen bg-black bg-opacity-20  `}
    >
      <div className=" flex relative flex-col justify-between p-3 pt-0 md:p-7 md:pt-0 no-scrollbar overflow-y-auto bg-white w-full md:w-1/3 h-full">
        hello world
      </div>
    </div>
  );
}

export default SideDrawer;
