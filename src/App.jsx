import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Award, 
  Terminal, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Phone, 
  FileText, 
  Code, 
  Cpu, 
  Database,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research & Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tight text-slate-900 cursor-pointer" onClick={() => scrollToSection('about')}>
            D.P.<span className="text-blue-700">.</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${activeSection === item.id ? 'text-blue-700' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a 
            href="mailto:phudoan161@gmail.com"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg shadow hover:bg-blue-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
            AI Engineer & Researcher
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8">
            Doan Phu
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10 font-light">
            Data Science student at HUTECH University specializing in <span className="text-slate-900 font-medium">Computer Vision</span> and <span className="text-slate-900 font-medium">Generative Models</span>. Bridging the gap between academic research and practical industrial application.
          </p>
          
          <div className="flex flex-wrap gap-4 text-slate-600">
            <a href="mailto:phudoan161@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <Mail size={18} /> phudoan161@gmail.com
            </a>
            <a href="https://linkedin.com/in/DoanPhu/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <Linkedin size={18} /> linkedin.com/in/DoanPhu
            </a>
            <span className="flex items-center gap-2">
              <Phone size={18} /> 0334323928
            </span>
            <span className="flex items-center gap-2">
               <span className="text-xl">📍</span> Ho Chi Minh, Vietnam
            </span>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-blue-700" size={32} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
          </div>

          <div className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-500 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold text-slate-900">HUTECH University</h3>
              <span className="text-slate-500 font-mono text-sm">Apr 2022 – Aug 2026</span>
            </div>
            
            <div className="text-lg text-slate-700 font-medium mb-4">Bachelor of Data Science</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <span className="block text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Academic Performance</span>
                <span className="text-2xl font-bold text-blue-700">3.75 GPA</span>
              </div>
              
              <div className="bg-slate-50 p-4 rounded border border-slate-100">
                <span className="block text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Distinction</span>
                <span className="text-slate-800">Top 20 Excellent Students</span>
                <span className="block text-sm text-slate-500 mt-1">Faculty of Information Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="text-blue-700" size={32} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Professional Experience</h2>
          </div>

          <div className="space-y-12">
            {/* CoverGo */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">AI Engineer Intern</h3>
                  <div className="text-blue-700 font-medium text-lg">CoverGo</div>
                </div>
                <div className="text-slate-500 font-mono mt-2 md:mt-0">Aug 2025 – Nov 2025</div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">
                    Collaborated with the engineering team to <span className="font-semibold text-slate-900">fine-tune OCR models</span>, specifically targeting handwriting recognition and unstructured data fields to reduce manual entry requirements.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">
                    Managed project timelines and backlog tracking (using Jira/Asana), ensuring critical OCR features were delivered prior to <span className="font-semibold text-slate-900">User Acceptance Testing (UAT)</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">
                    Conducted data mapping workflows that converted raw OCR output into structured JSON formats compatible with the core platform API.
                  </p>
                </li>
              </ul>
            </div>

            {/* UTE AI Lab */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Research Assistant</h3>
                  <div className="text-blue-700 font-medium text-lg">UTE AI LAB</div>
                </div>
                <div className="text-slate-500 font-mono mt-2 md:mt-0">Apr 2023 – Present</div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium mr-2">Research</span>
                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium">Computer Vision</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">
                    Translate and recreate models from seminal research papers focusing on <span className="font-semibold text-slate-900">Generative Models (DCGANs)</span> and <span className="font-semibold text-slate-900">Object Detection</span> series.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">
                    Implemented Seq2Seq architectures for sequence modeling tasks, analyzing performance benchmarks against standard datasets.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Projects Section */}
      <section id="research" className="py-20 bg-slate-900 text-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-blue-400" size={32} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Research & Competitions</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* AI Challenge */}
            <div className="group border border-slate-700 p-6 rounded-lg hover:bg-slate-800 transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Video Event Retrieval</h3>
                <span className="text-slate-400 text-sm font-mono">Oct 2024</span>
              </div>
              <p className="text-slate-300 mb-4">
                Participation in the <strong className="text-white">AI Challenge 2024</strong>. Developed a model to retrieve specific events from video data, similar to Lifelog Search Challenge (LSC) standards.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                 <span className="text-xs font-mono bg-blue-900 text-blue-200 px-2 py-1 rounded">BLIP2 Model</span>
                 <span className="text-xs font-mono bg-blue-900 text-blue-200 px-2 py-1 rounded">Visual Retrieval</span>
              </div>
            </div>

            {/* Olympiad */}
            <div className="group border border-slate-700 p-6 rounded-lg hover:bg-slate-800 transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Algorithm Optimization</h3>
                <span className="text-slate-400 text-sm font-mono">Dec 2023</span>
              </div>
              <p className="text-slate-300 mb-4">
                Contestant at the <strong className="text-white">32nd Vietnam IT Student Olympiad</strong>. Focused on modifying algorithmic problem-solving strategies under strict time constraints.
              </p>
            </div>
            
            {/* Coding Contest */}
             <div className="group border border-slate-700 p-6 rounded-lg hover:bg-slate-800 transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Grow Your Coding Talent</h3>
                <span className="text-slate-400 text-sm font-mono">2023</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                 <Award size={16} className="text-yellow-500" />
                 <span className="text-yellow-500 font-bold">Third Place</span>
              </div>
              <p className="text-slate-300">
                Competitive programming contest hosted at HUTECH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Cpu className="text-blue-700" size={28} />
                <h2 className="font-serif text-2xl font-bold text-slate-900">Technical Arsenal</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">Python</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">SQL</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Machine Learning Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md font-medium border border-blue-100">TensorFlow</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md font-medium border border-blue-100">PyTorch</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md font-medium border border-blue-100">Keras</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">scikit-learn</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Other Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">Data Visualization</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">Computer Vision</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200">GANs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="text-blue-700" size={28} />
                <h2 className="font-serif text-2xl font-bold text-slate-900">Certifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded text-blue-700 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Machine Learning Specialization</h4>
                    <p className="text-sm text-slate-500">Stanford University (Coursera)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded text-blue-700 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Deep Learning Specialization</h4>
                    <p className="text-sm text-slate-500">DeepLearning.AI</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded text-blue-700 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Generative Adversarial Networks (GANs)</h4>
                    <p className="text-sm text-slate-500">DeepLearning.AI</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-serif text-xl text-slate-300 mb-6">"Data is the new oil, but intelligence is the engine."</p>
          <div className="h-px w-24 bg-slate-700 mx-auto mb-6"></div>
          <p className="text-sm">© {new Date().getFullYear()} Doan Phu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
