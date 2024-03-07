import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import { setTheme } from "../redux/themeSlice";
import { useClickOutsideToClose } from "../hooks/useClickOutsideToClose";
import { RefObject, useRef } from "react";

type ThemeModalType = {
    state:boolean,
    close:()=>void
}

function ThemeModal({state,close}:ThemeModalType) {
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);
  const dispatch = useDispatch();

  const refObj =useRef<HTMLDivElement>(null);
  useClickOutsideToClose(refObj,close)

  return (
    <div
      className={`fixed top-0 flex z-20 items-end md:items-center justify-center bg-black bg-opacity-40 backdrop-blur-[2px] ${
        state ? "" : "hidden"
      } w-full top-0 right-0 h-screen max-h-full`}
    >
      <div ref={refObj} className="fixed w-fit max-h-full">
        <div  className="relative bg-white rounded-xl flex flex-col items-center shadow overflow-hidden">
          <p className="font-semibold head p-2">Choose Theme</p>
          <div className="bg-[#f1f1f1] flex items-center justify-center  p-10 gap-5 w-full">
            <button
              onClick={() => dispatch(setTheme("#E85382"))}
              className={`size-12 rounded-full ring-offset-2 ${
                theme == "#E85382" ? "ring-[2px] ring-gray-500" : ""
              }  bg-[#E85382]`}
            ></button>
            <button
              onClick={() => dispatch(setTheme("#39BADF"))}
              className={`size-12 rounded-full ring-offset-2 ${
                theme == "#39BADF" ? "ring-[2px] ring-gray-500" : ""
              }   bg-[#39BADF]`}
            ></button>
            <button
              onClick={() => dispatch(setTheme("#E1A725"))}
              className={`size-12 rounded-full ring-offset-2 ${
                theme == "#E1A725" ? "ring-[2px] ring-gray-500" : ""
              }   bg-[#E1A725]`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;
