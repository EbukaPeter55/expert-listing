import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  image: string;
  category: string;
  title?: string;
  location?: string;
  value: string;
  showToggle?: boolean;
  activeToggle?: string;
  hasControls?: boolean;
  hasChat?: boolean;
}

export function ImageCard({
  image,
  category,
  title,
  location,
  value,
  showToggle,
  activeToggle = "Live Listings",
  hasControls,
  hasChat
}: ImageCardProps) {
  return (
    <div className="relative h-[320px] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top Toggle */}
      {showToggle && (
        <div className="absolute top-4 left-4 right-4 flex gap-2">
          <div className="flex bg-black/40 backdrop-blur-md rounded-md p-1 border border-white/10">
            <button className={cn(
              "px-3 py-1 text-[10px] font-medium rounded transition-colors flex items-center gap-1.5",
              activeToggle === "Live Listings" ? "bg-black/60 text-yellow-400" : "text-white/70 hover:text-white"
            )}>
              {activeToggle === "Live Listings" && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
              Live Listings
            </button>
            <button className={cn(
              "px-3 py-1 text-[10px] font-medium rounded transition-colors flex items-center gap-1.5",
              activeToggle === "All Listings" ? "bg-black/60 text-yellow-400" : "text-white/70 hover:text-white"
            )}>
              {activeToggle === "All Listings" && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
              All Listings
            </button>
          </div>
        </div>
      )}

      {hasControls && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Chat Button */}
      {hasChat && (
        <button className="absolute right-4 bottom-[80px] p-3 rounded-full bg-black/60 backdrop-blur-md text-white shadow-lg hover:bg-black/80 transition-transform hover:scale-105 z-10">
          <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785338887/messages-3_bhz2o3.png" alt="Chat" className="w-5 h-5 object-contain" />
        </button>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">{category}</span>
          {title && <h3 className="text-base font-bold text-white leading-tight">{title}</h3>}
          {location && <span className="text-xs text-white/70">{location}</span>}
          <span className="text-xl font-bold text-yellow-400 mt-1">{value}</span>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 right-6 flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
