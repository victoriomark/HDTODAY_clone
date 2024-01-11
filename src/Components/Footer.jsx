import React from "react";
import Logo from "../assets/LogoHdToday.png";
function Footer() {
   const FooterLink = ["Android App", "Terms of service", "Sitemap", "FAQ"];
   return (
      <footer className='container-fluid mt-5 d-lg-flex gap-5 bg-black p-3 justify-content-center align-items-center  '>
         <div>
            <img width={200} src={Logo} alt='' />
            <p className="text-light">&copy; HD Today 2024</p>
         </div>
         <div>
            <div className='row gap-1 '>
               <p className='card-text text-light col-lg-5'>
                  HDToday is a Free Movies streaming site with zero ads. We let
                  you watch movies online without having to register or paying,
                  with over 10000 movies and TV-Series. You can also Download
                  full movies from HDToday and watch it later if you want.
               </p>
               <ul>
                  {FooterLink.map((link, idex) => {
                     return (
                        <li style={{
                            cursor:"pointer"
                        }} className='list-group text-primary' key={idex}>
                           {link}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
