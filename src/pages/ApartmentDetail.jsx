import React from 'react';
import StatDisplay from '../components/StatDisplay';
import TabbedNavigation from '../components/TabbedNavigation';
import Header from '../components/Header';
import { bedroomStats, bathroomStats, kitchenStats, laundryStats, livingStats, reviewStats } from '../data/stats';
import {
  Home,
  CreditCard,
  Grid,
  Share2,
  Heart,
  ArrowLeft,
  Phone,
  Clock,
} from 'lucide-react';

const ApartmentDetail = () => {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="section-container">
          <h2 className="section-heading">Property highlights</h2>
          <p className="section-text">
            Experience the epitome of luxury at H.Q at Tilted Towers, a community where style meets convenience. 
            Nestled amidst lush landscapes with scenic mountain views, this property is just steps away from 
            Oasis's vibrant downtown. Residents can indulge in a range of amenities like a basketball court, 
            media room, and hot tub. Proximity to prominent institutions like Hustler University and an array 
            of restaurants ensures a dynamic lifestyle.
          </p>
          
          <div className="highlight-box">
            <div className="highlight-item">
              <Home className="highlight-icon" size={20} />
              <span className="highlight-text">Best Unit: 1 Bed - 1 Bath - 820 sqft - Avail. now</span>
            </div>
            <div className="highlight-item">
              <CreditCard className="highlight-icon" size={20} />
              <span className="highlight-text">$1490 below your budget</span>
            </div>
            <div className="highlight-item">
              <Grid className="highlight-icon" size={20} />
              <span className="highlight-text">4 of 7 amenities you're looking for</span>
            </div>
            <div className="highlight-item">
              <Grid className="highlight-icon" size={20} />
              <span className="highlight-text">No Hardwood floors</span>
            </div>
          </div>
          
          <div className="button-group">
            <button className="primary-button">Calculate Commute</button>
            <button className="secondary-button">View 3D Tour | Watch Video</button>
          </div>
        </div>
      )
    },
    {
      id: 'price',
      label: 'Price',
      content: (
        <div className="section-container">
          <h2 className="section-heading">Price and Availability</h2>
          <p className="section-text">
            Verified by H.Q at Tilted Towers 3 HRS ago. Prices may vary depending on lease length.
          </p>
          
          <div className="unit-type-buttons">
            {['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'].map((type) => (
              <button 
                key={type}
                className={`unit-type-button ${type === '1 Bedroom' ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="alert-box">
            <div className="alert-content">
              <h3 className="alert-title">Never miss a deal!</h3>
              <p className="alert-text">Get immediate alerts when prices drop or new units arrive.</p>
            </div>
            <button className="primary-button">Turn on alerts</button>
          </div>
          
          <div className="unit-box">
            <div className="unit-header">
              <div>
                <h3 className="unit-title">The Appalachian</h3>
                <p className="unit-subtitle">1 Bed • 1 Bath • 820 sqft</p>
              </div>
              <img 
                src="/api/placeholder/100/100" 
                alt="Apartment Layout" 
                className="unit-image"
              />
            </div>
            
            <div className="unit-list">
              <div className="unit-item">
                <div className="unit-info">
                  <span className="unit-number">Unit 2245-303</span>
                  <span className="unit-availability">Avail. now</span>
                </div>
                <div className="unit-price">$1,710 ›</div>
              </div>
              <div className="unit-item">
                <div className="unit-info">
                  <span className="unit-number">Unit 2095-303</span>
                  <span className="unit-availability">Avail. now</span>
                </div>
                <div className="unit-price">$1,740 ›</div>
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
        <div className="section-container">
          <h2 className="section-heading">Total Evaluation</h2>
          <div className="stats-container">
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
        <div className="section-container">
          <h2 className="section-heading">Bedroom Evaluation</h2>
          <div className="stats-container">
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
        <div className="section-container">
          <h2 className="section-heading">Bathroom Evaluation</h2>
          <div className="stats-container">
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
        <div className="section-container">
          <h2 className="section-heading">Kitchen Evaluation</h2>
          <div className="stats-container">
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
        <div className="section-container">
          <h2 className="section-heading">Laundry Evaluation</h2>
          <div className="stats-container">
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
        <div className="section-container">
          <h2 className="section-heading">Living Room Evaluation</h2>
          <div className="stats-container">
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
    <div className="page-container">
      <Header />
      
      <div className="back-nav">
        <a href="/" className="back-link">
          <ArrowLeft className="back-icon" />
          <span>All apartments in Oasis</span>
        </a>
      </div>

      <div className="main-container">
        <div className="property-header">
          <div className="property-title-container">
            <h1 className="property-title">H.Q at Tilted Towers</h1>
            <div className="property-actions">
              <button className="action-button">
                <Share2 size={20} />
              </button>
              <button className="action-button">
                <Heart size={20} />
              </button>
            </div>
          </div>
          
          <div className="contact-info">
            <Phone size={16} />
            <span>(###) ###-####</span>
            <span className="separator">•</span>
            <Clock size={16} />
            <span>Open Now until 6:00 PM</span>
          </div>
        </div>

        <div className="image-container">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUWGRgYGBYXFhoaGBgdGhcWFxgXFx0dHSggGRslHR0YITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8mHyYtLS0tLS8tLS0tLS0tLy0tLS0tLS0tLS8tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD8QAAECAwUGBAUBBwQCAwEAAAECEQADIQQFEjFBIlFhcYGRBhOhsTJCwdHw4RQjUmJygvEVkqKyM1MWc9IH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAAFBv/EAC8RAAICAgEDAwIFAwUAAAAAAAABAhEDIRIEMUETMlEiYXGBkfDxFELRBaGxweH/2gAMAwEAAhEDEQA/ADEJizCILRITEjIEelyPF9NgQREkog0WYHWORJANYPJA9N+SpMkRxRDFMgNSK1yIRTHljaQGExIhqxZOThDmAFTSa++UFy+BIw+SKSSoqUaaCIEvUxLrFa1cIVK2UclFHjPERLi+QHi6XL1hm6FS5bKDLDx09NIJWKRAJeFQ7+AeYKdvaJDZAORi0oiuYIZCMaS2UAd8eKTANjtGGhy9oaBD5VgkgcpiOCCvJO6PPKO6DZ3FgpRHnlwYJBiKpbR3I5xaBSiK1IMGFMQKYKYrQPKSxgpag0cmVHipcB02PFtIGUBEaQRgjzy4Ni0UAR4ZYi7y498qOs4FVJitUmLbRPSjM13RGTPSqmR3H6QPVjdWN6M+PKtFYcRaFPFipUQwQzpiptFUyXFKkQSRESI5AewRQgZRMHqRFJlQ6aEaYxSk74mEnfFc61JTxO4QFMvFRypEitjZAIii3W1EpKlLPwhyBnC0z5h+ZXtGW8UzCFYvMIOEApq5DmvL7QstKzlK9GyTefmISqWopSRizqdNDlHibYoVClE73jGeF7ehBKVKwg6HInmz9H1yjXSmIBBcHIwIPktjSk06LZlpUoua9YhiJ0iQSItCToGhqSBbfkrCI98pw+kTEeqMcdaPJBAPCCiYGCDFiENrAaDGTWiZBMe4QI9Bj0JhR+RUqKsMFKTEMEMhJA2CGN12ptgtwf2igy4j5UF7OVpmmwkCpAipR69IGsFtxDCs1GR3/rBE1jrEqNLnrRWpTRBUx9I4pjxoaiLmytY4RUUQQRHmGGTEeygCILJggy48wQbBTBfLMEy00j1o9CY5uzo6AbTbEIBJUC2gqf0hRab0Uqg2R6txMTVdEl3MtJ1q594UXteFlkEhMpCljTCAB138IwyzuWkerj6WMNvbCzapYFVJ6lPtpA67Yj5cStwSkkb6HL10hSjxZMSxEqWAdAnpvjQ3Vf8ALtOyRhWmuF36hhEOxq7lAviahL+Usj+dh0BB3tnDG570TPRolYopBzB4A1aPL0AEvmRv+8KLvXLXaWw7UtmU5BOySQd7Uz4xqwZW3Ri6nBGm1+JpiiKlCLFOYjgjdR5NlRAjzCItwCIkRwUI5dtlkCueQLueSc/aC5c4Esmp1A057usZ2xXDNKgTPSxo6CpTjsKdY0dmsAQAMSi3HCn/AGpZMZcc8r9yGa+CFptCEEBa8JVkS7d8hGRv8ICiETFLL1Ggpv8AmL7qCN0uSkhlAEcR+MYz5uGSkkbUxZL4EB23YqhhzIerQ+S2GEd2Zy77vWpaTgUUvQvhBwgqICmoY+jSxTdCLwnICpbqKthagEUCQaHFSpNdSQNI0eGDjVIbJfIikkR6ovHoScol5bQ4m6K8MehEWYY9lsQ4IIqHBfKhHeDYtHJyjgIswRJKIAStCIsCTFgTHphWOtFRjmiYTEgmOOsqAjxouwtHNBAUAaihhjKtgLYqH0gXBEVJgBWhm0VqfSB7LNw0OXtBpMDsHuC4zHvmnhFq+UVLT0h1RN2uzJomPmI9xCKBzjlTmpnHNIKky6YtIDvAq7ZuHeK1B84CttuTLKUkEqU7JAcsA5MI6SHW2kCX3PVLlEoDqUQlLBy6qBqVMfOCoEOXq+u4kVj6BbLWlflkBQwTErOzmz0HGM1MuTECHLEn5dColsxpSPPUXR7fNXsru6yygELnBQDthMhc0DECQVBgknLZIObh2hhddqllU3CZuJMzEgCUlIKZaEJxTAQ6KYhhDUqaw3nzxMx45KyFLExgsJZkBIGVaD1heiyhMyZMTLUMZUQkKSAkKABDAV/WK0qqjM3NyvXj/wB8Dy+PgG/ENOB4RmfCSXtcwv8AMvlkIaW62TFgbIDF/iPJjAd02fyZhKgds9iW+vvAwxcWrG6iSlF18GrXMSPmEehjkQYSzrSkTBLOZSVO9A34e0VXZbxMcpBSUlvz17R6FnjaHpEVkjfAP+ojH5avibFTdCy1eJJaVqTgUWLOGrvg3HyxW38A9w3qpWEK8kJycLY5UZJ9oc3rZpkyXhlTMBJz4a/gjAXdgCg6Xb5SSx6pY+saiRfzJAACQKBIDjuaxgXUKKqRp9P4C7F4ZShRKllaXcJUOPzV2qcBBl7XoLOAEoc0OTISCWdR0gD/AOSMPgBO8nCH4xm7wVNmqMwpOZrhASNA2sFZY19BN6Hfgy3pxLlFgpaitNaGgBZ6vwG6NalEfJ0AjMMQXergitOMbOweJFmUh0BxQqqQrjv/AFikMlKhprf1dzUBEVCcgL8t9psTcHI/OYhbaL+GEFEs/wBwLPupGWm3ovz0zVIBKS4SSrCFGjgGoDsabob1fgV0ja3xaEoln94JaiNkvUncIUeDp6tuWo/zCjPViUl6hwdM3iK79M0iWmUnGATjWBhBwlzhOQ66iI+Gr3VjEpQBxfNRLOSoqUfmd/QQqyJyGpNcjVRJJgG+5qfKWArbAURTVIJ1zFGjKJtM7yQty5mBDNoUJU+7MmsdLMk6NGLpuauzdhY3jvHrjeO8YuctaZcpXzLQFGgFSAagimcDXja1oSgpqVIUo7INQoDd+NAWYd9J9zeoIORiNrnCWhSzkkE9oxdqtC0qQAQQoIeg1Z+UXlSitcvFhG2AqtGBY0qW7wfWQr6R1pmiuK8fPlBZYKBKVAZAj7hj1g9UY7w9ahZgpClBRUQclACmVUivVofWW+UV83CncUnF0IDkGGWREFil5QXaZuFJUXYBzn9I6WygFJLg5RmvFV4YmCChSGzA2ncUcinTOGHha24pP7xY2aBISHAH8TGpPIZau8D1V+R3CV8aHNecWomNwhbbLzATsO530bi2sLjfUxADpxF68Oba/aB60W6OcWjSTraEhzSE9qvxIqBi658hCe97eqYHDpIowB4HEO7f2wvTYppKcSFMWyFQM+hhJZJXrSBxk+yNeLyl4At8/lo4OoMVf6ul6pPcfcQml2ZIoZU5t4NXoHyNMz0gf9iVVkrxPQl6cMoR55fJSOCTQ4n38ApghxxzhBNvVa7XKNPiCAKgDHsnXjv0iwWI4iTi4DT7x132JInoJQSQoF9pgQXBrC+q33YY4ZOar5NGZWEOfLAGpdu5ML5luSCWQFtmUodqtV6txaO8TzsGB9cQGbOcIfPc8PfDl02dEhMycErmKGMBTKTKcUAGWMBnVm4YMABEbnLSPX4xW2ZwX0kGsqmWISw3rnyFYNkzUzay5iMssAf2htbxYZ4UgAJmAMJ6UgBycipmmJ3pqGpQxirhWBaCguzuADkoM4rmNOLCA+Ue7OXGXYcXlIKSlyKv8gG7hFdhSicdWSQRo7EEHkRwi7xIQByQs6bv0iaVoSoGUEv5UkLGjhKhpqzEmKwbqyWRRumLr2XKTMBUlyp0EvkGYkVbWLLJZ0SHwuys6EmmWTwt8RSlKVjySN2W/WrnlF90TVKQVEuVGg3aUivqtLkjHjwxlllCSryvwBJ0ub55mgOA7PSjMKPCmbd80k7BPFx94eXpacCTru/WK7PbUFIfPWsLzm1Y39JgUuFu+5kLNMqxGWjsecOEqIALljvzhTLlEmiS3HPnwg6zEsxIPAEHvp7wLS2Z8eVRdf8AAShY3Cmuv6xXMtik5AOHbNw2sdPLDJjpWvasLlzMWEDv+flYHJSfYac5Sdx7F6prrDgbTE6B8ql/V9YMk21DslapdQxLLbWrjJ9x1GecK/MA+Lk2+PClIyB0aC47Flkk0rRrbUqYJTqGJJAKVJBGgIxDMfmUZubaHL661eLv284MDnC2XWrQEVA/QaiOxWu4jxqTtDuTfWEJT5YAFFGr5514Vq8DyFghOLVqDPcesV3fY1TMTHJnBdyCalL5tueGViu4gATKAE0o+erb6RzlDHbOcLjxY5sNod0AlhLmDazoklIcZlqd4JkkmS6hUTVDoy8PoBAdilBBchgUqar5pI+rQZPKv2deAjFi2SzgEy5mGmWbRmcoy7HqdHqHfZVfiwEynzwH3ECT1OiW2bK/7GJeKT+6kmj4S3+6vo8Cy5gMqXhZ9p+7+xi0faUl7wu1Hal/0oJPDD92iYLTlc1+yoqtZ/8AH/Qgx6qYDPXX/wBlP7VQwpXb5gIfEkjKla57y0VWqzpSnEMyf/1AwsysBCUqUoqTRIr8JGQfdH0C6P8A+fGYkKnzMANcCMJVrmagZ5MY6ckkgwtuTZ82tKw286k/nrBd0TiA5YJBcZPUiiTnxj6unwBZBXysR3qKlE/8m7CLD4LksBgSANww+0J6iqjPHpHdujDWJKSpKkKmF6F8kkBiKCmvPpBqZJJYKV3hvbLplWdeFKAHAL1rUj394DWpD5DmPqIaDfgdY1C0BKlblE14R75VPiPYRCfakD5kvxUBC+y2qabSU4Znlhw5TsE7LAKw556xS2GkOhZ/5m/tSYXzgQojluGjvDZxrSE94rLrLF+fCOg7Z2RUgYrJKqnZUnXQgVbvHtgmq/aAHLOGfLU/aEzrU7fFh1LEnCG3V7Q7u/8A88kf1/8AQx2T2MGP3o88VyisACuAYm31qBXcDFl23uhckIW1EsQwZQbPiSNPwl28DzK/wjXiYEtdwoXtIdKiHISzHoddSzPGbapo097TBrdaZUpJwhLH5QBmd7QB4Rs6lTjNOW01c6OT6Ad4JFypJ21KVwLNxFKnkS0Nrtl4VgAUALdt0GTk1chY8U6QN4mmbKv/AKzv1xCBRaEgKIAdwKDNgP8AEG33ZwsqQXAIAcUOb0pCfyizJIYPs6mpHb8pHW1HRPLdvj3OmzVHP8/SBStSfnAIL05QLPmLKxLY4joffhkYkqyLUWKkvwduNY6MWtmGMMt2k7J20TFgMArkfvAMqTMb4D+dIdWWzhKRWiavxq7cIFnplEuqZhO4E+raxTm0qRonh/vupP5Msrr9f1gmWlYKQG2gCC756EHXhAZl5nSucG2adQJOQegy6/msFrRiSj5HKrmUpIcTq5EyFseAdg0dJuyUhJC1KJyoAkuNKlnekTly1S0GZJWWAd5cwg00IdweEGXba5kwnGpRIepYqzrtM5hYKjdFUtiJdgStgEzCS5ACpde556RbIuZalbSJgTvCCo/8XjVlJ/iUeZLRFcoaARXbJzhCXcWyPDUmYBimmVh3kAnoxiU3w5JRVM0qarpIy4jC8D2e8FmUVlkkKIoGGm/jB820FTYRiJplQtmC36RPJNRjZ0lBLseyAlICUJdR3Da4pfXTvHWm3IQCAkmtUvqMwTvihUlSXcBRcUDEJo3J8+QpFSJWM4mUNGcEne2oAz5R59pvZNv7Ep14OA6U7yBTcQKHgdNBHsq8yC5pk4zfOo7+sXy0ollkM4Y8a0bKn6RRaBKUdxGTU9GyB4fo0ZK+wm4u09oM8SoJkyaFyk5jepREK7Mf3SasHWXfQAKLb6Amm6Ol2hjhmKKkpYgqJLEZNWlDlE7R5aJKUlzhxJDNUKQQX6bt8a4SXtNa6hTlYWuUVhNWwpDcaEP2UYiizvOUoLckq2QklqVryI7xOwTQUg8BFcqekzgEk4yo6UBLDdwEWQzC7qEoqONOJIYsSkHExws5rU6Q1RYwapCeoA+kAJ8PrD1S7hql9kuDX6vBH7PaBVgwzGb9hT9YhOTvTNmKMFGpJ/j+/wDIVK83NC1/2rUPYiJC9J6VYP2iaFfwmconJ6Aq3V6QNZLcahUtSCCzhKsmDAls3eLhbwDmK1Bo+QBFci5gKT8oE1Be1sjeNsmrYzZyywLFRZhrUB/WE0iclai4LAkOdpyOBMEeKbfilKYkCia0zP53hX4foltcR1isXohJbNLYRIQQp5rjLChCR6lUFWq3BTNJyLhRWQxqHZOEawCbQkIqag57+HdoHk2xK1YQC+dRn9oFq6Z10g6VaFFRxHPdX3yge0KdRcV7/mkWINfoICtqiyt9czFIe4WftFxmBM5aiWGf/FIrDa7g9oRwCvYiM1vckAABxozfZo0NxTgqb8Ohqd1aNkx5aQcntYuL3IYW8ETKjJI37zBshZoC+Wv+YBtZ/eGug+sMwtjm5bX/ADGaXZGmPdkJshJzqTw/zHWWSlJphHBvq0WFZyGQ0Z/oY5BIzHpx6RJsqkJrxrOV0FOQMKRY0LAJWlJrRRAOZLuSIZ21f7xf5kBxhJMkuAXag3/4jQlpGZ+5kp90KUpKhPlHBk6w54EipgpN2rIoyl/yuw9HMKJgbVRyyPtSIDEXagGTkV6mG4fcCdOw+2XfMlr8uaWNHAUC2oyJA5RH9lQNTFUoGlU0H8Q+hi3BwPaINI0KMTO2e7SxJGJTMlAUwfIFVfT1i5N3JQB5igVv8KQSeWgJfpEJUxR0UBu/GpBcm0S0sFkl6EPXq1QOwirlLwfMqWTlSewyz2GzkgJMwLIIO0Qk0Yh6hoNsqGU3lqRlmoGodyCwDZU9YS2eX5iwrzClSiMICNlI3A4tGAYiNJOSQkOXO/J6a8YVNqSR7OCM/TfNU/tR6qYNSls6+8dLnpUHSoEHVNR9oz1lsahNtBIACwwLu/QF2rug+6JRlSglRDhzRwKl9QI0iF8xCU7KR0AAFTmWDQQq0gbNKgg4iz1oBUa13QuttoTmC5yoeVMiPfc0EXBYfOeZMcoS4SjVZcmpowAcd+MeR1mRQuc3pfvQqTukV2YqnHykFWJzlkGPzVyYfEN0aORYJcpKiolakiruQ+qdc6aE7WkXpdiQlKAM8nyzYMK4gRXpCubei0sKKIBqlyn+WtGf4W4dvDy9XlzuoaX4/wDZTgoK2deNgckJwoFQ9WyIyYOTl94y09akkpNGz+hH3pDuZbZik7YwcRSmjPpTSAJ1nE4hWJi3xa++/tXlG/o8s8esjtfqZ503oWqU5NKa/T84RfZLIZxwAE0JpX6xVaLIpDY3AJ3FyKcG9cxGh8O2VBSny5wlTMW1jSXUkEbIYEVAPJ49qHyhsWF8tlMmxTZaQPKmHR2oP06wukzEpnAqUsHECwQC1a5mnvH1SzqknEkIBZAVjfGkk4nGE6hgWIDvGNtV2T1krlT5BxAgiktRCs2SpLPxeH9Rv7G54opryaGyW1M1OJCnHKo5g1EWHkCfzdGTuG7LXZ5wM2UcCxhJZKkvUpLpo9OxMahM0EkVfVjTlWMs5xi6bLqS8kwnVmPA/eAbzYNRWte0Habudf8AEJvEdUJZbVLtrQRWHc6a0xF4kmAyimlSOJ3wLdBwSsRonEQH13sNekBXiQASkuYpsaSRtPmcxGlGVmn8zzEslSXBBoxZi4pELNNliZgKhjDjCH0oRu01OkBylYJa8Ka4S2ZLnLrFEm6ppnlbMAtRqamp+kco27A2kgm+LZaHwyUqBBfEACCAz5hqOO8StNsUrEkB1j4mGp5d4Ns1nMtRX5qwS/zkAOQSAHpkOwixd9qFEqKuKwD/ANgXiiixHJPQjTKYAEUo8aS4R+8OmydOIpFUq/yWBs8tR/oS5/2gQ2sc7E7yESi2YNakUIdgITK6jsfGregaeB5h6e3KGqC53nm3atITzgfMVTUacA2lIZSyaguOf+YzS7I0Q7sJJ3FuYf6QPLVQguPaPFoegPpFlnBrqOB96xJlTPWtVVn+r0pvgGVZ3qxyGVNBBNsUT5h4q9zBNkosMBVCfvGlOjK1bYuVZhpi/wBxb3itVm4nsn6pjRTEhqj0pFPkIIqB2EHkvgHGXyZxVlP8QHT7NFSrHxT/ALT94fLkI/wMo8RY0n/I+0HlEFSMLKmOQcD7n04hOnOC0BCgwADu7M79IGsCFTHwIKkVBJYA8APwwylXUUYQFICVO5cnBhDkKTni3DWIZZeDzodNk7qyFnQ1HGf1PaDZlrWE5vD+7PCrsqYoBKg4HzaNU5U0bVojenhVQB8qYD/KqnqzHsIlGW0ezji/TqXcyy7VMOvQH7RCXUsVZ041pSGQ8M2h6pJ/pY/WJJuTD8SVDmCI3RVmWWvAutEpCQySS+bl9C3vGjuG0BMkE0wgsDoRiJI4VP8AmFk+UJeFQYJD4qVNKNE7uvEKSqrFJy3jeNd0ed/quGOTHXlbolHIlKhuu85YSFYlMNpw76tloCGbQjhFAtiVFL/AWL03unPj+awrWoKJUz6HLJ2Y9axUV9QdTHhR6eKA5SNBabXLJ2lbRZgQNMVQcL1ch3BfKFdtW5OywDa6ZhgPykAgp4UdjqDU9/vFkuagrSlSmBJqTQUGfCjdYv0/T1KogdydGouO6ZxlpmMClQGEOAcIehcZPXi7xfa5qpY2kFGVSnZrxH2i1F4T0hKSwQkMhnFMhoxHKGdmviVhaZMCVcaCPci4pJWeioSiqoys20zFZVG8H8PeAhbFgULpNM3HIZiNNedyybQSqXaEoJDOMJTrUhw5rv0hbeXh60oCUS8KwzYklIFGYkUO8tWKqXgVohZLUopLk70kF61f8o0Rl28hSmDKyL1dxnXKL5Nx2lKXMtDnNKVAKUzkMPhbpvgWVJU8wKSpBBYhQdtlNFKDOag5GhEY8mDlkciUsbe0Npd+y1fGhLUqklHd3HaBp132eYlhOWkYtQDX0JHR4Asd1hKMJO1vSSH6FvaI/s6go1wgNUhnoBpXPWNsYpaix7dbDJHheQS6Z6FK3KoexLiDZfhNX8vQk+4hfZ1LOykFZrQhw/Ku/UnlGo8P3bPlklZCUn5AHydsqJ3w7lKK7icYyfYEFwSUDbXhO5gSeTEwDNs6VJGA4CQC6touRWgAAHUxrbeJeBQWSlJBD0eu59YzE/y0tgUogUGIJrRsgBCLJN+SnpQ+Bam6kPtqKlc2bo8eTLnlHIq6F/cRemyoSSpKcJVUls+sXJyzB6wXOXhhWONVRGyWJKaITzOvUwUlIDsajNtIoKzo3dvpHtnVQuG5H9Ik7e2USrSBEl5p4qH0hqlTEj3/AAQplKHmNrip+PDaWc8uv4I6YsPJ4pZL6jk/0j1BplX85x0xRILH09jFJW6Xc0f6c4kypnbSdlXE+5gu70kqJrSmXBvYQutJ2OZHuIaWIbSxx3tkTGkyoKmL4x4ZhbP0/SPVjcR9YgUU+HSFHKFHgYmhQ3H1ihVNO5+8WBL6+8FgR86uW1/JhUpy+yHbLMCrRoLIsomy1JUHBJb+0g8NYR2acG0A/gBqebfUQzKgSlYXgoRh1S7UcZ+hgvGm7Zgj1so+6kv9zZzL5mYAwRiLvhJIHRg/rAf+rzGbHzLJHTKkZW12wE7BOKm1pzSS6n/uikKUcyVHiXMNFQiqo0RnPKuVtI11l8ReWGdKhxc+rwXP8YpHwSieKlU7CMZLmJOysMRqKH7HrEZ8hYGztAbs/wDbnEssZSdpEck88dQeh7abWu2EBaAlCXcpAAJ3H5jTR4667vSiYlaFYWKzopwwASxBHF2djBElYElDSvLOHFgqS7MXersHqxApA8pCjiOQTSpbNjQfQR4kskpybugJSjt7a8iu/JUzzVh8KVKUpIBfZxqA3NrFSJlMJVVNH5UfcxhpLu2asiYApaSWJdLAChZ2LMOPSCJlj8gTgvAZcw7KQdvqyWA6584u8sZRUW1f2r8/2y0eEo8pOhClTZkdKMdT9YXWl8WJ+QMHW0AB0ppuPbrAEmSuYdlJVyFBzOQj0cGOMPqW2Z+cf7dja7rUspAK8Kc8IJI7ZDvpDD9qYZvzZusL7Jc6gHmLAG5NT1OXZ4NQuWn4RiO/P1OXSDLFJu26JvppZJcrLpUxTuNkN8VQDllv6QwsF+zZRcEKG5Qpzo0KVzVKzLDcPqdY5KNAIolSpM9HFDituzVy7/mzClaZKUqyS6ScZL0SxfuluMGyL0EmYtM0oSZq0qw4gSk+XLQoLDDDVL1INcjGUu65pmMMtUvFQ4SxL0L6Rs7s8LyJVSMahqoU7fd46UEmmxoSbugv9klrrhFW2hrA48OSXfEoimyaAtlpBFrsiMzMCUgNhyT7+kZZJnJThMwKP8ZJY1OQbTiBHQ+zGl27G2skpKSEISlIJamvM5kxfeNqRZgCUlSjkBRPU/5jKeH5FoVOQrF5gQQS4LJ5HfGq8Sz5XkKTMUymdLByFaFqU7OIKX1fJzb4/Bm7X4gmqUS6U8AlNOpBPrFBvqd/7D0AHsIxE28VrVsJfmVOeiSABw9TFqhMaqgDuAJ7kmLPivBBcn5NefEU9h+8NDk9DXWGqLYiYkFUqWp9cOFXdLR8zBmAM4LF3ZQ9lNB1g8SmWcCkrbU59QCB7xKbXhFI8k9m7mWWznPzUf0qSodiAfWLlXbKKQJc0PV8bpfJqsQNe8Z6T4gQQKp6uk+uz6wWLeGeoG/Mdw4iemV2jh4dtIUSEhaSSXStJGZZ6v6RMSVJosKSX1DdnA1ici1A1SrqDWCv9TmimMkblMr3jnGzk6F608cvz8rHswtLUTWhrmMoYKtyFfHJQeKXSft6RTOlSFpUlJXLcEOQFAPyYwjgx+aMZNJYb3ENrERtEtU7snfOCk+Hj8k6UrmSk9iPrBRuxclO1IUvV0OTrQYX3DNs4vKuP3M8FLl9gOb6RXNNPr+CPZtpkOxUpHMYgOztFisKh+7noVwdj2iVlaAyrk3CLUq5dh94qnSpgzHZvwR7/aerwWwJHztMk7+5EXyMQ1KejCKZcxhQgdcuW6DFTUlNVpxDIkgdCdIPJyWz5ubkEWaah9st0c9tIKmTQWYKbon9B3hIJihklLfnQw3uaSJ6hLYlVfhUgBuRoekJL5seCk6iu/6/wdgQpTYCX/mFNzUZu8GSkusBGDClnAS5PJTP1yhnJuxEt0lHMKA9su0FpYBgwHCMkuokm6Pe6f8A07Npzn+W3/hL9AeeVFQfEA9SkueFAQDyNIrRZVTCoSwVISpy1FHQKKXd2DUgwiF9nOGfMYkFkkEUIzB+kSxqLi01+f5mnL0STSXk8tV+hDSpaGw0bXLJs3gC1zJs1sWmQOnTPvDC3T7RMV8BmECqkpSC29agHHWkUyrumK+NWEbkfUxTF0/T4lye2ZP6KcpV4/QCmSJafjOI7j9h+sSVayzJSwGT6cgKCLbxsKUYSlJbUu4fjxiFmsal5Dqco3458l9CGeCOLTKC6viJPOL5EhSiyQ/5rDWRdAFScR3aQemaEpZKW4jL/EWWFvuTlmS9otkXVqs9B94cXXYUrOBOFOpJ++Zidju6bNqiWSN9Ep6OQDDmx3FORtYAV8VDCO1TDycYLXcSKlN77FtmuqXK/eKmgtkTsgctSesV2m+B8gfiQw7Z+0equK0KLrKeqqDkAI6RcLH95Nlgfyqr6gNGVtyds2RjGK0KphVMUCxUrIUc8gBDmyXEhKfMtKgkD5X9yNeAj2fe0iQMMhIUdVadTmr2jP2q3KmHEtT+w5DSKRxtk55Uuw+tniJKU4LOgISKAtXoNOecZi32wMoqLkud55n7wsvG90oFCz5aqP8ASN3E05xnLTbVzTWif4d/FR+Y+m4CLJJdiDbl3CLFPY0yOZhkBAllsLhzT81g3yG5QJJNjwbSKlARWQIuUjhEPLidIe2UrEQQSC6SQd4LH0i9SYlIs5WoJTU9B6wGkNbOReU0ahX9QBPf4vWCZd9kVUlQ5KccaKr/AMoon2NaKrQpI5UPI5QPMDwtBsdyL9Qc1D+4FJ+o9YYS7YlVRUbwyh6Exi1S4ilLVBY7wWMHZ2jcKnIUKKB6xfItSk/CojkSPaMKLfNGasX9YCvU19YIkX0R8SSOKFH2U8C2dRt/9YmEMrCsblJBgeebMv47Ml96Nn2jNSL5B+cD+tJHqHHtBsm3BQycb0kK9i4gWdQ3m3HKDeXaVSzolaqHh+PCyfLtUs4VBStXQhwRwIEHWm0PaJQBcbR7JMORaFaEjsfcQrl8jKPwfFJkr1b7H19onLsZUoJHN+2cdHQ02eF0/wBeSMX5DJVyKfZBPKrc/vDO5rpUuZ+7pMQQTqjgcaCSD0HOOjoS9M9SXRY7Xc+iBBWgJnJSFDUF+rsG5NCu12BSKh1J4UPX7x7HRnnBSPRxzcNBd3KlTQ9lUMSfilqYTk71VdxxQ2cJLXMm/tMyb5ImKwbZUfLSn4WUvIVwnUVfOOjoaMEm14/glKbavz/JZM8VolhJC1KWwPlytiWk7iptrccKa7466bdMtcwlUtKHq6UskcGGvEmsdHRd4IcGShnmpqh6myS5QdbNvUzetI6TJkTQSkJUAWOE0cMWpzEdHRXFiSwPItNNInlzOWdY3tU2ESLnQfhQ4/mJb3r6wfNXIs4dZG/CBU9PqY6OgRuTpsaVRVpCa8fFMxQaX+7TvHxd9OneEircs5rUepjo6NCikZnJvuRTNiRU4jo6GFKV2kJ1en4ToBxMZ+8r+xUl1/m+Uf0j5jxNOGsex0KMkKkIKi5JJOZNT1hnZbOE119I6OhZPwUivIclbRYJ0dHQiKHFYOsRYx0dB7g7FalQyuRAIWSCBsgKyHzYhu/h9I6OhGrGTA76vpj5EpbiuMin9rjM792XIEZM7x0dBarQqduzwxWY6OjhiBSIipEdHQDisoioy2LihFQRmOIjo6AxkH2e85gmJmqAKg4cbJL60o/TpGns3iNCkviQOCyUnsxHUHtlHR0TcUx06P/Z"
            alt="Property"
            className="property-image"
          />
        </div>

        <TabbedNavigation tabs={tabs} />
      </div>
    </div>
  );
};

export default ApartmentDetail;