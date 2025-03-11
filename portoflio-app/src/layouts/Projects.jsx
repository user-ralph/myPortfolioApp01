import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import ProjectModalCard from '../modalCards/ProjectModalCard';
import { database } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [projectData, setProjectData] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const swiperRef = useRef(null);
  const prevSlideRef = useRef(0);
  const dataFetchedRef = useRef(false);

  // Animation controls with improved performance
  const titleControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: false // Changed to false to allow exit animations
  });
  
  const categoriesControls = useAnimation();
  const { ref: categoriesRef, inView: categoriesInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: false // Changed to false to allow exit animations
  });
  
  const projectsControls = useAnimation();
  const { ref: projectsRef, inView: projectsInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: false // Changed to false to allow exit animations
  });
  
  const { ref: sectionRef, inView: sectionInView } = useInView({ 
    rootMargin: '600px 0px',  // Prefetch data before section is fully in view
    triggerOnce: true // Changed to false to allow monitoring when scrolling away
  });

  // Fetch data only once when section is in view
  useEffect(() => {
    if (sectionInView && !dataFetchedRef.current) {
      const projectRef = ref(database, 'projects');
      dataFetchedRef.current = true;
      
      const unsubscribe = onValue(projectRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProjectData(data);
          if (!activeCategory && Object.keys(data).length > 0) {
            setActiveCategory(Object.keys(data)[0]);
          }
        }
      });
      
      return () => unsubscribe();
    }
  }, [sectionInView, activeCategory]);

  // Consolidated animation effects for both entrance and exit
  useEffect(() => {
    const animateElements = async () => {
      if (titleInView) {
        await titleControls.start({ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5, ease: 'easeOut' } 
        });
      } else {
        await titleControls.start({ 
          opacity: 0, 
          y: 20, 
          transition: { duration: 0.3, ease: 'easeIn' } 
        });
      }
      
      if (categoriesInView) {
        await categoriesControls.start({ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } 
        });
      } else {
        await categoriesControls.start({ 
          opacity: 0, 
          y: 20, 
          transition: { duration: 0.3, ease: 'easeIn' } 
        });
      }
      
      if (projectsInView) {
        await projectsControls.start({ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } 
        });
      } else {
        await projectsControls.start({ 
          opacity: 0, 
          y: 20, 
          transition: { duration: 0.3, ease: 'easeIn' } 
        });
      }
    };
    
    animateElements();
  }, [titleInView, categoriesInView, projectsInView, titleControls, categoriesControls, projectsControls]);

  // Optimized next button state update
  useEffect(() => {
    requestAnimationFrame(() => {
      if (!swiperRef.current?.swiper) {
        setIsNextDisabled(true);
        return;
      }
      
      const swiper = swiperRef.current.swiper;
      const totalSlides = swiper.slides.length;
      const slidesPerView = swiper.params.slidesPerView;
      const isDisabled = currentSlide >= totalSlides - slidesPerView;
      
      setIsNextDisabled(isDisabled);
    });
  }, [currentSlide, activeCategory]);

  // Optimized slide direction tracking
  useEffect(() => {
    if (prevSlideRef.current !== currentSlide) {
      setSlideDirection(prevSlideRef.current < currentSlide ? 'next' : 'prev');
      prevSlideRef.current = currentSlide;
    }
  }, [currentSlide]);

  // Memoized handlers with debounce for category changes
  const handleCategoryClick = useCallback((category) => {
    if (activeCategory === category) return; // Prevent unnecessary state updates
    
    setActiveCategory(category);
    
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideTo(0, 300);
        setCurrentSlide(0);
        setSlideDirection(null);
      }
    });
  }, [activeCategory]);

  // Optimized slide change handler
  const handleSlideChange = useCallback((swiper) => {
    setCurrentSlide(swiper.activeIndex);
  }, []);

  const handleOpenModal = useCallback((project) => {
    if (project) {
      setSelectedProject(project);
      setOpenModal(true);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedProject(null);
  }, []);

  const handlePrevSlide = useCallback(() => {
    if (swiperRef.current?.swiper && currentSlide > 0) {
      setSlideDirection('prev');
      swiperRef.current.swiper.slidePrev();
    }
  }, [currentSlide]);

  const handleNextSlide = useCallback(() => {
    if (swiperRef.current?.swiper && !isNextDisabled) {
      setSlideDirection('next');
      swiperRef.current.swiper.slideNext();
    }
  }, [isNextDisabled]);
  
  // Simplified and optimized animation variants
  const slideVariants = useMemo(() => ({
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'next' ? 20 : direction === 'prev' ? -20 : 0,
      transition: { duration: 0.3 }
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'next' ? -20 : direction === 'prev' ? 20 : 0,
      transition: { duration: 0.3 }
    })
  }), []);
  
  // Section animation variants
  const sectionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.5 }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  }), []);
  
  // Optimized project rendering with virtualization support
  const projectsToRender = useMemo(() => {
    if (!projectData || !activeCategory || !projectData[activeCategory]) {
      return [];
    }
    
    return Object.keys(projectData[activeCategory]).map((projectId) => {
      const project = projectData[activeCategory][projectId];
      if (!project) return null;
      
      return (
        <SwiperSlide key={projectId}>
          <motion.div
            custom={slideDirection}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='project-card'
            onClick={() => handleOpenModal(project)}
            layoutId={`project-${projectId}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className='project-image'
              loading="lazy"
              onError={(e) => {
                e.target.src = 'placeholder-image.jpg';
                e.target.alt = 'Image not available';
              }}
            />
            <div className='project-info'>
              <h3>{project.title || 'Untitled Project'}</h3>
              <p>{project.description || 'No description available'}</p>
              <motion.button
                className='learn-more'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </SwiperSlide>
      );
    });
  }, [projectData, activeCategory, handleOpenModal, slideDirection, slideVariants]);

  // Memoized categories with performance optimizations
  const categories = useMemo(() => {
    if (Object.keys(projectData).length === 0) {
      return <p>Loading categories...</p>;
    }
    
    return Object.keys(projectData).map((category) => (
      <motion.span
        key={category}
        className={activeCategory === category ? 'active' : ''}
        onClick={() => handleCategoryClick(category)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {category}
      </motion.span>
    ));
  }, [projectData, activeCategory, handleCategoryClick]);

  return (
    <motion.section 
      className='projects-section' 
      id='projects' 
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={sectionInView ? "visible" : "exit"}
    >
      <motion.h2 
        ref={titleRef} 
        initial={{ opacity: 0, y: 20 }} 
        animate={titleControls}
      >
        Explore My Work
      </motion.h2>

      <motion.div 
        ref={categoriesRef} 
        initial={{ opacity: 0, y: 20 }} 
        animate={categoriesControls} 
        className='project-categories'
      >
        {categories}
      </motion.div>

      <motion.div 
        ref={projectsRef} 
        initial={{ opacity: 0, y: 20 }} 
        animate={projectsControls} 
        className="swiper-container"
      >
        {projectData && activeCategory && projectData[activeCategory] ? (
          <>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={false}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={false}
              speed={300}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                if (swiper) {
                  setCurrentSlide(swiper.activeIndex);
                  const totalSlides = swiper.slides.length;
                  const slidesPerView = swiper.params.slidesPerView;
                  setIsNextDisabled(swiper.activeIndex >= totalSlides - slidesPerView);
                }
              }}
              watchSlidesProgress={true}
              updateOnWindowResize={true}
              preloadImages={false}
              lazy={true}
              threshold={5}
            >
              <AnimatePresence mode="wait" custom={slideDirection}>
                {projectsToRender}
              </AnimatePresence>
            </Swiper>

            <div className='navigation-container'>
              <div className='custom-navigation'>
                <motion.button
                  onClick={handlePrevSlide}
                  className='nav-button'
                  disabled={currentSlide === 0}
                  style={{
                    background: currentSlide === 0 ? '#333' : 'white',
                    color: currentSlide === 0 ? 'white' : 'black',
                  }}
                  whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
                  whileTap={{ scale: currentSlide === 0 ? 1 : 0.9 }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
                <motion.button
                  onClick={handleNextSlide}
                  className='nav-button'
                  disabled={isNextDisabled}
                  style={{
                    background: isNextDisabled ? '#333' : 'white',
                    color: isNextDisabled ? 'white' : 'black',
                  }}
                  whileHover={{ scale: isNextDisabled ? 1 : 1.1 }}
                  whileTap={{ scale: isNextDisabled ? 1 : 0.9 }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
              </div>
            </div>
          </>
        ) : (
          <p className="loading-projects">Loading projects...</p>
        )}
      </motion.div>

      {selectedProject && (
        <ProjectModalCard open={openModal} handleClose={handleCloseModal} project={selectedProject} />
      )}
    </motion.section>
  );
};

export default Projects;