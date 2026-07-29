import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "../utils";
import { salesData, summaryStats } from "../data/mockData";
import { cn } from "@/lib/utils";

export function SalesOverview() {
  const [timeFilter, setTimeFilter] = useState("1 Year");

  const filters = ["1 Week", "1 Month", "1 Year"];

  const renderStatCard = (title: string, data: { amount: number, percentage: number, isPositive: boolean }, titleColor: string) => {
    const amountStr = formatCurrency(data.amount);

    return (
      <div className="border border-gray-100 rounded-xl p-4 md:p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <h3 className={cn("text-[19px] font-bold tracking-tight mb-2", titleColor)}>
            {amountStr}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">
              {title}
            </span>
            <span className={cn(
              "text-[10px] flex items-center px-1.5 py-0.5 rounded-full font-medium shrink-0",
              data.isPositive ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
            )}>
              {data.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
              {Math.abs(data.percentage)}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="p-0 overflow-hidden border-gray-100 shadow-sm h-full">
      <div className="p-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Sales Overview</h2>
            <p className="text-xs text-gray-500 mt-1">Showing overview Jan 2022 - Sep 2022</p>
          </div>

          <div className="flex items-center self-start md:self-auto space-x-2">
            <button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
              View Transactions
            </button>
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <div className="flex bg-gray-50/50 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={cn(
                  "px-4 py-1.5 text-xs font-medium rounded-md transition-all",
                  timeFilter === filter
                    ? "bg-gray-100 text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 px-6 pb-6">
        <div className="flex-1 min-w-0 relative flex items-center group">
          <button className="absolute left-0 z-10 p-1 bg-white border border-gray-100 rounded-full shadow-sm text-gray-400 hover:text-gray-700 transition-colors opacity-0 group-hover:opacity-100 -translate-x-1/2">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={2} barSize={6}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#888888' }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#888888' }}
                  tickFormatter={(val) => val === 0 ? "0" : `${val}m`}
                />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="TotalInflow" fill="#4338ca" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Payout" fill="#16a34a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="MRR" fill="#ec4899" radius={[4, 4, 0, 0]} />
                <Bar dataKey="TotalRidersCredit" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <button className="absolute right-0 z-10 p-1 bg-white border border-gray-100 rounded-full shadow-sm text-gray-400 hover:text-gray-700 transition-colors opacity-0 group-hover:opacity-100 translate-x-1/2">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full xl:w-[480px] flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderStatCard("Total Inflow", summaryStats.inflow, "text-blue-600")}
          {renderStatCard("MRR", summaryStats.mrr, "text-green-600")}
          {renderStatCard("Payout", summaryStats.payout, "text-orange-500")}
          {renderStatCard("Total Riders' Credit", summaryStats.credit, "text-emerald-700")}
        </div>
      </div>
    </Card>
  );
}
