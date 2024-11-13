import { useDispatch, useSelector } from "react-redux";
import { updateShowSidebar } from "../store/cartSlice";

function ResponsiveSidebar() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.store.showSidebar);
  return (
    <div
      className={`${
        showSidebar ? "fixed" : "hidden"
      } md:hidden inset-0 z-50 flex justify-end`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
        onClick={() => {
          dispatch(updateShowSidebar(false));
        }}
      />

      {/* Sidebar on the right */}
      <div
        className={`relative ${
          showSidebar ? "right-0" : "-right-[50rem]"
        } px-10 justify-center gap-5 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex bg-[white] z-50 `}
      >
        <div>Link 1</div>
        <div>Link 1</div>
        <div>Link 1</div>
        <div>Link 1</div>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
