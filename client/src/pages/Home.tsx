import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalismo Regenerativo
 * - Paleta: Verdes naturais, ouro, terrosos
 * - Espaço generoso com layouts assimétricos
 * - Tipografia hierárquica: Poppins (títulos), Outfit (subtítulos), Inter (corpo)
 * - Animações sutis ao scroll e hover
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const partners = [
    {
      id: 1,
      name: "Wiki 2dM",
      description: "Conhecimento e documentação do coletivo",
      logo: "/images/SarafuNetwoking.png",
      link: "https://wiki.2dm.com",
    },
    {
      id: 2,
      name: "GreenPill Brasil",
      description: "Motor do ecossistema regenerativo social",
      logo: "/images/greenpill_brasil_logo.jpg",
      link: "https://greenpill.network",
    },
    {
      id: 3,
      name: "Sarafu Network",
      description: "Plataforma de trocas e promessas social",
      logo: "/images/SarafuNetwoking.png",
      link: "https://sarafu.network",
    },
    {
      id: 4,
      name: "Pomar das Bruxas",
      description: "Parceiro Loja Física 01",
      logo: "/images/PomarBruchas.jpg",
      link: "#",
    },
    {
      id: 5,
      name: "Kazazul",
      description: "Parceiro Loja Física 02",
      logo: "/images/Kazazul.jpg",
      link: "https://instagram.com/kazazul",
    },
    {
      id: 6,
      name: "ALMA XAMÃ",
      description: "Parceiro 03",
      logo: "/images/AlmaXama.jpg",
      link: "#",
    },
    {
      id: 7,
      name: "Candeo Bee",
      description: "Parceiro Produtos Loja Digital",
      logo: "/images/SarafuNetwoking.png",
      link: "https://instagram.com/candeobee",
    },
    {
      id: 8,
      name: "Trampos Criativos",
      description: "Parceiro Tzolkin",
      logo: "/images/TramposCriativos.jpg",
      link: "#",
    },
  ];

  const books = [
    {
      id: 1,
      title: "Início do Caminhar",
      author: "Jackson Tavares Veiga",
      image: "/images/PomarBruchas.jpg",
      link: "https://www.amazon.com.br/Início-do-Caminhar-Dois-Muitos-ebook/dp/B0FK4DFD3X",
    },
    {
      id: 2,
      title: "Lidando com Minhas Sombras",
      author: "Coletivo 2dM",
      image: "/images/AlmaXama.jpg",
      link: "https://www.amazon.com.br/Lidando-com-Minhas-Sombras-Muitos-ebook/dp/B0FJZTK9R4",
    },
    {
      id: 3,
      title: "Cidade Negra",
      author: "Johnny William",
      image: "/images/Kazazul.jpg",
      link: "https://www.amazon.com.br/Cidade-Negra-Johnny-William-ebook/dp/B0F4JSY5GZ",
    },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado pelo contato! Em breve retornaremos.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Coletivo 2dM</div>
          <nav className="hidden md:flex gap-8">
            <a href="#parceiros" className="text-foreground hover:text-secondary transition-colors">
              Parceiros
            </a>
            <a href="#livros" className="text-foreground hover:text-secondary transition-colors">
              Livros
            </a>
            <a href="#contato" className="text-foreground hover:text-secondary transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Bem-vindo ao Coletivo 2dM
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Um ecossistema regenerativo social de trocas, promessas e comunidade. Conectando pessoas, saberes e recursos para um futuro mais justo e sustentável.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#parceiros" className="btn-primary">
                  Conheça Nossos Parceiros
                </a>
                <a href="#contato" className="btn-secondary">
                  Entre em Contato
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/hero-background.png"
                alt="Ecossistema regenerativo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic" />

      {/* Partners Section */}
      <section id="parceiros" className="py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            backgroundImage: "url(/images/partners-section-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossos Parceiros</h2>
            <p className="section-subtitle">
              Uma rede de colaboradores comprometidos com a regeneração social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="card-partner group">
                <div className="mb-4 h-32 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="heading-secondary text-lg mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                >
                  Acessar <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic" />

      {/* Books Section */}
      <section id="livros" className="py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            backgroundImage: "url(/images/books-section-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Livros da Comunidade</h2>
            <p className="section-subtitle">
              Conhecimento e sabedoria compartilhados pelo coletivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="card-partner">
                  <div className="mb-4 h-48 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="heading-secondary text-lg mb-2">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{book.author}</p>
                  <div className="inline-flex items-center gap-2 text-secondary group-hover:text-accent transition-colors">
                    Leia na Amazon <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic" />

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            backgroundImage: "url(/images/cta-section-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Queremos ouvir você! Envie uma mensagem ou acesse nossa agenda
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card-partner text-center hover:border-secondary"
              >
                <div className="text-4xl mb-4">📅</div>
                <h3 className="heading-secondary text-lg mb-2">Agendar Reunião</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Clique para agendar um horário conosco
                </p>
                <span className="text-secondary font-medium">Acessar Agenda →</span>
              </a>

              <a
                href="https://donate.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card-partner text-center hover:border-accent"
              >
                <div className="text-4xl mb-4">
                  <Heart className="w-10 h-10 mx-auto text-accent" />
                </div>
                <h3 className="heading-secondary text-lg mb-2">Patrocinar o Projeto</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Apoie nossa missão de regeneração social
                </p>
                <span className="text-accent font-medium">Contribuir →</span>
              </a>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Seu nome"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Sua mensagem aqui..."
                  required
                  className="w-full min-h-32"
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Coletivo 2dM</h3>
              <p className="text-sm opacity-80">
                Ecossistema regenerativo social de trocas, promessas e comunidade.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#parceiros" className="hover:underline">
                    Parceiros
                  </a>
                </li>
                <li>
                  <a href="#livros" className="hover:underline">
                    Livros
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:underline">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2026 Coletivo 2dM. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
