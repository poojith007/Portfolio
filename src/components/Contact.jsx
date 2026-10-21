import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, FileDown, ArrowUpRight } from 'lucide-react';
import { contactData, personalBrand } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrorMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Compose mailto URI
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );
    
    // Trigger user mail client
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 relative border-t border-slate-900 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-slate-800 text-xs text-primary-400 font-mono">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contactData.heading}
          </h2>
          <p className="text-base text-slate-400">
            {contactData.supportingText}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-300 uppercase">Direct Email</div>
                  <div className="text-sm font-semibold text-white">{contactData.email}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-dark-800 hover:bg-dark-750 border border-slate-700 rounded-lg transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Professional Profiles
              </div>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary-400 transition-colors" />
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
              </a>
            </div>

            {/* Resume Callout in Contact Section */}
            <div className="bg-gradient-to-br from-dark-900 to-dark-850 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">Curriculum Vitae</div>
                <div className="text-xs text-slate-400">Download single-page resume (PDF)</div>
              </div>
              <a
                href={personalBrand.resumeUrl}
                download="Poojith_S_Menon_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-dark-800 hover:bg-dark-750 border border-slate-700 hover:border-primary-500/50 rounded-lg shadow-sm transition-colors shrink-0"
              >
                <FileDown className="w-3.5 h-3.5 text-primary-400" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-dark-850 border border-emerald-500/30 rounded-xl space-y-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Message Ready</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your inquiry prefilled. You can also email directly at <span className="text-primary-400 font-mono">{contactData.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 text-xs font-medium text-primary-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 text-sm bg-dark-850 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-dark-850 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 text-sm bg-dark-850 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Hi Poojith, I'd like to discuss a project..."
                      className="w-full px-3.5 py-2.5 text-sm bg-dark-850 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 rounded-lg shadow-lg shadow-primary-950/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
