import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import type { StatItem } from "../dashboard-type";

interface StatCardProps {
  title: string;
  icon: React.ReactNode;
  stats: StatItem[];
  onViewAll?: () => void;
}

export function StatCard({ title, icon, stats, onViewAll }: StatCardProps) {
  return (
    <Card className="shadow-sm border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-4 pt-5 px-6 space-y-0">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
          <div className="text-blue-600 bg-blue-50 p-1.5 rounded-md">
            {icon}
          </div>
          <span>{title}</span>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs text-blue-600 hover:text-blue-800 flex items-center font-medium transition-colors"
        >
          View all
          <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-2 flex-grow">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-medium">
                {stat.label}
              </span>
              <span className="text-[19px] font-semibold text-gray-900 tracking-tight">
                {formatNumber(stat.value)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
