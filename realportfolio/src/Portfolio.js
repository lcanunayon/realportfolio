import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/Card"
import { Button } from "./components/ui/Button"
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <motion.h1
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Angelo Canunayon
        </motion.h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello! I'm <span className="text-blue-400">Angelo Canunayon</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          An ambitious Computer Science undergraduate passionate about technology, AI, and building solutions that make an impact on the world as a whole.
        </motion.p>
        <div className="mt-8 space-x-4">
          <Button asChild variant="default" className="bg-blue-500 hover:bg-blue-600">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am a hardworking and curious Computer Science undergraduate with a strong interest in technology and artificial intelligence. I thrive in collaborative environments and love tackling new challenges that allow me to grow and contribute to meaningful projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-20 bg-gray-800/50">
        <h3 className="text-3xl font-semibold mb-12 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((proj) => (
            <Card key={proj} className="bg-gray-900 border-gray-700 shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Project {proj}</h4>
                <p className="text-gray-400 mb-4">Short description of your project goes here.</p>
                <Button asChild variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <a href="#">View Details</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-8">Contact</h3>
        <p className="text-gray-300 mb-6">Let’s connect and build something great together.</p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="https://github.com/lcanunayon" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github size={28} /></a>
          <a href="https://www.linkedin.com/in/angelo-canunayon-924862249" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={28} /></a>
          <a href="mailto:angelocanunayon@gmail.com" className="hover:text-white"><Mail size={28} /></a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
