import TrustedClientImage1 from "@/assets/images/TrustedClient1.png";
import TrustedClientImage2 from "@/assets/images/TrustedClient2.png";
import TrustedClientImage3 from "@/assets/images/TrustedClient3.png";
import TrustedClientImage4 from "@/assets/images/TrustedClient4.png";
import TrustedClientImage5 from "@/assets/images/TrustedClient5.png";
import TrustedClientImage6 from "@/assets/images/TrustedClient6.png";
import ClientImage1 from "@/assets/images/Client1.png";
import ClientImage2 from "@/assets/images/Client2.png";
import ClientImage3 from "@/assets/images/Client3.png";
import PhoneIcon from "@/assets/icons/phone";
import LocationIcon from "@/assets/icons/location";

import ArrowUp from "@/assets/images/arrow-up.png";
import ArrowDown from "@/assets/images/arrow-down.png";

export const NavItems = [
  { label: "Home", url: "/home" },
  { label: "About US", url: "/aboutus" },
  { label: "Services", url: "/services" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Blogs", url: "/blogs" },
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

export const ContactData = [
  {
    icon: <PhoneIcon />,
    title: "Phone Number",
    value: "+92 (300)161-027-1",
  },
  {
    icon: <PhoneIcon />,
    title: "Address",
    value: "607 Q - Block Johar Town Lahore, Punjab Pakistan",
  },
];

export const emailValidationRules = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email address",
  },
};

export const firstNameValidationRules = {
  required: "First Name is required",
};

export const lastNamenameValidationRules = {
  required: "Last Name is required",
};

export const workData = [
  {
    sirNo: 1,
    title: "Research",
    details: "We do research before we start any projects",
    arrow: ArrowUp,
  },
  {
    sirNo: 2,
    title: "Designing",
    details: "Designed according to client's requirements",
    arrow: ArrowDown,
  },
  {
    sirNo: 3,
    title: "Development",
    details: "Developed by skilled team developers",
    arrow: ArrowUp,
  },
  {
    sirNo: 4,
    title: "Live Testing",
    details: "After completing the work, live test is done",
  },
];

export const OverViewData = [
  {
    srNo: "01",
    title: "Elevating Customer Relationship Management ",
    details:
      "to the Next Level. With powerful tools and insights, we help you streamline customer interactions, personalize engagements, and make data-driven decisions",
  },
  {
    srNo: "02",
    title: "Your Path to Mobile Brilliance ",
    details:
      "Harness the power of cutting-edge Mobile technology, stunning design, and seamless user experiences with our expert team. Join us on the journey to redefine the future of mobile",
  },
  {
    srNo: "03",
    title: "Your Journey to Online Excellence ",
    details: `Whether you're launching a new brand, upgrading your website, boost your online performance, we're here to guide you. Join us in shaping the future of your digital journey." `,
  },
];
