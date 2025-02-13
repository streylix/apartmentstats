import React, { useState, useEffect, useRef } from 'react';

const HEADER_HEIGHT = 64;
const PROPERTY_HEADER_HEIGHT = 106; // Approximate height of the property header
const TOTAL_OFFSET = HEADER_HEIGHT + PROPERTY_HEADER_HEIGHT;
const TAB_HEIGHT = 40;

const styles = {
  navigation: {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '48rem',
      backgroundColor: '#1a1a1a'
    },
    nav: {
      position: 'sticky',
      top: `${TOTAL_OFFSET}px`, // Position below header and property header
      height: `${TAB_HEIGHT}px`,
      maxWidth: '740px',
      overflow: 'hidden',
      backgroundColor: '#1a1a1a',
      zIndex: 40
    }
  },
  tabList: {
    container: {
      margin: 0,
      display: 'flex',
      height: `${TAB_HEIGHT}px`,
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '0.75rem',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      paddingLeft: '0px',
      paddingBottom: '5px'
    }
  },
  tab: {
    item: {
      position: 'relative',
      display: 'inline-block',
      color: '#9ca3af'
    },
    button: (isActive) => ({
      position: 'relative',
      marginBottom: 0,
      display: 'flex',
      height: `${TAB_HEIGHT}px`,
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: '0 0.25rem',
      fontWeight: '500',
      textDecoration: 'none',
      borderBottom: isActive ? '2px solid #e5e7eb' : 'none',
      color: isActive ? '#e5e7eb' : '#9ca3af',
      cursor: 'pointer',
      transition: 'color 0.2s ease, border-color 0.2s ease'
    })
  },
  content: {
    section: {
      padding: '1rem 0',
      minHeight: '50vh',
      scrollMarginTop: `${TOTAL_OFFSET + 16}px`
    }
  }
};

const TabbedNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the viewport top, accounting for header and property header
      const viewportTop = TOTAL_OFFSET;
      
      // Find the section that's currently in the viewport
      const sections = Object.values(sectionRefs.current);
      
      for (const section of sections) {
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        
        // Check if the section is within the viewport
        if (rect.top <= viewportTop + 100 && rect.bottom >= viewportTop + 100) {
          const id = section.getAttribute('data-section-id');
          setActiveTab(id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tabId) => {
    const section = sectionRefs.current[tabId];
    if (section) {
      // Adjust scroll position to account for header and property header
      const scrollToPosition = section.offsetTop - TOTAL_OFFSET + 600;
      window.scrollTo({ 
        top: scrollToPosition, 
        behavior: 'smooth' 
      });
      setActiveTab(tabId);
    }
  };

  return (
    <div style={styles.navigation.container}>
      <nav style={styles.navigation.nav} role="navigation">
        <ul style={styles.tabList.container}>
          {tabs.map((tab) => (
            <li 
              key={tab.id}
              style={styles.tab.item}
            >
              <button
                onClick={() => handleTabClick(tab.id)}
                style={styles.tab.button(activeTab === tab.id)}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {tabs.map((tab) => (
          <section
            key={tab.id}
            ref={(el) => sectionRefs.current[tab.id] = el}
            data-section-id={tab.id}
            style={styles.content.section}
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