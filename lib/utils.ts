export const categoryMenuList = [
  {
    id: 1,
    title: "Headwear",
    src: "/headwear_icon.png",
    href: "/shop/headwear"
  },
  {
    id: 2,
    title: "Tops",
    src: "/tops_icon.png",
    href: "/shop/tops"
  },
  {
    id: 3,
    title: "Bottoms",
    src: "/bottoms_icon.png",
    href: "/shop/bottoms"
  },
  {
    id: 4,
    title: "Footwear",
    src: "/footwear_icon.png",
    href: "/shop/footwear"
  },
  {
    id: 5,
    title: "Underwear",
    src: "/underwear_icon.png",
    href: "/shop/underwear"
  },
  {
    id: 6,
    title: "Accessories",
    src: "/accessories_icon.png",
    href: "/shop/accessories"
  }
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About StyleHub", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "StyleHub Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at StyleHub", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
