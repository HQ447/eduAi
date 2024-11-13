function ResponsiveSidebar() {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" />

      {/* Sidebar on the right */}
      <div className="relative -right-80 px-10 justify-center gap-5 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex bg-[white] z-50 ">
        <div>Link 1</div>
        <div>Link 1</div>
        <div>Link 1</div>
        <div>Link 1</div>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
