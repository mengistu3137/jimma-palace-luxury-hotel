import { FEATURED_ROOMS } from "@/app/constants";
import { notFound } from "next/navigation";
import { FaWifi, FaTv, FaCoffee, FaShower, FaBed, FaUtensils, FaSnowflake, FaSwimmingPool, FaDumbbell, FaParking, FaWineBottle, FaHotTub } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

// Icon mapping for room features
const featureIcons = {
  'WiFi': <FaWifi />,
  'TV': <FaTv />,
  'Coffee Maker': <FaCoffee />,
  'Shower': <FaShower />,
  'King Bed': <FaBed />,
  'Mini Bar': <FaWineBottle />,
  'Air Conditioning': <FaSnowflake />,
  'Pool Access': <FaSwimmingPool />,
  'Gym Access': <FaDumbbell />,
  'Parking': <FaParking />,
  'Breakfast': <FaUtensils />,
  'Jacuzzi': <FaHotTub />
};

export default async function RoomDetailPage({ params }) {
  // You must await params in Next.js 15/16
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Find the room based on the unwrapped ID
  const room = FEATURED_ROOMS.find((r) => r.id.toString() === id);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-offwhite/30 pt-20">
      {/* Room Hero Gallery with Enhanced UX */}
      <section className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[400px] md:h-[500px]">
          {/* Main Image */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden group relative shadow-2xl">
            <img 
              src={room.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              alt={room.title} 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium bg-brand-green/90 px-3 py-1 rounded-full">Featured Room</span>
                  <h1 className="text-2xl md:text-3xl font-serif mt-2">{room.title}</h1>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm">4.9 (128 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Gallery */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-green/10 to-brand-lightgreen/10 flex flex-col items-center justify-center text-brand-green p-6 border border-brand-green/20 group hover:from-brand-green/20 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🏙️</div>
              <h3 className="font-bold text-lg text-center">Premium View</h3>
              <p className="text-center text-sm mt-2">Spectacular view of Jimma City skyline</p>
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Luxury Bathroom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Luxury Bathroom</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Image Indicator */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {[1,2,3].map((dot) => (
            <div 
              key={dot} 
              className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-brand-green' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </section>

      {/* Room Info Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Room Header with Tags */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium">Luxury Suite</span>
                <span className="px-3 py-1 bg-brand-lightgreen/10 text-brand-lightgreen rounded-full text-sm font-medium">Best Seller</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Free Cancellation</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-green mb-2">{room.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-brand-grey font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <FaBed className="text-brand-green" />
                  </div>
                  <span>1 King Bed</span>
                </div>
                <div className="hidden md:block text-gray-300">•</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <span className="text-brand-green">👤</span>
                  </div>
                  <span>2 Adults</span>
                </div>
                <div className="hidden md:block text-gray-300">•</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <span className="text-brand-green">📐</span>
                  </div>
                  <span>45m² Space</span>
                </div>
              </div>
            </div>

            {/* Room Description */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-serif text-brand-green mb-4">Room Overview</h2>
              <p className="text-lg text-brand-grey leading-relaxed">
                Experience the pinnacle of hospitality in our {room.title}. Designed with 
                modern Ethiopian aesthetics, this space offers everything from high-speed 
                fiber optic internet to a fully stocked minibar. Wake up to stunning views 
                of Jimma City and enjoy premium amenities throughout your stay.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-medium text-brand-green mb-3">What Makes This Room Special</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <IoMdCheckmarkCircle className="text-brand-lightgreen text-xl mt-0.5 flex-shrink-0" />
                    <span className="text-brand-grey">Floor-to-ceiling windows with panoramic city views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IoMdCheckmarkCircle className="text-brand-lightgreen text-xl mt-0.5 flex-shrink-0" />
                    <span className="text-brand-grey">Smart room technology with voice control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IoMdCheckmarkCircle className="text-brand-lightgreen text-xl mt-0.5 flex-shrink-0" />
                    <span className="text-brand-grey">Ethiopian artisanal decor and furnishings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-serif text-brand-green mb-6">Room Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {room.features.map((feature, i) => {
                  const icon = featureIcons[feature] || <IoMdCheckmarkCircle />;
                  return (
                    <div 
                      key={i} 
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="text-2xl text-brand-green mb-2 group-hover:scale-110 transition-transform">
                        {icon}
                      </div>
                      <span className="text-sm text-center font-medium text-brand-grey group-hover:text-brand-green transition-colors">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-brand-green/5 to-brand-lightgreen/5 p-6 rounded-2xl border border-brand-green/10">
              <h2 className="text-2xl font-serif text-brand-green mb-4">Important Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-brand-green mb-2">Check-in / Check-out</h3>
                  <p className="text-brand-grey">3:00 PM / 11:00 AM</p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-green mb-2">Cancellation Policy</h3>
                  <p className="text-brand-grey">Free cancellation up to 48 hours before check-in</p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-green mb-2">Room Service</h3>
                  <p className="text-brand-grey">24-hour room service available</p>
                </div>
                <div>
                  <h3 className="font-medium text-brand-green mb-2">Housekeeping</h3>
                  <p className="text-brand-grey">Daily housekeeping included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Side Card - Sticky */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-xl sticky top-28">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-brand-grey mb-2">Starting From</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-brand-green">${room.price}</span>
                    <span className="text-lg font-normal text-gray-400 ml-2">/ night</span>
                  </div>
                  <p className="text-sm text-brand-grey mt-2">+ $45 taxes & fees per night</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-1">Check-in</label>
                      <div className="p-3 border border-gray-300 rounded-lg bg-white">Feb 15, 2024</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-1">Check-out</label>
                      <div className="p-3 border border-gray-300 rounded-lg bg-white">Feb 18, 2024</div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brand-grey mb-1">Guests</label>
                    <div className="p-3 border border-gray-300 rounded-lg bg-white flex justify-between items-center">
                      <span>2 Adults</span>
                      <span className="text-gray-400">▼</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-brand-grey">3 nights</span>
                    <span className="font-medium">${room.price * 3}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-brand-grey">Taxes & fees</span>
                    <span className="font-medium">$135</span>
                  </div>
                  <div className="flex justify-between mb-4 pt-4 border-t border-gray-200 font-bold text-lg">
                    <span>Total</span>
                    <span className="text-brand-green">${(room.price * 3) + 135}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-brand-green to-brand-lightgreen text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Check Availability</span>
                    <span className="text-xl">→</span>
                  </button>
                  
                  <p className="text-center text-sm text-brand-grey mt-4">
                    You won't be charged yet
                  </p>
                </div>
                
                <div className="text-center text-sm text-brand-grey pt-4 border-t border-gray-100">
                  <p>📞 Need help? Call us at 1-800-HOTEL</p>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-medium text-brand-green mb-4">Why Book With Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-sm">Best price guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🛡️</span>
                  </div>
                  <span className="text-sm">Secure booking with encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-lg">⭐</span>
                  </div>
                  <span className="text-sm">4.9/5 guest rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}