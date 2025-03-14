import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="sm:flex grid sm:grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            numquam quod eum corporis! Dolorum optio distinctio, dolore
            recusandae nam alias quos, modi sint dicta ducimus quidem
            laudantium, soluta consequatur. Praesentium.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8801810-00000</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center">
          Copyright 2025@
          <a href="https://halaluddin.netlify.app/"> MD Halal Uddin </a>
          -All Right Reserver
        </p>
      </div>
    </div>
  );
};

export default Footer;
