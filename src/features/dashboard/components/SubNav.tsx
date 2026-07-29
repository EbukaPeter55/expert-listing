import { cn } from "@/lib/utils";
import { navItems } from "../constants";

export function SubNav() {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-40 overflow-x-auto">
      <div className="flex items-center px-6 min-w-max mx-auto max-w-7xl">
        <ul className="flex items-center gap-2 py-3 w-full justify-between sm:justify-start sm:gap-6 lg:gap-12">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ease-in-out whitespace-nowrap group",
                    item.isActive
                      ? "bg-brand-light text-brand-primary font-medium"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn("w-5 h-5", item.isActive ? "text-brand-primary" : "text-gray-400 group-hover:text-gray-600 transition-colors")} />
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
