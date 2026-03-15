  import React, { useState, useRef, useEffect } from "react";
  import "../styles/Portfolio.css";

  // BILLBOARD
  import billboard1 from "../assets/projects/billboard/billboard1.svg";
  import billboard2 from "../assets/projects/billboard/billboard2.svg";

  //BRANDING
  import branding1 from "../assets/projects/branding/branding 1.svg"
  import branding2 from "../assets/projects/branding/branding2.svg"
  import branding3 from "../assets/projects/branding/branding3.svg"

  //BROCHURE 
  import brochure1 from "../assets/projects/brochure/brochure1.svg";

  //DIGITAL ART
  import digiart1 from "../assets/projects/digitalart/digiart1.svg";
  import digiart2 from "../assets/projects/digitalart/digiart2.svg";

  // EVENT POSTERS
  import eventposters1 from "../assets/projects/eventposter/eventposter1.svg";

  //FACEBOOK BANNER
  import fbbanner1 from "../assets/projects/facebook banner/fbbanner1.svg";

  //LOGOS 
  import logos1 from "../assets/projects/logos/logos1.svg";
  import logos2 from "../assets/projects/logos/logos2.svg";

  //MENU BOARD
  import menuboard1 from "../assets/projects/menu brand/menubrand1.svg";

  // FILM POSTERS
  import filmposter1 from "../assets/projects/posters/filmposter1.svg";

  //SOCIAL MEDIA
  import socmed1 from "../assets/projects/socialmedia/posters1.svg"
  import socmed2 from "../assets/projects/socialmedia/posters2.svg"
  import socmed3 from "../assets/projects/socialmedia/posters3.svg"
  import socmed4 from "../assets/projects/socialmedia/posters4.svg"
  import socmed5 from "../assets/projects/socialmedia/posters5.svg"

  //UI/UX DESIGN
  import uiux1 from "../assets/projects/ui-ux/lyfe.png";
  import uiux2 from "../assets/projects/ui-ux/onthehunt1.svg";
  import uiux3 from "../assets/projects/ui-ux/onthehunt2.svg";
  import uiux4 from "../assets/projects/ui-ux/onthehunt3.svg";

  //YOUTUBE THUMBNAILS
  import ytthumbnail1 from "../assets/projects/ytthumbnail/ytthumbnail1.svg";
  import ytthumbnail2 from "../assets/projects/ytthumbnail/ytthumbnail2.svg";


  interface Project {
    title: string;
    subtitle: string;
    image: string;
  }

  interface PortfolioData {
    [key: string]: Project[];
  }

  // const placeholder = "https://via.placeholder.com/1200x800?text=Insert+Project+Image";

  const portfolioData: PortfolioData = {
    "Billboard & ADS": [
      { title: "POLARI", subtitle: "PROJECTS / BILLBOARD & ADS", image: billboard1 },
      { title: "BAYANIHAN", subtitle: "PROJECTS / BILLBOARD & ADS", image: billboard2 },
    ],
    "Branding": [
      { title: "MANOK ni JAYSON", subtitle: "PROJECTS / BRANDING", image: branding1 },
      { title: "MANOK ni JAYSON", subtitle: "PROJECTS / BRANDING", image: branding2 },
      { title: "HIDEGRAPHY", subtitle: "PROJECTS / BRANDING", image: branding3 },
      
    ],
    "Brochure/Infographics": [
      { title: "LYFE BROCHURE", subtitle: "PROJECTS / BROCHURE", image: brochure1 },

    ],
    "Digital Art": [
      { title: "DIGITAL ART", subtitle: "PROJECTS / DIGITAL ART", image: digiart1 },
      { title: "DIGITAL ART", subtitle: "PROJECTS / DIGITAL ART", image: digiart2 },

    ],
    "Event Poster": [
      { title: "GINUMAN FEST", subtitle: "PROJECTS / EVENT POSTER", image: eventposters1 },

    ],
    "Facebook Banner": [
      { title: "FACEBOOK HEADER", subtitle: "PROJECTS / FB BANNER", image: fbbanner1 },

    ],
    "Logos": [
      { title: "LOGO", subtitle: "PROJECTS / LOGOS", image: logos1 },
      { title: "CNT LOGO", subtitle: "PROJECTS / LOGOS", image: logos2 },

    ],
    "Menu Brand": [
      { title: "FOOD MENU", subtitle: "PROJECTS / MENU", image: menuboard1 },

    ],
    "Posters": [
      { title: "FILM POSTERS", subtitle: "PROJECTS / POSTERS", image: filmposter1 },

    ],
    "Social Media": [
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: socmed1 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: socmed2 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: socmed3 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: socmed4 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: socmed5 },
    ],
    "Website / UI&UX Design": [
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: uiux2 },
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: uiux3 },
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: uiux4 },
      { title: "LYFE MARKETING SYNERGY", subtitle: "PROJECTS / UIUX", image: uiux1 },
    ],
    "Youtube Thumbnails": [
      { title: "YOUTUBE THUMBNAILS", subtitle: "PROJECTS / YOUTUBE", image: ytthumbnail1 },
      { title: "YOUTUBE THUMBNAILS", subtitle: "PROJECTS / YOUTUBE", image: ytthumbnail2 },
    ]
  };

  const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Event Poster");
    const [projectIndex, setProjectIndex] = useState<number>(0);

    const categories = Object.keys(portfolioData);
    const currentCategory = portfolioData[activeTab] || [];
    const currentProject = currentCategory[projectIndex];

    const sidebarRef = useRef<HTMLUListElement>(null);
    const activeTabRef = useRef<HTMLLIElement>(null);

    const handleTabChange = (tab: string) => {
      setActiveTab(tab);
      setProjectIndex(0);
    };

    // Scroll active tab into center when activeTab changes
    useEffect(() => {
      if (activeTabRef.current && sidebarRef.current) {
        const sidebar = sidebarRef.current;
        const active = activeTabRef.current;

        const sidebarWidth = sidebar.offsetWidth;
        const activeOffset = active.offsetLeft + active.offsetWidth / 2;

        sidebar.scrollTo({
          left: activeOffset - sidebarWidth / 2,
          behavior: "smooth",
        });
      }
    }, [activeTab]);

    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-layout">
          {/* SIDEBAR NAVIGATION */}
          <aside className="sidebar">
            <ul ref={sidebarRef}>
              {categories.map((cat) => (
                <li
                  key={cat}
                  ref={cat === activeTab ? activeTabRef : null}
                  className={activeTab === cat ? "active" : ""}
                  onClick={() => handleTabChange(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          {/* MAIN CONTENT CARD */}
          <main className="display-area">
            <div className="watermark">
              <span>JIY</span><br /><span>JIM</span><br /><span>BOY</span>
            </div>

            <div className="project-content">
              <header>
                <div className="subtitle-wrapper">
                  <span className="star">✦</span>
                  <p className="subtitle">{currentProject?.subtitle}</p>
                </div>
                <h1 className="title">{currentProject?.title}</h1>
              </header>

              <footer className="pagination">
              <button
                className="nav-btn"
                onClick={() => setProjectIndex((prev) => prev - 1)}
                disabled={projectIndex === 0}
              >
                ← Previous
              </button>

              <div className="page-indicator">
                {String(projectIndex + 1).padStart(2, "0")} /{" "}
                {String(currentCategory.length).padStart(2, "0")}
              </div>

              <button
                className="nav-btn"
                onClick={() => setProjectIndex((prev) => prev + 1)}
                disabled={projectIndex >= currentCategory.length - 1}
              >
                Next →
              </button>
            </footer>

              <div className="single-image-frame">
                <img src={currentProject?.image} alt={currentProject?.title} />
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  };

  export default Portfolio;