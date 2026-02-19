import React from "react";
import { PROJECTS_DATA } from "../constants";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-xl">
              A selection of projects that demonstrate my ability to solve
              real-world problems with code.
            </p>
          </div>
          <a
            href="https://github.com/b00nw33"
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0"
          >
            View Github Profile <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            // CHANGE 1: Changed div to a, added href, target, rel, and 'block' class
            <a
              key={project.id}
              href={project.repoUrl || project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-blue-300 text-xs rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CHANGE 2: Removed the bottom links section entirely */}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/b00nw33"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Github Profile <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
