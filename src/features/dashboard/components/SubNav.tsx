import { cn } from "@/lib/utils";
import { navItems } from "../constants";

export function SubNav() {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-40 overflow-x-auto">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-4 py-3 w-full sm:gap-8 lg:gap-[60px] xl:gap-[90px]">
          {navItems.map((item) => {
            const IconComponent = typeof item.icon === 'string' ? null : item.icon;
            return (
              <li key={item.name}>
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ease-in-out whitespace-nowrap group cursor-pointer",
                    item.isActive
                      ? "bg-brand-light text-brand-active font-medium"
                      : "text-gray-500 hover:bg-brand-light hover:text-brand-active"
                  )}
                >
                  {typeof item.icon === "string" ? (
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-5 h-5 object-contain" 
                    />
                  ) : IconComponent && (
                    <IconComponent className={cn("w-5 h-5", item.isActive ? "text-brand-active" : "text-gray-400 group-hover:text-brand-active transition-colors")} />
                  )}
                  <span className="text-sm">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
