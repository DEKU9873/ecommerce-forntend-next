import { Clock4, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const socialMedia = [
  { Icon: Instagram, color: "group-hover:text-[#E4405F]", link: "" },
  { Icon: Facebook, color: "group-hover:text-[#1877F2]", link: "" },
  { Icon: Linkedin, color: "group-hover:text-[#0A66C2]", link: "" },
  { Icon: Youtube, color: "group-hover:text-[#FF0000]", link: "" },
];

const quickLinks = [
  { title: "About Us", link: "" },
  { title: "Delivery Information", link: "" },
  { title: "Privacy Policy", link: "" },
  { title: "Terms & Conditions", link: "" },
  { title: "Contact Us", link: "" },
  { title: "FAQS", link: "" },
  { title: "Help", link: "" },
];

const categories = [
  { title: "Men", link: "" },
  { title: "Women", link: "" },
  { title: "Kids", link: "" },
  { title: "Accessories", link: "" },
  { title: "Shoes", link: "" },
  { title: "Watches", link: "" },
  { title: "Jeweller", link: "" },
];

const Footer = () => {
  return (
    <div className=" mb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-16 lg:px-40  border-t border-gray-300">
        {[
          { icon: MapPin, title: "Visit Us", text: "New Orlean, USA" },
          { icon: Phone, title: "Call Us", text: "+12 958 648 597" },
          { icon: Clock4, title: "Working Hours", text: "Mon - Sat: 10:00 AM - 7:00 PM" },
          { icon: Mail, title: "Email Us", text: "Shopcart@gmail.com" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 border-b border-gray-300 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 p-3">
              <item.icon />
              <div>
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 lg:px-40 mt-10">
        <div className="flex flex-col gap-3 p-3">
          <a href="#" className="font-bold text-2xl">
            Ecommerce
          </a>
          <p className="text-sm text-primary/50">
            Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {socialMedia.map((media, index) => (
              <div
                key={index}
                className="group w-10 h-10 rounded-full border border-primary/50 flex justify-center items-center"
              >
                <a
                  href={media.link}
                  className={`text-primary/50 transition-all duration-300 ${media.color} group-hover:scale-110`}
                >
                  <media.Icon className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="space-y-1">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="text-sm hover:text-primary transition-all duration-200">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <h2 className="font-bold text-lg">Categories</h2>
          <ul className="space-y-1">
            {categories.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="text-sm hover:text-primary transition-all duration-200">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <h2 className="font-bold text-lg">Newsletter</h2>
          <p className="text-sm text-primary/50">
            Subscribe to our newsletter to receive updates and exclusive offers.
          </p>
          <div className="flex flex-col mt-2">
            <Input placeholder="Enter your email" className="focus-visible:ring-0" />
            <Button className="mt-4">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-primary/60 border-t border-gray-200 pt-4 px-6">
        © {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
