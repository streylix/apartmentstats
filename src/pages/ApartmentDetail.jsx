import React from 'react';
import StatDisplay from '../components/StatDisplay';
import TabbedNavigation from '../components/TabbedNavigation';
import Header from '../components/Header';
import {
  Droplets,
  Bed,
  Bath,
  Share2,
  Heart,
  ArrowLeft,
  Phone,
  Clock,
  Home,
  CreditCard,
  Grid,
  FileText,
  LayoutGrid,
  Minimize,
  Speaker,
  Maximize,
  Lightbulb,
  Plug,
  Grid2x2,
  Waves,
  ShowerHead,
  Fan,
  Flame,
  Microwave,
  Refrigerator,
  ForkKnife,
  Blinds,
  Scaling,
  Lamp,
  Boxes,
  PanelTop,
  Utensils,
  Trash2,
  WashingMachine,
  Heater,
  Toilet,
  Sofa,


} from 'lucide-react';

const bedroomStats = [
  {
    label: "Bed",
    rating: 4.2,
    icon: Bed
  },
  {
    label: "Furniture",
    rating: 3.8,
    icon: LayoutGrid
  },
  {
    label: "Outlets",
    rating: 4.5,
    icon: Plug
  },
  {
    label: "Position",
    rating: 4.0,
    icon: Minimize
  },
  {
    label: "Noise Suppression",
    rating: 3.5,
    icon: Speaker
  },
  {
    label: "Closet",
    rating: 4.7,
    icon: Maximize
  },
  {
    label: "Space",
    rating: 4.1,
    icon: Scaling
  },
  {
    label: "Windows",
    rating: 4.3,
    icon: Blinds
  },
  {
    label: "Lighting",
    rating: 3.5,
    icon: Lightbulb
  }
];

const bathroomStats = [
  {
    label: "Toilet",
    rating: 4.6,
    icon: Bath
  },
  {
    label: "Water Pressure",
    rating: 4.8,
    icon: Waves
  },
  {
    label: "Sink",
    rating: 4.5,
    icon: ShowerHead
  },
  {
    label: "Shower",
    rating: 4.2,
    icon: ShowerHead
  },
  {
    label: "Space",
    rating: 3.9,
    icon: Scaling
  },
  {
    label: "Fan",
    rating: 4.0,
    icon: Fan
  }
];

const kitchenStats = [
  {
    label: "Stove",
    rating: 4.5,
    icon: Flame
  },
  {
    label: "Microwave",
    rating: 4.3,
    icon: Microwave
  },
  {
    label: "Refrigerator",
    rating: 4.6,
    icon: Refrigerator
  },
  {
    label: "Dishwasher",
    rating: 4.2,
    icon: ForkKnife
  },
  {
    label: "Sink",
    rating: 4.4,
    icon: ShowerHead
  },
  {
    label: "Counters",
    rating: 4.7,
    icon: Grid2x2
  },
  {
    label: "Floor",
    rating: 4.0,
    icon: Scaling
  },
  {
    label: "Lighting",
    rating: 4.5,
    icon: Lamp
  },
  {
    label: "Drawers",
    rating: 4.1,
    icon: Boxes
  },
  {
    label: "Pantry",
    rating: 3.8,
    icon: PanelTop
  },
  {
    label: "Cabinets",
    rating: 4.3,
    icon: Utensils
  },
  {
    label: "Garbage Disposal",
    rating: 4.6,
    icon: Trash2
  },
  {
    label: "Space",
    rating: 4.2,
    icon: Scaling
  }
];

const laundryStats = [
  {
    label: "Washer",
    rating: 4.5,
    icon: WashingMachine
  },
  {
    label: "Dryer",
    rating: 4.0,
    icon: Heater
  },
  {
    label: "Space",
    rating: 4.5,
    icon: Scaling
  },
  {
    label: "Noise",
    rating: 4.2,
    icon: Speaker
  }
];

