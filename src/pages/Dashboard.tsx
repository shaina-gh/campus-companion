import DashboardCard from "@/components/DashboardCard";
import CompanyTracker from "@/components/CompanyTracker";
import SkillTracker from "@/components/SkillTracker";
import CareerJournal from "@/components/CareerJournal";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Target, 
  BookOpen, 
  TrendingUp,
  Calendar,
  Award,
  Users,
  Bell
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Campus Companion
              </h1>
              <p className="text-sm text-muted-foreground">
                Your personalized career growth dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="hero" size="sm">
                <Users className="h-4 w-4" />
                Connect with Peers
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Good morning, Student! 👋
          </h2>
          <p className="text-muted-foreground">
            Track your placement journey and skill development progress
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Applications Sent"
            value={12}
            subtitle="3 new this week"
            icon={Building2}
            trend={{ value: 25, isPositive: true }}
            gradient
          />
          <DashboardCard
            title="Interview Scheduled"
            value={4}
            subtitle="2 upcoming"
            icon={Calendar}
            trend={{ value: 100, isPositive: true }}
          />
          <DashboardCard
            title="Skills in Progress"
            value={6}
            subtitle="2 near completion"
            icon={Target}
            trend={{ value: 15, isPositive: true }}
          />
          <DashboardCard
            title="Journal Entries"
            value={15}
            subtitle="Last entry yesterday"
            icon={BookOpen}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <div className="space-y-8">
            <CompanyTracker />
          </div>
          <div className="space-y-8">
            <SkillTracker />
          </div>
        </div>

        {/* Career Journal */}
        <div className="mb-8">
          <CareerJournal />
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-card rounded-lg p-6 shadow-custom-md">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Building2 className="h-5 w-5" />
              <span>Add New Application</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Target className="h-5 w-5" />
              <span>Set New Goal</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Award className="h-5 w-5" />
              <span>Log Achievement</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Campus Companion - Empowering your career journey
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Help</Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;