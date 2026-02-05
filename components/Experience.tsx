import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Journey</h2>
          <p className="text-xl text-slate-600">
            From managing classrooms to managing state.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row gap-8 md:gap-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 mt-1.5 z-10 hidden md:block group-hover:scale-125 transition-transform"></div>

              {/* Mobile Icon */}
              <div className="md:hidden flex items-center gap-2 mb-2">
                 <Briefcase className="h-5 w-5 text-blue-600" />
                 <span className="text-sm font-semibold text-slate-500">{exp.period}</span>
              </div>

              {/* Date (Desktop) */}
              <div className="md:w-1/4 text-right pt-1 hidden md:block">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{exp.period}</span>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <h4 className="text-lg text-slate-600 mb-4 font-medium">{exp.company}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {skill}
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
};

export default Experience;