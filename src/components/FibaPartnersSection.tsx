
import { Card, CardContent } from "@/components/ui/card";

const FibaPartnersSection = () => {
  const partners = [
    {
      name: "FIBA",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Official Partner"
    },
    {
      name: "TCL",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Technology Partner"
    },
    {
      name: "Molten",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Official Ball"
    },
    {
      name: "Smart",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Telecom Partner"
    },
    {
      name: "Spalding",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Equipment"
    },
    {
      name: "Wilson",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
      category: "Official Partner"
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="cv-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-display">
            PARCEIROS OFICIAIS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Juntos pelo desenvolvimento do basquetebol cabo-verdiano
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-400">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FibaPartnersSection;
