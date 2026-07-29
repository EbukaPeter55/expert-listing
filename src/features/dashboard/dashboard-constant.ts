import { Home } from "lucide-react";
import type {
  NavItem,
  StatItem,
  SalesData,
  SummaryStats,
  ListingsOverview,
  UserOverview,
  SiteStats
} from "./dashboard-type";

export const navItems: NavItem[] = [
  { name: "Dashboard", icon: Home, isActive: true },
  { name: "Listings", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336043/Toolbox_uudg0u.png", isActive: false },
  { name: "Users", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336043/Toolbox_uudg0u.png", isActive: false },
  { name: "Request", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336297/Article_sxgfcs.png", isActive: false },
  { name: "Applications", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336368/applications_uwhih6.png", isActive: false },
  { name: "Tasks", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336428/task-square_gw4bho.png", isActive: false },
];

export const salesData: SalesData[] = [
  { name: 'Jan', TotalInflow: 35, Payout: 30, MRR: 20, TotalRidersCredit: 5 },
  { name: 'Feb', TotalInflow: 15, Payout: 5, MRR: 10, TotalRidersCredit: 5 },
  { name: 'Mar', TotalInflow: 20, Payout: 10, MRR: 15, TotalRidersCredit: 8 },
  { name: 'Apr', TotalInflow: 35, Payout: 15, MRR: 20, TotalRidersCredit: 8 },
  { name: 'May', TotalInflow: 48, Payout: 25, MRR: 35, TotalRidersCredit: 10 },
  { name: 'Jun', TotalInflow: 25, Payout: 20, MRR: 15, TotalRidersCredit: 20 },
  { name: 'Jul', TotalInflow: 35, Payout: 30, MRR: 25, TotalRidersCredit: 15 },
  { name: 'Aug', TotalInflow: 40, Payout: 35, MRR: 25, TotalRidersCredit: 18 },
  { name: 'Sep', TotalInflow: 30, Payout: 25, MRR: 15, TotalRidersCredit: 12 },
];

export const summaryStats: SummaryStats = {
  inflow: { amount: 120000000.00, percentage: 2.5, isPositive: true },
  payout: { amount: 200000000.00, percentage: -0.5, isPositive: false },
  mrr: { amount: 50000000.00, percentage: 2.5, isPositive: true },
  credit: { amount: 100000000.00, percentage: 0.5, isPositive: true },
};

export const listingsOverview: ListingsOverview = {
  total: 2200,
  published: 1200,
  unpublished: 1000,
};

export const userOverview: UserOverview = {
  total: 20700,
  riders: 8500,
  subscribers: 7500,
  freeUsers: 3300,
  agent: 8100,
  developers: 1500,
};

export const siteStats: SiteStats = {
  totalVisits: 11000,
  mostClicked: {
    title: "Urban Prime Plaza Premiere",
    location: "Ikoyi, Lagos",
    clicks: 40000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
  },
  mostWatchlisted: {
    title: "Urban Prime Plaza Premiere",
    location: "Ikoyi, Lagos",
    watchlists: 20000,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80"
  }
};

export const listingStats: StatItem[] = [
  { label: "Total", value: listingsOverview.total },
  { label: "Published", value: listingsOverview.published },
  { label: "Unpublished", value: listingsOverview.unpublished },
];

export const usersStats: StatItem[] = [
  { label: "Total", value: userOverview.total },
  { label: "Riders", value: userOverview.riders },
  { label: "Subscribers", value: userOverview.subscribers },
  { label: "Free Users", value: userOverview.freeUsers },
  { label: "Agent", value: userOverview.agent },
  { label: "Developers", value: userOverview.developers },
];
