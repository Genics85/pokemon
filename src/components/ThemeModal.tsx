function ThemeModal() {
  return (
    <div
      className={`fixed top-0 flex z-20 items-end md:items-center justify-center bg-black bg-opacity-20 ${
        true ? "" : "hidden"
      } w-full top-0 right-0 h-screen max-h-full`}
    >
      <div className="fixed w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-tl-2xl rounded-tr-2xl md:rounded-xl shadow ">
          <p className="font-semibold head">Choose Theme</p>
          <div className="bg-[#f1f1f1] flex gap-3">
            <div
              style={{ backgroundColor: theme }}
              className="size-7 rounded-full ring-offset-2  ring-[2px] ring-gray-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;
