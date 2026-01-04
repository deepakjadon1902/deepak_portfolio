import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_8r71maa';
  const EMAILJS_TEMPLATE_ID = 'template_24zgst5';
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_YOUR_AUTO_REPLY_ID'; // Add your auto-reply template ID here
  const EMAILJS_PUBLIC_KEY = 'hRvRaFAOHU2s1ZEeZ';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to you (the recipient)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
          to_name: 'Deepak Jadon',
        },
        EMAILJS_PUBLIC_KEY
      );

      // Only send auto-reply if template ID is configured
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID && EMAILJS_AUTO_REPLY_TEMPLATE_ID !== 'template_YOUR_AUTO_REPLY_ID') {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            {
              to_name: formData.name,
              to_email: formData.email,
              subject: formData.subject || 'No Subject',
              from_name: 'Deepak Jadon',
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (autoReplyError) {
          console.log('Auto-reply failed, but main email sent successfully:', autoReplyError);
        }
      }
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Your message has been sent to Deepak Jadon. You'll hear back soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'deepakjadon1907@gmail.com', href: 'mailto:deepakjadon1907@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 91493 70081', href: 'tel:+919149370081' },
    { icon: MapPin, label: 'Location', value: 'Mathura, Uttar Pradesh, India', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/deepakjadon1902' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/deepak-jadon-612487272' },
  ];

  return (
    <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-navy text-white">
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm hover:text-sky transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm text-white/60 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-sky transition-colors"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-2xl bg-sky/10 border border-sky/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-navy">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open for remote work and freelance projects. Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-background border border-border shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message Sent Successfully! 🎉</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been successfully sent to <strong>Deepak Jadon</strong>.<br />
                    <span className="text-sm">You'll receive a response within 24-48 hours.</span>
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sky hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky text-white font-medium shadow-sky hover:bg-sky-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;