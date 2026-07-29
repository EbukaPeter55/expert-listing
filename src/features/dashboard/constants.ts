import { Home } from "lucide-react";

export const navItems = [
  { name: "Dashboard", icon: Home, isActive: true },
  { name: "Listings", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336043/Toolbox_uudg0u.png", isActive: false },
  { name: "Users", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336043/Toolbox_uudg0u.png", isActive: false },
  { name: "Request", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336297/Article_sxgfcs.png", isActive: false },
  { name: "Applications", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336368/applications_uwhih6.png", isActive: false },
  { name: "Tasks", icon: "https://res.cloudinary.com/peterdbrainy/image/upload/v1785336428/task-square_gw4bho.png", isActive: false },
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
