import type { ElementType } from "react";

export interface NavItem {
  name: string;
  icon: ElementType | string;
  isActive: boolean;
}

export interface StatItem {
  label: string;
  value: number;
}

export interface SummaryStat {
  amount: number;
  percentage: number;
  isPositive: boolean;
}

export interface SummaryStats {
  inflow: SummaryStat;
  payout: SummaryStat;
  mrr: SummaryStat;
  credit: SummaryStat;
}

export interface SalesData {
  name: string;
  TotalInflow: number;
  Payout: number;
  MRR: number;
  TotalRidersCredit: number;
}

export interface ListingsOverview {
  total: number;
  published: number;
  unpublished: number;
}

export interface UserOverview {
  total: number;
  riders: number;
  subscribers: number;
  freeUsers: number;
  agent: number;
  developers: number;
}

export interface SiteStatItem {
  title: string;
  location: string;
  clicks?: number;
  watchlists?: number;
  image: string;
}

export interface SiteStats {
  totalVisits: number;
  mostClicked: SiteStatItem;
  mostWatchlisted: SiteStatItem;
}
