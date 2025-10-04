import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:contact@monportfolio.fr"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-400 mb-4">
            Développeur passionné créant des expériences numériques exceptionnelles
          </p>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 Portfolio. Fait avec ❤️ et beaucoup de café.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}