import { TopNav } from "../components/TopNav";
import { SubNav } from "../components/SubNav";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { SalesOverview } from "../components/SalesOverview";
import { StatCard } from "../components/StatCard";
import { ImageCard } from "../components/ImageCard";
import { Home, Users } from "lucide-react";
import { listingStats, usersStats, siteStats } from "../dashboard-constant";

export function DashboardPage() {

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <TopNav />
      <SubNav />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <WelcomeHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <SalesOverview />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <StatCard
                title="Listings Overview"
                icon={<Home className="w-4 h-4" />}
                stats={listingStats}
              />
            </div>
            <div className="flex-1">
              <StatCard
                title="User Overview"
                icon={<Users className="w-4 h-4" />}
                stats={usersStats}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImageCard
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
            category="TOTAL SITE VISITS"
            value="11k"
          />
          <ImageCard
            image={siteStats.mostClicked.image}
            category="MOST CLICKED"
            title={siteStats.mostClicked.title}
            location={siteStats.mostClicked.location}
            value="40k"
            showToggle
            activeToggle="Live Listings"
            hasControls
          />
          <ImageCard
            image={siteStats.mostWatchlisted.image}
            category="MOST WATCHLISTED"
            title={siteStats.mostWatchlisted.title}
            location={siteStats.mostWatchlisted.location}
            value="20k"
            showToggle
            activeToggle="All Listings"
            hasControls
            hasChat
          />
        </div>
      </main>
    </div>
  );
}
