import { useState } from "react";
import { Upload, Download, FileText, FileImage, File, Eye, Trash2, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock documents data - replace with actual hook when implemented
const mockDocuments = [
  {
    id: '1',
    name: 'Software Engineer Resume - 2024',
    document_type: 'resume',
    file_size: 245000,
    mime_type: 'application/pdf',
    description: 'Updated resume for software engineering positions',
    tags: ['software', 'engineering', 'tech'],
    is_primary: true,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Google Cover Letter Template',
    document_type: 'cover_letter',
    file_size: 156000,
    mime_type: 'application/pdf',
    description: 'Personalized cover letter for Google application',
    tags: ['google', 'cover-letter', 'faang'],
    is_primary: false,
    created_at: '2024-01-10T14:20:00Z',
    updated_at: '2024-01-10T14:20:00Z'
  },
  {
    id: '3',
    name: 'AWS Certification',
    document_type: 'certificate',
    file_size: 89000,
    mime_type: 'application/pdf',
    description: 'AWS Solutions Architect Associate certification',
    tags: ['aws', 'cloud', 'certification'],
    is_primary: false,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z'
  }
];

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const getDocumentIcon = (type: string, mimeType: string) => {
    if (mimeType?.includes('image')) return <FileImage className="h-5 w-5" />;
    if (type === 'resume' || type === 'cover_letter') return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'resume': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cover_letter': return 'bg-green-100 text-green-800 border-green-200';
      case 'certificate': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'portfolio': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'transcript': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || doc.document_type === typeFilter;
    return matchesSearch && matchesType;
  });

  const totalSize = mockDocuments.reduce((sum, doc) => sum + doc.file_size, 0);
  const primaryDocuments = mockDocuments.filter(doc => doc.is_primary).length;

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Document Manager</h1>
            <p className="text-muted-foreground">
              Store and organize all your career documents
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Upload Document
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mockDocuments.length}</p>
                  <p className="text-sm text-muted-foreground">Total Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Upload className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{formatFileSize(totalSize)}</p>
                  <p className="text-sm text-muted-foreground">Total Storage</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{primaryDocuments}</p>
                  <p className="text-sm text-muted-foreground">Primary Docs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <File className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {new Set(mockDocuments.map(d => d.document_type)).size}
                  </p>
                  <p className="text-sm text-muted-foreground">Document Types</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="resume">Resume</SelectItem>
              <SelectItem value="cover_letter">Cover Letter</SelectItem>
              <SelectItem value="certificate">Certificate</SelectItem>
              <SelectItem value="portfolio">Portfolio</SelectItem>
              <SelectItem value="transcript">Transcript</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.length === 0 ? (
            <div className="col-span-full">
              <Card>
                <CardContent className="p-12 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No documents found</h3>
                  <p className="text-muted-foreground mb-4">
                    {mockDocuments.length === 0 
                      ? "Start by uploading your first document."
                      : "Try adjusting your search or filter criteria."
                    }
                  </p>
                  <Button>Upload Document</Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            filteredDocuments.map((document) => (
              <Card key={document.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                      {getDocumentIcon(document.document_type, document.mime_type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {document.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(document.file_size)} • {format(new Date(document.created_at), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    {document.is_primary && (
                      <Badge variant="secondary" className="text-xs">Primary</Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <Badge className={getTypeColor(document.document_type)}>
                      {document.document_type.replace('_', ' ')}
                    </Badge>
                  </div>

                  {document.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {document.description}
                    </p>
                  )}

                  {document.tags && document.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {document.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                      {document.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{document.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documents;