const livingStats = [
  {
    label: "Space",
    rating: 3,
    icon: Scaling
  },
  {
    label: "Flooring",
    rating: 3.5,
    icon: Grid2x2
  },
  {
    label: "Outlets",
    rating: 2,
    icon: Plug
  },
  {
    label: "Furniture",
    rating: 4,
    icon: LayoutGrid
  },
  {
    label: "Windows",
    rating: 4.5,
    icon: Blinds
  },
  {
    label: "Noise Cancellation",
    rating: 4,
    icon: Speaker
  },
  {
    label: "Fan",
    rating: 1,
    icon: Fan
  },
];

const reviewStats = [
  {
    label: "Bedroom",
    rating: 3.9,
    icon: Bed
  },
  {
    label: "Bathroom",
    rating: 4.2,
    icon: Toilet
  },
  {
    label: "Kitchen",
    rating: 4.3,
    icon: ForkKnife
  },
  {
    label: "Laundry",
    rating: 4.2,
    icon: WashingMachine
  },
  {
    label: "Living Room",
    rating: 3,
    icon: Sofa
  },
];

const styles = {
  page: {
    container: {
      minHeight: '100%',
      backgroundColor: '#1a1a1a', // Dark background
      paddingTop: '64px',
      display: 'flex',
      flexDirection: 'column',
    }
  },
  navigation: {
    backNav: {
      outer: {
        margin: '0 auto',
        padding: '1rem 1rem',
        '@media (min-width: 640px)': {
          padding: '1rem 1.5rem'
        },
        '@media (min-width: 1024px)': {
          padding: '1rem 2rem'
        }
      },
      link: {
        display: 'flex',
        alignItems: 'center',
        color: '#9ca3af', // Lighter gray for dark mode
        cursor: 'pointer',
        ':hover': {
          color: '#e5e7eb' // Hover color for dark mode
        }
      },
      icon: {
        height: '1.25rem',
        width: '1.25rem',
        marginRight: '0.5rem'
      }
    }
  },
  main: {
    container: {
      width: '100%',
      maxWidth: '640px', // Constrain max width
      margin: '0 auto',
      padding: '0',
      '@media (min-width: 640px)': {
        padding: '0'
      }
    }
  },
  propertyHeader: {
    container: {
      backgroundColor: '#1a1a1a',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: '64px', // Height of the main header
      zIndex: 40,
      width: '100%',
      maxWidth: '640px',
      margin: '0 auto'
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff' // White text for dark mode
    },
    actions: {
      display: 'flex',
      gap: '1rem'
    },
    actionButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      color: '#ffffff', // White icons for dark mode
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'rgba(255,255,255,0.1)' // Subtle hover effect
      }
    },
    icon: {
      height: '1.25rem',
      width: '1.25rem'
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#9ca3af',
      fontSize: '0.875rem'
    }
  },
  image: {
    container: {
      marginBottom: '2rem',
      aspectRatio: '16/9',
      width: '100%',
      maxWidth: '640px', // Constrain image width
      backgroundColor: '#374151', // Darker gray for image container
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  section: {
    container: {
      padding: '1rem',
      color: '#d1d5db'
    },
    heading: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff'
    },
    text: {
      lineHeight: '1.6',
      marginBottom: '1rem'
    },
    highlightBox: {
      backgroundColor: '#1a1a1a',
      borderRadius: '0.5rem',
      padding: '1rem',
      marginBottom: '1rem'
    },
    boxItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem'
    },
    boxIcon: {
      marginRight: '0.5rem',
      color: '#10b981'
    },
    boxText: {
      color: '#e5e7eb'
    }
  }
};

