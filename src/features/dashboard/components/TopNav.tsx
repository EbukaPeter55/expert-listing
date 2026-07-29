import { useState } from "react";
import { FileText, Wallet, Store, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-primary text-white w-full sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative z-50 bg-brand-primary">
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785335249/logo-expert-listing_bojehi.png"
            alt="Expert Listing brand logo"
            className="h-5 sm:h-6 lg:h-7 w-auto max-w-[160px] sm:max-w-[200px] object-contain shrink-0"
          />
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button className="hover:opacity-80 transition-opacity relative">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337071/Comments_xcbqvg.png" alt="Comments" className="w-5 h-5 object-contain" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337178/Activity_Log_ensnij.png" alt="Activity Log" className="w-5 h-5 object-contain" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337325/Waitlist_i9benx.png" alt="Waitlist" className="w-5 h-5 object-contain" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337432/wallet-2_zxzdys.png" alt="Waitlist" className="w-5 h-5 object-contain" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337555/shop_gxmcqp.png" alt="Shop" className="w-5 h-5 object-contain" />
            </button>
          </div>

          <div className="flex items-center gap-4 md:pl-4 md:border-l md:border-white/20">
            <button
              className="md:hidden hover:opacity-80 transition-transform active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Avatar className="w-8 h-8 border border-white/30 cursor-pointer hover:border-white transition-colors shrink-0">
              <AvatarImage src="" />
              <AvatarFallback className="bg-white text-brand-primary font-semibold text-sm">D</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-brand-primary border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top z-40",
          isMenuOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex justify-around items-center px-4 py-6">
          <button className="hover:opacity-80 transition-transform hover:scale-110 relative flex flex-col items-center gap-1">
            <div className="relative">
              <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337071/Comments_xcbqvg.png" alt="Comments" className="w-5 h-5 object-contain" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_0_2px_var(--color-brand-primary)]"></span>
            </div>
          </button>
          <button className="hover:opacity-80 transition-transform hover:scale-110">
            <img src="https://res.cloudinary.com/peterdbrainy/image/upload/v1785337178/Activity_Log_ensnij.png" alt="Activity Log" className="w-5 h-5 object-contain" />
          </button>
          <button className="hover:opacity-80 transition-transform hover:scale-110">
            <FileText className="w-5 h-5" />
          </button>
          <button className="hover:opacity-80 transition-transform hover:scale-110">
            <Wallet className="w-5 h-5" />
          </button>
          <button className="hover:opacity-80 transition-transform hover:scale-110">
            <Store className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

