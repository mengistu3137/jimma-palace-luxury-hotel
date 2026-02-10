// app/constants/index.js

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/rooms', key: 'rooms', label: 'Rooms & Suites' },
  { href: '/dining', key: 'dining', label: 'Dining' },
  { href: '/amenities', key: 'amenities', label: 'Amenities' },
  { href: '/gallery', key: 'gallery', label: 'Gallery' },
  { href: '/contact', key: 'contact', label: 'Contact' },
];
export const FEATURED_ROOMS = [
  {
    id: 1,
    title: "Deluxe King Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    price: "120",
    features: ["City View", "Free Wi-Fi", "King Bed"],
  },
  {
    id: 2,
    title: "Executive Suite",
    image: "https://plus.unsplash.com/premium_photo-1661963630748-3de7ab820570?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D",
    price: "250",
    features: ["Private Lounge", "Mini Bar", "24/7 Service"],
  },
  {
    id: 3,
    title: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    price: "450",
    features: ["Panoramic View", "Jacuzzi", "Personal Chef"],
  },
];

export const AMENITIES = [
  { title: "Fine Dining", icon: "🍽️", desc: "Local & International cuisine." },
  { title: "Wellness Spa", icon: "💆", desc: "Relax and rejuvenate your soul." },
  { title: "Conference Hall", icon: "🏢", desc: "Perfect for corporate events." },
  { title: "Swimming Pool", icon: "🏊", desc: "Olympic size pool with bar." },
];// Add these to your existing file
export const DINING_VENUES = [
  {
    title: "The Palace Grill",
    desc: "Our signature restaurant offering a fusion of international flavors and authentic Ethiopian cuisine.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    hours: "6:30 AM - 10:30 PM"
  },
  {
    title: "Green View Bar",
    desc: "Relax with a selection of premium wines, craft cocktails, and the famous Jimma coffee.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", // Replace with bar image
    hours: "11:00 AM - 12:00 AM"
  }
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", category: "Exterior" },
  { id: 2, src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304", category: "Rooms" },
  { id: 3, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", category: "Suites" },
  { id: 4, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b", category: "Dining" },
  { id: 5, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef", category: "Spa" },
  { id: 6, src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", category: "Pool" },
];