const ApartmentDetail = () => {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Property highlights</h2>
          <p style={styles.section.text}>
            Experience the epitome of luxury at Reserve at Stone Port, a community where style meets convenience. Nestled amidst lush landscapes with scenic mountain views, this property is just steps away from Harrisonburg's vibrant downtown. Residents can indulge in a range of amenities like a basketball court, media room, and hot tub. Proximity to prominent institutions like James Madison University and an array of restaurants ensures a dynamic lifestyle. With its award-winning service team and accessible location, Reserve at Stone Port stands out as a premier home for those seeking luxury and convenience.
          </p>
          
          <div style={styles.section.highlightBox}>
            <div style={styles.section.boxItem}>
              <Home style={styles.section.boxIcon} size={20} />
              <span style={styles.section.boxText}>Best Unit: 1 Bed - 1 Bath - 820 sqft - Avail. now</span>
            </div>
            <div style={styles.section.boxItem}>
              <CreditCard style={styles.section.boxIcon} size={20} />
              <span style={styles.section.boxText}>$1490 below your budget</span>
            </div>
            <div style={styles.section.boxItem}>
              <Grid style={styles.section.boxIcon} size={20} />
              <span style={styles.section.boxText}>4 of 7 amenities you're looking for</span>
            </div>
            <div style={styles.section.boxItem}>
              <Grid style={styles.section.boxIcon} size={20} />
              <span style={styles.section.boxText}>No Hardwood floors</span>
            </div>
          </div>
          
          <div style={{display: 'flex', gap: '1rem'}}>
            <button style={{
              backgroundColor: '#7c3aed',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Calculate Commute
            </button>
            <button style={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              View 3D Tour | Watch Video
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'price',
      label: 'Price',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Price and Availability</h2>
          <p style={{...styles.section.text, marginBottom: '1rem'}}>
            Verified by Reserve at Stone Port 3 HRS ago. Prices may vary depending on lease length. We get our prices directly from Reserve at Stone Port.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            {['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'].map((type, index) => (
              <button 
                key={type}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: type === '1 Bedroom' ? '#7c3aed' : '#2a2a2a',
                  color: 'white',
                  borderRadius: '0.5rem',
                  border: 'none'
                }}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div style={styles.section.highlightBox}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
              <div>
                <h3 style={{color: 'white', marginBottom: '0.5rem'}}>Never miss a deal!</h3>
                <p style={{color: '#9ca3af'}}>Get immediate alerts when prices drop or new units arrive.</p>
              </div>
              <div>
                <button style={{
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem'
                }}>
                  Turn on alerts
                </button>
              </div>
            </div>
          </div>
          
          <div style={styles.section.highlightBox}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <div>
                <h3 style={{color: 'white', marginBottom: '0.5rem'}}>The Appalachian</h3>
                <p style={{color: '#9ca3af'}}>1 Bed • 1 Bath • 820 sqft</p>
              </div>
              <img 
                src="/api/placeholder/100/100" 
                alt="Apartment Layout" 
                style={{borderRadius: '0.5rem'}}
              />
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#2a2a2a',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <div>
                  <span style={{color: 'white'}}>Unit 2245-303</span>
                  <span style={{color: '#10b981', marginLeft: '0.5rem'}}>Avail. now</span>
                </div>
                <div style={{color: 'white'}}>$1,710 ›</div>
              </div>
              <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#3a3a3a',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}>
                <div>
                  <span style={{color: 'white'}}>Unit 2095-303</span>
                  <span style={{color: '#10b981', marginLeft: '0.5rem'}}>Avail. now</span>
                </div>
                <div style={{color: 'white'}}>$1,740 ›</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'amenities',
      label: 'Amenities',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Amenities</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {[
              'In Unit Laundry', 'Putting Green', 'Patio / Balcony', 
              'Granite Counters', 'Dishwasher', 'Pet Friendly'
            ].map((amenity, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '0.5rem'
              }}>
                <img 
                  src={`/api/placeholder/50/50`} 
                  alt={amenity} 
                  style={{marginBottom: '0.5rem'}}
                />
                <span style={{color: 'white', textAlign: 'center'}}>{amenity}</span>
              </div>
            ))}
          </div>
          
          <div>
            <h3 style={{...styles.section.heading, marginBottom: '1rem'}}>Unit Amenities</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {[
                'Air Conditioning', 'Carpet', 'Dishwasher', 
                'Ceiling Fan', 'Garbage Disposal', 'Microwave'
              ].map((amenity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#d1d5db',
                  gap: '0.5rem'
                }}>
                  <img 
                    src={`/api/placeholder/24/24`} 
                    alt={amenity}
                  />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'propertyDetails',
      label: 'Property Details',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Property Details (Fees & Lease)</h2>
          
          <div style={styles.section.highlightBox}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Lease Length</span>
              <span style={{color: '#9ca3af'}}>12 months (Standard. Other lease terms available. Call for details)</span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Income Requirement</span>
              <span style={{color: '#9ca3af'}}>Must have 3x the rent in total household income from all funding sources (before taxes)</span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Utilities</span>
              <span style={{color: '#9ca3af'}}>Trash</span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Application Fee</span>
              <span style={{color: '#9ca3af'}}>$50 per applicant</span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Deposit</span>
              <span style={{color: '#9ca3af'}}>$400 Deposit</span>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Additional</span>
              <span style={{color: '#9ca3af'}}>Renter's insurance required</span>
            </div>
          </div>
          
          <div style={styles.section.highlightBox}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{color: 'white'}}>Pet Policy</span>
              <span style={{color: '#9ca3af'}}>Cats, birds, dogs</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid #374151',
              paddingBottom: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h3 style={{color: 'white', margin: 0}}>Dog Policy</h3>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {[
                  { label: 'Rent', value: '$40' },
                  { label: 'Limit', value: '2' },
                  { label: 'Fee', value: '$350' },
                  { label: 'Restrictions', value: 'Breed Restrictions Apply, Contact us for details. 2 pet or 100lb max.' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#9ca3af'
                  }}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h3 style={{color: 'white', margin: 0}}>Cat Policy</h3>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {[
                  { label: 'Rent', value: '$40' },
                  { label: 'Limit', value: '2' },
                  { label: 'Fee', value: '$350' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#9ca3af'
                  }}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'review',
      label: 'Review',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Total Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {reviewStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'bedroom',
      label: 'Bedroom',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Bedroom Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {bedroomStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'bathroom',
      label: 'Bathroom',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Bathroom Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {bathroomStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Kitchen Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {kitchenStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'laundry',
      label: 'Laundry',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Laundry Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {laundryStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'living',
      label: 'Living Room',
      content: (
        <div style={styles.section.container}>
          <h2 style={styles.section.heading}>Living Room Evaluation</h2>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            {livingStats.map((stat, index) => (
              <StatDisplay
                key={index}
                label={stat.label}
                rating={stat.rating}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={styles.page.container}>
      <Header />
      
      {/* Back Navigation */}
      <div style={styles.navigation.backNav.outer}>
        <a href="/" style={styles.navigation.backNav.link}>
          <ArrowLeft style={styles.navigation.backNav.icon} />
          <span>All apartments in Harrisonburg</span>
        </a>
      </div>

      {/* Main Content */}
      <div style={styles.main.container}>
        {/* Property Header */}
        <div style={styles.propertyHeader.container}>
          <div style={styles.propertyHeader.titleContainer}>
            <h1 style={styles.propertyHeader.title}>Reserve at Stone Port</h1>
            <div style={styles.propertyHeader.actions}>
              <button style={styles.propertyHeader.actionButton}>
                <Share2 size={20} />
              </button>
              <button style={styles.propertyHeader.actionButton}>
                <Heart size={20} />
              </button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div style={styles.propertyHeader.contactInfo}>
            <Phone size={16} />
            <span>(540) 889-0601</span>
            <span>•</span>
            <Clock size={16} />
            <span>Open Now until 6:00 PM</span>
          </div>
        </div>

        {/* Property Image */}
        <div style={styles.image.container}>
          <img
            src="data:image/jpeg;base64,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"
            alt="Property"
            style={styles.image.img}
          />
        </div>

        {/* Tabbed Content */}
        <TabbedNavigation tabs={tabs} />
      </div>
    </div>
  );
};

export default ApartmentDetail;