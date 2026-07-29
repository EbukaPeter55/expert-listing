import { useState } from "react";
import { MessageSquare, History, FileText, Wallet, Store, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-primary text-white w-full sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between relative z-50 bg-brand-primary">
        <div className="flex items-center gap-2">
          {/* Placeholder logo icon */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-sm transform rotate-45 flex items-center justify-center shrink-0">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm transform -rotate-45" />
          </div>
          <span className="text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap">Expert Listing</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button className="hover:opacity-80 transition-opacity relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <History className="w-5 h-5" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <FileText className="w-5 h-5" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <Wallet className="w-5 h-5" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <Store className="w-5 h-5" />
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
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_0_2px_var(--color-brand-primary)]"></span>
            </div>
          </button>
          <button className="hover:opacity-80 transition-transform hover:scale-110">
            <History className="w-5 h-5" />
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

