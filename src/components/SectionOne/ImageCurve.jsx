export default function ImageCurve() {
  return (
    <div>
      <img
        src="bg-curve-mobile.svg"
        alt=""
        className="absolute bottom-full w-full landscape:hidden"
      />
      <img
        src="bg-curve-desktop.svg"
        alt=""
        className="hidden landscape:block absolute bottom-full w-full"
      />
    </div>
  );
}
