import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ExternalLink, Plus } from "lucide-react";

interface Company {
  id: number;
  name: string;
  role: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  deadline: string;
  notes?: string;
}

const CompanyTracker = () => {
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "Google",
      role: "Software Engineer",
      status: "interview",
      deadline: "2024-03-15",
      notes: "Technical interview scheduled"
    },
    {
      id: 2,
      name: "Microsoft",
      role: "Product Manager",
      status: "applied",
      deadline: "2024-03-20",
      notes: "Application under review"
    },
    {
      id: 3,
      name: "Amazon",
      role: "SDE Intern",
      status: "offer",
      deadline: "2024-03-10",
      notes: "Offer received - need to respond"
    }
  ]);

  const getStatusColor = (status: Company['status']) => {
    switch (status) {
      case 'applied': return 'bg-secondary text-secondary-foreground';
      case 'interview': return 'bg-warning text-warning-foreground';
      case 'offer': return 'bg-success text-success-foreground';
      case 'rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleAddCompany = () => {
    console.log("Add new company clicked");
    // In a real app, this would open a modal or form
    alert("Add Company feature - would open a form to add new company application");
  };

  const handleViewCompany = (companyId: number) => {
    console.log("View company:", companyId);
    alert(`View details for company ID: ${companyId}`);
  };

  return (
    <Card className="bg-gradient-card shadow-custom-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Company Applications
          </CardTitle>
          <Button variant="hero" size="sm" onClick={handleAddCompany}>
            <Plus className="h-4 w-4" />
            Add Company
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card transition-smooth"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{company.name}</h3>
                  <Badge className={getStatusColor(company.status)}>
                    {company.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{company.role}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Deadline: {company.deadline}
                  </span>
                </div>
                {company.notes && (
                  <p className="text-xs text-muted-foreground mt-2">{company.notes}</p>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleViewCompany(company.id)}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyTracker;