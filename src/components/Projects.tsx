import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Application E-commerce",
    description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et responsive.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel avec graphiques et métriques avancées.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Vue.js", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "Portfolio Photographe",
    description: "Site portfolio élégant pour un photographe professionnel avec galerie interactive et système de réservation.",
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    title: "Application Mobile",
    description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 5,
    title: "Blog Personnel",
    description: "Blog minimaliste avec système de commentaires, recherche avancée et optimisation SEO pour un contenu de qualité.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Gatsby", "GraphQL", "Markdown", "Netlify"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 6,
    title: "Plateforme d'apprentissage",
    description: "Plateforme éducative avec cours vidéo, quiz interactifs et suivi des progrès pour l'apprentissage en ligne.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Angular", "RxJS", "NestJS", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, 
            chaque projet reflétant ma passion pour l'innovation et l'excellence technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}