import TrustedClientImage1 from "@/assets/images/TrustedClient1.png";
import TrustedClientImage2 from "@/assets/images/TrustedClient2.png";
import TrustedClientImage3 from "@/assets/images/TrustedClient3.png";
import TrustedClientImage4 from "@/assets/images/TrustedClient4.png";
import TrustedClientImage5 from "@/assets/images/TrustedClient5.png";
import TrustedClientImage6 from "@/assets/images/TrustedClient6.png";
import ClientImage1 from "@/assets/images/Client1.png";
import ClientImage2 from "@/assets/images/Client2.png";
import ClientImage3 from "@/assets/images/Client3.png";

export const NavItems = [
  { label: "Home", url: "/Home" },
  { label: "About US", url: "/" },
  { label: "Services", url: "/" },
  { label: "Portfolio", url: "/" },
  { label: "Blogs", url: "/" },
];

export const FooterOptions = [
  {
    title: "Service",
    options: [
      { label: "Web Development", url: "/" },
      { label: "Mobile App Development", url: "/" },
      { label: "Graphical Designing", url: "/" },
      { label: "Web Design", url: "/" },
      { label: "CRM Development", url: "/" },
    ],
  },
  {
    title: "Company",
    options: [
      { label: "Home", url: "/" },
      { label: "About US", url: "/" },
      { label: "Services", url: "/" },
      { label: "Portfolio", url: "/" },
      { label: "Blogs", url: "/" },
    ],
  },
  {
    title: "Our Social Media",
    options: [
      { label: "Instagram", url: "/" },
      { label: "Facebook", url: "/" },
      { label: "Twitter", url: "/" },
      { label: "LinkedIn", url: "/" },
      { label: "Github", url: "/" },
    ],
  },
];

export const ImageContent = [
  {
    imageUrl: TrustedClientImage1,
  },
  {
    imageUrl: TrustedClientImage2,
  },
  {
    imageUrl: TrustedClientImage3,
  },
  {
    imageUrl: TrustedClientImage4,
  },
  {
    imageUrl: TrustedClientImage5,
  },
  {
    imageUrl: TrustedClientImage6,
  },
];

export const ClientData = [
  {
    imageUrl: ClientImage3,
    title: "Mila McSabbu",
    details:
      "“An easy-to-use catalog manager that helps you keep your music metadata organized.”",
  },
  {
    imageUrl: ClientImage2,
    title: "Robert Fox",
    details:
      "“Upload your recordings and input the metadata and ownership details.”",
  },
  {
    imageUrl: ClientImage1,
    title: "Jenny Wilson",
    details:
      "“Create multiple aliases for music creators in the same contact record and eliminate double-entry on contact information.”",
  },
];
