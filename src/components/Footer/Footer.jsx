export default function Footer() {
  return (
    <div className="bg-very-dark-blue px-[5%] py-[15%] grid gap-[3em] font-others text-light-grey landscape:grid-cols-[0.4fr_0.2fr_0.2fr_0.4fr] landscape:items-start landscape:py-[8%]">
      <div className="landscape:col-start-1 landscape:col-end-5">
        <img src="footer-logo.svg" alt="" className="w-[10em]" />
      </div>
      <div className="grid gap-[1em]">
        <div className="flex items-center gap-[1em]">
          <img src="icon-phone.svg" alt="" className="w-[1em]" />
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div className="flex items-center gap-[1em]">
          <img src="icon-email.svg" alt="" className="w-[1em]" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="grid gap-[1em]">
        <p className="hover:cursor-pointer hover:text-desaturated-blue">
          About Us
        </p>
        <p className="hover:cursor-pointer hover:text-desaturated-blue">Jobs</p>
        <p className="hover:cursor-pointer hover:text-desaturated-blue">
          Press
        </p>
        <p className="hover:cursor-pointer hover:text-desaturated-blue">Blog</p>
      </div>
      <div className="grid gap-[1em]">
        <p className="hover:cursor-pointer hover:text-desaturated-blue">
          Contact Us
        </p>
        <p className="hover:cursor-pointer hover:text-desaturated-blue">
          Terms
        </p>
        <p className="hover:cursor-pointer hover:text-desaturated-blue">
          Privacy
        </p>
      </div>
      <div className="flex gap-[1em] justify-center">
        <div className="border-[thin] rounded-full w-[2.5em] h-[2.5em] grid content-center justify-items-center hover:cursor-pointer group hover:border-bright-blue">
          <i className="fa-brands fa-facebook-f group-hover:text-bright-blue"></i>
        </div>
        <div className="border-[thin] rounded-full w-[2.5em] h-[2.5em] grid content-center justify-items-center hover:cursor-pointer group hover:border-bright-blue">
          <i className="fa-brands fa-twitter group-hover:text-bright-blue"></i>
        </div>
        <div className="border-[thin] rounded-full w-[2.5em] h-[2.5em] grid content-center justify-items-center hover:cursor-pointer group hover:border-bright-blue">
          <i className="fa-brands fa-instagram group-hover:text-bright-blue"></i>
        </div>
      </div>
    </div>
  );
}
