import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/600/800?random=4" 
              alt="Boon Wee working" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Swapped <span className="text-blue-600">Whiteboard</span> for an IDE
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                For over ten years, I stood in front of classrooms, breaking down complex concepts into digestible lessons. I loved the "aha!" moments when a student finally understood a difficult topic.
              </p>
              <p>
                However, I found myself increasingly drawn to the technology we used. I started scripting simple tools to automate grading and analyze student performance data. What started as a hobby to save time quickly became an obsession. I realized that software engineering shares the same core DNA as teaching: <strong className="text-slate-900">constant problem solving, structural planning, and continuous optimization.</strong>
              </p>
              <p>
                Now, I leverage my background in education to write clean, documented, and maintainable code. I don't just build features; I build solutions that are easy for teams to understand and scale.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <span className="block text-3xl font-bold text-blue-600 mb-1">10+</span>
                <span className="text-slate-600 font-medium">Years in Education</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <span className="block text-3xl font-bold text-blue-600 mb-1">1000+</span>
                <span className="text-slate-600 font-medium">Hours Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;