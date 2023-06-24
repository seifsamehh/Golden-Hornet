const Offline = () => {
  function handleClick() {
    window.location.reload();
  }
  return (
    // <!-- ====== offline Section Start -->
    <section className="bg-[#0f74bd] relative z-10 flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                OFFLINE
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Oops! You are offline
              </h4>
              <p className="mb-8 text-lg text-white">
                Please check your network
              </p>
              <button
                onClick={handleClick}
                aria-label="Reload"
                className="inline-block px-8 py-3 text-base font-semibold text-center text-black bg-white border border-white rounded-lg"
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        <div className="flex w-1/3 h-full">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
      </div>
    </section>
    // <!-- ====== offline Section End -->
  );
};

export default Offline;
