import React, { useState, useEffect, useRef } from 'react';

const HEADER_HEIGHT = 64;
const PROPERTY_HEADER_HEIGHT = 106;
const TOTAL_OFFSET = HEADER_HEIGHT + PROPERTY_HEADER_HEIGHT;

const TabbedNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const viewportTop = TOTAL_OFFSET;
      const sections = Object.values(sectionRefs.current);
      
      for (const section of sections) {
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= viewportTop + 100 && rect.bottom >= viewportTop + 100) {
          const id = section.getAttribute('data-section-id');
          setActiveTab(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tabId) => {
    const section = sectionRefs.current[tabId];
    if (section) {
      const scrollToPosition = section.offsetTop - TOTAL_OFFSET + 600;
      window.scrollTo({ 
        top: scrollToPosition, 
        behavior: 'smooth' 
      });
      setActiveTab(tabId);
    }
  };

  return (
    <div className="tabs-container">
      <nav className="tabs-nav" role="navigation">
        <ul className="tab-list">
          {tabs.map((tab) => (
            <li 
              key={tab.id}
              className="tab-item"
            >
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="tab-sections">
        {tabs.map((tab) => (
          <section
            key={tab.id}
            ref={(el) => sectionRefs.current[tab.id] = el}
            data-section-id={tab.id}
            className="tab-content"
            id={`section-${tab.id}`}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TabbedNavigation;