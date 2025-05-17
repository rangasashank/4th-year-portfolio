import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import SocialLinks from './ui/SocialLinks';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Contact: React.FC = () => {
  const [ref, controls] = useAnimateOnScroll();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form, but we'll just alert for demo purposes
    alert(`Thank you for your message! I'll get back to you soon.`);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10 rotate-180" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-200 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="h-full p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <p className="mb-6 text-white text-opacity-90">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              
              <div className="mb-8">
                <p className="mb-2 font-medium">Email:</p>
                <a 
                  href="mailto:grsashank2003@gmail.com" 
                  className="text-primary-300 hover:underline"
                >
                  grsashank2003@gmail.com
                </a>
              </div>
              
              <div className="mb-8">
                <p className="mb-4 font-medium">Connect with me:</p>
                <SocialLinks showLabels iconSize={20} />
              </div>
              
              <p className="text-white text-opacity-70 mt-auto">
                Based in Victoria, British Columbia, Canada
              </p>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 
                    text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 
                    text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 
                    text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glass"
                  icon={Send}
                  iconPosition="right"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;