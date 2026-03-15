  import React, { useState, useRef, useEffect } from "react";
  import "../styles/Portfolio.css";

  // BILLBOARD
  import polari from "../assets/projects/billboard/polari-led.png";
  import newled from "../assets/projects/billboard/new-led.png";
  import jeepney from "../assets/projects/billboard/jeepney-tagalog-ad.png";
  import bayanihan from "../assets/projects/billboard/bayanihan.png";

  //BRANDING
  import logo from "../assets/projects/branding/logo.jpeg";
  import adobo from "../assets/projects/branding/adobo.jpeg";
  import tinola from "../assets/projects/branding/tinola.jpeg";
  import idk from "../assets/projects/branding/idk.jpeg";
  import cap from "../assets/projects/branding/cap.jpeg";
  import hidegraphy from "../assets/projects/branding/hidegraphy.png";
  import hoodie from "../assets/projects/branding/hoodie.png";
  import mnjfb from "../assets/projects/branding/mnj-facebook.jpeg";
  import shirt from "../assets/projects/branding/shirt.png";
  import takeoutbox from "../assets/projects/branding/takeoutbox.jpeg";
  import thumbnail from "../assets/projects/branding/thumbnail.png";
  import apron from "../assets/projects/branding/apron.jpeg";

  //BROCHURE 
  import front from "../assets/projects/brochure/front.jpeg";
  import back from "../assets/projects/brochure/back.jpeg";

  //DIGITAL ART
  import emman from "../assets/projects/digitalart/emman.png";
  import ironman from "../assets/projects/digitalart/ironman.png";
  import juwonee from "../assets/projects/digitalart/juwonee.png";
  import maloi from "../assets/projects/digitalart/maloi.png";
  import rogerraker from "../assets/projects/digitalart/rogerraker.png";
  import rose from "../assets/projects/digitalart/rose.png";

  // EVENT POSTERS
  import ginumanfest from "../assets/projects/eventposter/03.svg";
  import richie from "../assets/projects/eventposter/01.svg";
  import contagion from "../assets/projects/eventposter/02.svg";

  //FACEBOOK BANNER
  import fb01 from "../assets/projects/facebook banner/1.png";
  import fb02 from "../assets/projects/facebook banner/2.png";
  import fb03 from "../assets/projects/facebook banner/3.png";

  //LOGOS 
  import onthehunt from "../assets/projects/logos/on-the-hunt.png";
  import company from "../assets/projects/logos/company-led-wall.png";
  import tpf from "../assets/projects/logos/tpf-e-sports.jpg";
  import tatak from "../assets/projects/logos/tatakcntlogo.png";
  import irgo from "../assets/projects/logos/irgo.png";
  import cnt from "../assets/projects/logos/cnt.jpeg";

  //MENU BOARD
  import foodfront from "../assets/projects/menu brand/food-menu-front.png";
  import foodback from "../assets/projects/menu brand/food-menu-back.png";
  import drinksfront from "../assets/projects/menu brand/drinks-menu-front.png";
  import drinksback from "../assets/projects/menu brand/drinks-menu-back.png";


  // FILM POSTERS
  import banaag from "../assets/projects/posters/banaag.svg";
  import buligaw from "../assets/projects/posters/buligaw.svg";
  import waves from "../assets/projects/posters/waves.svg";

  //SOCIAL MEDIA
  import poster1 from "../assets/projects/socialmedia/posters1.svg";
  import poster2 from "../assets/projects/socialmedia/posters2.svg";
  import poster3 from "../assets/projects/socialmedia/posters3.svg";
  import poster4 from "../assets/projects/socialmedia/posters4.svg";

  //UI/UX DESIGN
  import onthehunt1 from "../assets/projects/ui-ux/onthehunt1.svg";
  import onthehunt2 from "../assets/projects/ui-ux/onthehunt2.svg";
  import onthehunt3 from "../assets/projects/ui-ux/onthehunt3.svg";
  import lyfe from "../assets/projects/ui-ux/lyfe.png";

  //YOUTUBE THUMBNAILS
  import interview from "../assets/projects/ytthumbnail/1on1-interview-with-harvey-tolibao.png";
  import attyb1 from "../assets/projects/ytthumbnail/attyb-supermanila.png";
  import attyb2 from "../assets/projects/ytthumbnail/attyb-supermanila2.png";
  import attyb3 from "../assets/projects/ytthumbnail/attyb-unboxing.jpeg";
  import attyb4 from "../assets/projects/ytthumbnail/attybvippass.png";
  import attyb5 from "../assets/projects/ytthumbnail/attykorea.png";
  import cooper from "../assets/projects/ytthumbnail/cooper-flagg.png";
  import dino from "../assets/projects/ytthumbnail/supermanila-dinocornel.png";


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
      { title: "POLARI", subtitle: "PROJECTS / BILLBOARD & ADS", image: polari },
      { title: "NEW LED", subtitle: "PROJECTS / BILLBOARD & ADS", image: newled },
      { title: "JEEPNEY", subtitle: "PROJECTS / BILLBOARD & ADS", image: jeepney },
      { title: "BAYANIHAN", subtitle: "PROJECTS / BILLBOARD & ADS", image: bayanihan },
    ],
    "Branding": [
      { title: "MANOK ni JAYSON", subtitle: "PROJECTS / BRANDING", image: logo },
      { title: "ADOBO", subtitle: "PROJECTS / BRANDING", image: adobo },
      { title: "TINOLA", subtitle: "PROJECTS / BRANDING", image: tinola },
      { title: "TAKEOUT BOX", subtitle: "PROJECTS / BRANDING", image: takeoutbox },
      { title: "IDK", subtitle: "PROJECTS / BRANDING", image: idk },
      { title: "APRON", subtitle: "PROJECTS / BRANDING", image: apron },
      { title: "CAP", subtitle: "PROJECTS / BRANDING", image: cap },
      { title: "MANOK NI JAYSON - FACEBOOK", subtitle: "PROJECTS / BRANDING", image: mnjfb },
      { title: "HIDEGRAPHY", subtitle: "PROJECTS / BRANDING", image: hidegraphy },
      { title: "HOODIE", subtitle: "PROJECTS / BRANDING", image: hoodie },
      { title: "SHIRT", subtitle: "PROJECTS / BRANDING", image: shirt },
      { title: "THUMBNAIL", subtitle: "PROJECTS / BRANDING", image: thumbnail },

      
    ],
    "Brochure/Infographics": [
      { title: "BROCHURE - front", subtitle: "PROJECTS / BROCHURE", image: front },
      { title: "BROCHURE - back", subtitle: "PROJECTS / BROCHURE", image: back },
    ],
    "Digital Art": [
      { title: "EMMAN", subtitle: "PROJECTS / DIGITAL ART", image: emman },
      { title: "IRON MAN", subtitle: "PROJECTS / DIGITAL ART", image: ironman },
      { title: "JUWONEE", subtitle: "PROJECTS / DIGITAL ART", image: juwonee },
      { title: "BINI MALOI", subtitle: "PROJECTS / DIGITAL ART", image: maloi },
      { title: "ROGERRAKER", subtitle: "PROJECTS / DIGITAL ART", image: rogerraker },
      { title: "ROSE", subtitle: "PROJECTS / DIGITAL ART", image: rose },
    ],
    "Event Poster": [
      { title: "GINUMAN FEST", subtitle: "PROJECTS / EVENT POSTER", image: ginumanfest },
      { title: "GINUMAN FEST - RICHIE", subtitle: "PROJECTS / EVENT POSTER", image: richie },
      { title: "GINUMAN FEST - CONTAGION", subtitle: "PROJECTS / EVENT POSTER", image: contagion },
    ],
    "Facebook Banner": [
      { title: "FB HEADER 01", subtitle: "PROJECTS / FB BANNER", image: fb01 },
      { title: "FB HEADER 02", subtitle: "PROJECTS / FB BANNER", image: fb02 },
      { title: "FB HEADER 03", subtitle: "PROJECTS / FB BANNER", image: fb03 },
    ],
    "Logos": [
      { title: "ON THE HUNT", subtitle: "PROJECTS / LOGOS", image: onthehunt },
      { title: "COMPANY LED WALL", subtitle: "PROJECTS / LOGOS", image: company },
      { title: "TPF E-SPORTS", subtitle: "PROJECTS / LOGOS", image: tpf },
      { title: "TATAK CNT LOGO", subtitle: "PROJECTS / LOGOS", image: tatak },
      { title: "IRGO", subtitle: "PROJECTS / LOGOS", image: irgo },
      { title: "CNT", subtitle: "PROJECTS / LOGOS", image: cnt },
    ],
    "Menu Brand": [
      { title: "FOOD MENU FRONT", subtitle: "PROJECTS / MENU", image: foodfront },
      { title: "FOOD MENU BACK", subtitle: "PROJECTS / MENU", image: foodback },
      { title: "DRINKS MENU FRONT", subtitle: "PROJECTS / MENU", image: drinksfront },
      { title: "DRINKS MENU BACK", subtitle: "PROJECTS / MENU", image: drinksback },
    ],
    "Posters": [
      { title: "BANAAG", subtitle: "PROJECTS / POSTERS", image: banaag },
      { title: "BULIGAW", subtitle: "PROJECTS / POSTERS", image: buligaw },
      { title: "WAVES", subtitle: "PROJECTS / POSTERS", image: waves },
    ],
    "Social Media": [
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: poster1 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: poster2 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: poster3 },
      { title: "POSTERS", subtitle: "PROJECTS / SOCIAL", image: poster4 },
    ],
    "Website / UI&UX Design": [
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: onthehunt1 },
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: onthehunt2 },
      { title: "ON THE HUNT", subtitle: "PROJECTS / UIUX", image: onthehunt3 },
      { title: "LYFE MARKETING SYNERGY", subtitle: "PROJECTS / UIUX", image: lyfe },
    ],
    "Youtube Thumbnails": [
      { title: "1on1 INTERVIEW WITH HARVEY TOLIBAO", subtitle: "PROJECTS / YOUTUBE", image: interview },
      { title: "ATTY B SUPERMANILA", subtitle: "PROJECTS / YOUTUBE", image: attyb1 },
      { title: "ATTY B SUPERMANILA", subtitle: "PROJECTS / YOUTUBE", image: attyb2 },
      { title: "ATTY B UNBOXING", subtitle: "PROJECTS / YOUTUBE", image: attyb3 },
      { title: "ATTY B VIP PASS", subtitle: "PROJECTS / YOUTUBE", image: attyb4 },
      { title: "ATTY B GOES TO KOREA", subtitle: "PROJECTS / YOUTUBE", image: attyb5 },
      { title: "COOPER FLAG", subtitle: "PROJECTS / YOUTUBE", image: cooper },
      { title: "DINOCORNEL SUPERMANILA", subtitle: "PROJECTS / YOUTUBE", image: dino },
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

              <div className="single-image-frame">
                <img src={currentProject?.image} alt={currentProject?.title} />
              </div>
            </div>

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
          </main>
        </div>
      </div>
    );
  };

  export default Portfolio;