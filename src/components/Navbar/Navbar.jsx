export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-[5%] landscape:py-[3%]">
      <img src="logo.svg" alt="" className="w-[8em]" />
      <div className="flex gap-[1em] font-others text-desaturated-blue landscape:gap-[3em]">
        <p>Features</p>
        <p>Team</p>
        <p>Sign In</p>
      </div>
    </div>
  );
}
