import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBook, FaBalanceScale, FaChalkboardTeacher, FaUniversity, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaArrowRight, FaArrowLeft, FaDollarSign, FaUserCheck } from 'react-icons/fa';
 

const SarojCollegeOfLaw = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "BA LLB Graduate",
      content: "Saroj College of Law provided me with exceptional legal education and practical training that prepared me perfectly for my career in corporate law."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "BA LLB Student",
      content: "The faculty here are truly dedicated. Their mentorship has helped me publish my first research paper in constitutional law."
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Alumni, High Court Advocate",
      content: "The moot court competitions and internship opportunities at Saroj College gave me the confidence to practice law effectively."
    }
  ];

  // Updated programs structure to include eligibility AND FEES
  const programs = [
    {
      icon: <FaGraduationCap className="text-4xl mb-4 text-blue-600" />,
      title: "BA LLB Program",
      description: "5-year comprehensive law degree program with practical training modules.",
      features: ["Comprehensive curriculum", "Moot court training", "Internship opportunities"],
      eligibility: [
        "Successful completion of 10+2 or equivalent examination.",
        "Minimum aggregate percentage as per university norms."
      ],
      fee: {
        annual: "₹75,000",
        disclaimer: "*Excluding examination and miscellaneous charges.",
      }
    },
    {
      icon: <FaGraduationCap className="text-4xl mb-4 text-blue-600" />,
      title: "LLB (3-Year Program)",
      description: "3-year bachelor of law degree with multiple specializations.",
      features: ["Multiple specializations", "Regular mode", "Industry-oriented curriculum"],
      eligibility: [
        "Graduation in any discipline from a recognized university",
        "Minimum marks as per university norms"
      ],
      fee: {
        annual: "₹75,000",
        disclaimer: "*Excluding examination and miscellaneous charges.",
      }
    }
 
  ];

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "1500+", label: "Alumni Network" },
    { value: "95%", label: "Pass Percentage" },
    { value: "80+", label: "Faculty Members" }
  ];

 

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
     
      <div className="font-sans text-gray-800 overflow-x-hidden">
        
        {/* Hero Section */}
        <div className='block md:flex'>
          <motion.img 
            src="https://cdn.pixabay.com/photo/2024/07/25/14/07/ai-generated-8921431_640.jpg" 
            className='w-full md:w-1/2 object-cover' 
            alt="Law College"
          />
          <div id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 relative overflow-hidden md:w-1/2">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-6 text-center relative z-10"
            >
              <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Saroj College of Law
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto"
              >
               ( Affiliated to Lucknow University) 
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-24 h-1.5 bg-blue-600 mx-auto"
              />
            </motion.div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="College Building" 
                    className="rounded-xl shadow-2xl w-full hover:shadow-xl transition duration-500 transform hover:-translate-y-2" 
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-700">A Legacy of Legal Excellence</h3>
                <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                  Saroj College of Law has been at the forefront of legal education, producing some of the finest legal minds in the country. Our institution combines rich tradition with innovative teaching methodologies.
                </p>
                <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                  Our curriculum is designed to provide students with comprehensive knowledge of law while emphasizing practical skills through moot courts, internships, and legal aid programs. We pride ourselves on creating well-rounded legal professionals.
                </p>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-6"
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      whileHover={hoverEffect}
                      className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 border-l-4 border-blue-600"
                    >
                      <p className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</p>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section - HORIZONTAL CARDS LAYOUT */}
        <section id="programs" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Academic Programs</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-24 h-1.5 bg-blue-600 mx-auto"
              />
              <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive legal education programs designed to meet the needs of aspiring legal professionals
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {programs.map((program, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ ...hoverEffect, y: -10 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600 flex flex-col h-full"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center"
                  >
                    {program.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center text-blue-800">{program.title}</h3>
                  <p className="text-gray-700 mb-4 text-center flex-grow">{program.description}</p>
                  
                  {/* Program Features */}
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">Key Features:</h4>
                  <ul className="space-y-1 mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2 text-sm">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Eligibility Section */}
                  <h4 className="text-lg font-semibold mb-2 text-blue-700 flex items-center">
                    <FaUserCheck className="mr-2 text-sm"/>Eligibility:
                  </h4>
                  <ul className="space-y-1 mb-4">
                    {program.eligibility.map((criterion, i) => (
                      <li key={`eligibility-${i}`} className="flex items-start">
                        <span className="text-orange-500 mr-2 text-xs">»</span>
                        <span className="text-gray-700 text-sm">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Program Fees Section */}
                  <div className='p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600 mb-4 mt-auto'>
                    <h4 className="text-lg font-semibold mb-2 text-blue-800">Annual Fee:</h4>
                    <p className="text-xl font-bold text-blue-800 mb-1">
                      {program.fee.annual}
                    </p>
                    <p className="text-sm text-gray-600">
                      {program.fee.disclaimer}
                    </p>
                  </div>

                  {/* Apply Now Button */}
                  <div className='flex items-center justify-center mt-4'>
                    <a 
                      href='https://seglko.in8.nopaperforms.com/' 
                      target='_blank' 
                      rel='noopener noreferrer' 
                      className='flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-lg hover:shadow-xl text-sm'
                    >
                      Apply Now
                      <FaArrowRight className="ml-2 text-xs" />
                    </a> 
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        

        {/* CTA Section */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Legal Journey?</h2>
              <p className="text-xl mb-10 text-blue-100">
                Join Saroj College of Law and become part of a legacy of legal excellence
              </p>
              <a 
                href='https://seglko.in8.nopaperforms.com/' 
                target='_blank' 
                rel='noopener noreferrer' 
                className='inline-flex items-center justify-center bg-white text-blue-800 font-extrabold px-10 py-4 rounded-full transition duration-300 text-lg hover:bg-gray-200 shadow-xl'
              >
                Apply Now & Explore Eligibility
                <FaArrowRight className="ml-3" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    
  );
};

export default SarojCollegeOfLaw;