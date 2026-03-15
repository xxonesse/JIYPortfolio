import { useState } from "react";
import "../styles/About.css";
import profilepic from "../assets/profilepicture.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import email from "../assets/email.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import star from "../assets/star.svg";
import adobeps from "../assets/photoshop.svg";
import adobeai from "../assets/illustrator.svg";
import adobepr from "../assets/premiere.svg";
import capcut from "../assets/capcut.svg";
import  canva from "../assets/canva.svg";
import obs from "../assets/obs.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); 
  };

  const skillList = (
    <>
      <li><i>Multimedia</i></li><li><img src={star} alt="star"/></li>
      <li><i>Videography</i></li><li><img src={star} alt="star"/></li>
      <li><i>Photography</i></li><li><img src={star} alt="star"/></li>
      <li><i>Video Editing</i></li><li><img src={star} alt="star"/></li>
      <li><i>UI/UX Designer</i></li><li><img src={star} alt="star"/></li>
      <li><i>Graphic Designer</i></li><li><img src={star} alt="star"/></li>
    </>
  );

  return (
    <section className="portfolio" id="about">
      <div className="main">
        {/* TOP MARQUEE */}
        <div className="skillset skillset-top">
          <div className="scrolling-wrapper">
            <ul>{skillList}</ul>
            <ul>{skillList}</ul>
          </div>
        </div>

        <div className="prof-portfolio">
          <div className="profile">
            <img className="profpic" src={profilepic} alt="Jimboy" width={150} />
            <ul className="socials">
                <li><a href="https://www.facebook.com/share/1DnUUZ6kMc/" target="_blank" rel="noreferrer"><img src={facebook} alt="fb" /></a></li>
                <li><a href="https://www.instagram.com/jiycervantes_?igsh=MWRrbnJyYnF3aG5qcw==" target="_blank" rel="noreferrer"><img src={instagram} alt="ig" /></a></li>
                <li>
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jiycervantes@gmail.com" 
                        target="_blank" 
                        rel="noreferrer">
                    <img src={email} alt="mail" />
                    </a>
                </li>              
                <li><a href="https://x.com/jiycervantes_" target="_blank" rel="noreferrer"><img src={twitter} alt="tw" /></a></li>
                <li><a href="https://www.linkedin.com/in/jimboycervantes?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><img src={linkedin} alt="in" /></a></li>
            </ul>
            <a href="/Resume.pdf" download="Jimboy_Cervantes_Resume.pdf" className="resume-btn"> DOWNLOAD CV </a>
            <ul className="tools">
                <li><img src={adobeps} alt="photoshop" /></li>
                <li><img src={adobeai} alt="illustrator" /></li>
                <li><img src={adobepr} alt="premiere" /></li>
                <li><img src={capcut} alt="capcut" /></li>
                <li><img src={canva} alt="canva" /></li>
                <li><img src={obs} alt="obs" /></li>
            </ul>
          </div>

          <div className="description">
            <div className="view-fade" key={activeTab + currentPage}>
              
              {/* ABOUT TAB */}
              {activeTab === "about" && (
                <div>
                  <h1 className="hello-title">HELLO!</h1>
                  <p className="bio-p">
                    My name is  <span className="red-span">Jimboy Cervantes</span>, I am 23 years old and have hobbies in
                    photography, videography, video editing and graphic designing. I am a photographer
                    with 5 years of experience as macro photography, landscape photography and portrait
                    photography 
                  </p>
                  <p className="bio-p">
                        I also have 6 years of experience as a video editor, videographer and
                        graphic artist . I started my career as a photographer since I was 19 years old. During
                        my exploration as a photographer, I didn
                        't realize that I was slowly developing an
                        interest in videography, video editing and graphic designing until I joined production
                        teams and to grow into what I am today                  </p>
                  <div className="nav-arrow" onClick={() => handleTabChange("works")}>Work Experience →</div>
                </div>
              )}

              {/* WORKS TAB (Paginated) */}
              {activeTab === "works" && (
                <div>
                  <h1 className="exp-title">WORK<br /><span className="red-span">EXPERIENCE</span></h1>
                  
                  {currentPage === 1 ? (
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="dot"></div>
                        <h3 className="comp-name">FREELANCE | 2019-present</h3>
                        <p>Online Freelancer Work From Home</p>
                        <p>✦ Graphic Artist</p>
                        <p>✦ Video Editor</p>
                      </div>
                      <div className="timeline-item">
                        <div className="dot"></div>
                        <h3 className="comp-name">FREELANCE | 2020-2023</h3>
                        <p>✦ Photographer</p>
                      </div>                      
                      <div className="timeline-item">
                        <div className="dot"></div>
                        <h3 className="comp-name">STUDENT INTERN | July - August 2023</h3>
                        <p>Pangasinan State University - Lingayen Campus</p>
                        <p>✦ Graphic Artist</p>
                        <p>✦ Photographer</p>
                        
                      </div>
                    </div>
                  ) : (
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="dot"></div>
                        <h3 className="comp-name">CORPORATE | October 2024 - present</h3>
                        <p>LYFE Marketing Synergy</p>
                        <p>✦ Graphic Artist</p>
                        <p>✦ Video Editor</p>
                        <p>✦ Photographer</p>
                        <p>✦ Videographer</p>
                        <p>✦ Livestream Operation Support</p>
                        <p>✦ Technical Director</p>
                      </div>
                    </div>
                  )}

                  <div className="nav-footer">
                    {currentPage === 1 ? (
                      <>
                        <span onClick={() => handleTabChange("about")}>← About Me</span>
                        <span onClick={() => setCurrentPage(2)}>Next Page →</span>
                      </>
                    ) : (
                      <>
                        <span onClick={() => setCurrentPage(1)}>← Previous Page</span>
                        <span onClick={() => handleTabChange("achievements")}>Achievements →</span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* ACHIEVEMENTS TAB */}
              {activeTab === "achievements" && (
                <div>
                  <h1 className="exp-title">ACHIEVE<br /><span className="red-span">MENTS</span></h1>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="dot"></div>
                      <h3 className="comp-name">ASEAN International Video Competition (Finalists)</h3>
                    </div>
                    <div className="timeline-item">
                    <div className="dot"></div>
                      <h3 className="comp-name">NCCA Cinemalamrag National Video Competition (Grand Winner)</h3>
                    </div>
                    <div className="timeline-item">
                    <div className="dot"></div>
                      <h3 className="comp-name">International Photo Competition: Save the World to Sustainably Feed the Future (7th Place)</h3>
                    </div>
                    <div className="timeline-item">
                    <div className="dot"></div>
                      <h3 className="comp-name">DICT Philippine Startup Challenge 7 Region 1 2022 (1st Runner Up)</h3>
                    </div>
                    <div className="timeline-item">
                    <div className="dot"></div>
                      <h3 className="comp-name">Xircus Web3 Hackathon 2023 (Finalists)</h3>
                    </div>                    
                    <div className="timeline-item">
                    <div className="dot"></div>
                      <h3 className="comp-name">The BLOKC Web3 Hackathon 2023 (Finalists)</h3>
                    </div>

                  </div>
                  <div className="nav-footer">
                    <span onClick={() => { setActiveTab("works"); setCurrentPage(2); }}>← Work Experience</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM MARQUEE */}
        <div className="skillset skillset-bottom">
          <div className="scrolling-wrapper">
            <ul>{skillList}</ul>
            <ul>{skillList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;