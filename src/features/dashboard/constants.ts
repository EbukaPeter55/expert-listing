import { Home, Building, Users, FileText, Smartphone, CheckSquare } from "lucide-react";

export const navItems = [
  { name: "Dashboard", icon: Home, isActive: true },
  { name: "Listings", icon: Building, isActive: false },
  { name: "Users", icon: Users, isActive: false },
  { name: "Request", icon: FileText, isActive: false },
  { name: "Applications", icon: Smartphone, isActive: false },
  { name: "Tasks", icon: CheckSquare, isActive: false },
];

import { userOverview, listingsOverview } from "./data/mockData";

export const listingStats = [
  { label: "Total", value: listingsOverview.total },
  { label: "Published", value: listingsOverview.published },
  { label: "Unpublished", value: listingsOverview.unpublished },
];

export const usersStats = [
  { label: "Total", value: userOverview.total },
  { label: "Riders", value: userOverview.riders },
  { label: "Subscribers", value: userOverview.subscribers },
  { label: "Free Users", value: userOverview.freeUsers },
  { label: "Agent", value: userOverview.agent },
  { label: "Developers", value: userOverview.developers },
];
