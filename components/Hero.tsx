import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
            Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            From Classroom to <span className="text-blue-600">Codebase</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            Hi, I'm <span className="font-semibold text-slate-900">Boon Wee</span>. A former educator turned Full Stack Developer. I bring patience, clear communication, and a passion for lifelong learning to building scalable web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              View My Work <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="assets/FSD07_TeoBoonWee.pdf" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Download Resume <Download className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110"
                aria-label={link.platform}
              >
                <link.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;