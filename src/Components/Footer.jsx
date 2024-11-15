import React from "react"


const Footer = () => {
  
  return (
    <>
    <div className="mt-[6px] py-[7px]">
    <div className="footer-div bg-[#111e] w-full text-[#fffc] grid gap-y-[1rem] grid-cols-2 md:grid-cols-4 items-start pl-[20px] pr-[20px] pt-[10px] pb-[10px]">
    <div className="support-div">
      <h1 className=" text-[#FF0078] font-semibold">SUPPORT</h1>
      <ul>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Contact us</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Promotions & Sale</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Track Order</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Privacy Policy</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Terms & Conditions</a></li>
    </ul>
    </div>
    <div className="faq-div pt-[25px]">
      <ul>
        <li><a href="https://my-project-orpin-nine.vercel.app/">FAQs</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">My Account</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Return Policy</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Tech Glossary</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Initial Return</a></li>
      </ul>
    </div>
    <div className="about-div justify-items-start">
      <h1 className="text-[#FF0078] font-semibold">ABOUT</h1>
      <ul>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Company</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Corporate News</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Press Center</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Investors</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Careers</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Store Finder</a></li>
      </ul>
    </div>
      <div className="social-media ">
      <ul>
        <h1 className="text-[#FF0078] font-semibold">Stay Up to Date</h1>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Github</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">Codpen</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">X</a></li>
        <li><a href="https://my-project-orpin-nine.vercel.app/">LinkedIn</a></li>
      </ul>
    </div>
    </div>
    <p className="text-right text-[#111a] pr-[17px] col-start-1 col-end-4 md:col-start-3 md:col-end-5">
 Alright<sup>&copy;</sup> reserved  by Mohammed Ismail 2024
    </p>
    </div>
    </>
    )
}


export default Footer
