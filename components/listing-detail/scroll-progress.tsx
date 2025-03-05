function ScrollProgress() {
  return (
    <div className="w-[600px] ml-auto h-[2px] absolute bottom-36 right-10 hidden lg:block bg-[#858175]">
      <div className="w-0 scroll-progressbar h-full bg-white" />
    </div>
  );
}
export default ScrollProgress;
