import Link from 'next/link';

export default function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-bold">
          ${room.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-3 text-brand-green">{room.title}</h3>
        <ul className="flex flex-wrap gap-2 mb-6">
          {room.features.map((feature, index) => (
            <li key={index} className="text-xs bg-brand-offwhite text-brand-grey px-2 py-1 rounded">
              • {feature}
            </li>
          ))}
        </ul>
        <Link 
          href={`/rooms/${room.id}`}
          className="block text-center border-2 border-brand-green text-brand-green font-bold py-2 rounded hover:bg-brand-green hover:text-white transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}