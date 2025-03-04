function ScrollProgress() {
  return (
    <div className="w-[600px] ml-auto h-[2px] absolute bottom-40 right-14 hidden lg:block bg-black/25">
      <div className="w-0 scroll-progressbar h-full bg-black" />
    </div>
  );
}
export default ScrollProgress;
