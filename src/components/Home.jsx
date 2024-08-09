import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import impactCreated from '../assets/impact_created.svg'
import Sdgs from './Sdgs';
import './Home.css'
import Initiatives from './Initiatives';
import FooterUpper from './FooterUpper';
import Footer from './Footer';
import Group_6 from '../SB photos/Group 6.png'
import Group_9 from '../SB photos/Group 9.jpg'
import ImpactCreated from './ImpactCreated';
import GallerySection from './GallerySection';

const Home = () => {
    const [reportsOpen, setReportsOpen] = useState(false);
    return (
        <>
            <Navbar />
            <br />
            <br />
            {/* <Carousel />
            <Modal /> */}
            <div className="intro-container">
                <div className="intro-image">
                    <img src={Group_9} alt="Sustainable Bhava" />
                </div>
                <div className="intro-text">
                    <span className="intro-title">Sustainable Bhava</span>, is a timely tale,
                    Which through the magic of stories and transformative training, is empowering young minds to become the guardians of our planet's well being, by nurturing a deep sense of ownership for a sustainable future in their hearts.
                    Weaving captivating real life stories and inspiring young minds to protect and preserve mother earth.🌍
                    <br />
                    <br />
                    The curiosity of these tiny hearts ignites our passion to keep making the difference.
                    Together we are planting the seeds of responsibility and love for our home, our mother, our earth.
                    Join us.
                    Together, we will equip the next generation with the tools they need to combat climate change and build a sustainable future.
                </div>
            </div>

            
            <div className="story-section">
                <div className="story-header">
                    <span className="story-title">How? A story can change the world.</span>
                    <br />
                    <span className="story-subtitle">
                        Explore stories and be part of shaping minds, moving hearts, and
                        changing the world.
                    </span>
                </div>
                <div className="story-content">
                    <div className="story-text">
                        <div className="story-details">
                            <ul>
                                <li>Every moment is a tale waiting to unfold.</li>
                                <li>They hold the essence and beauty of life's journey.</li>
                                <li>They carry emotions as precious threads of our existence.</li>
                                <li>We only live once! Yet, our actions, experiences, and their outcomes are eternal.</li>
                                <li>A tale woven with emotions and relatable characters can shape our actions and habits.</li>
                                <li>This will guide and ignite our journey towards a cleaner, more peaceful, and thriving planet.</li>
                                <li>This planet is the cherished home for 8.7 million species. It is our shared duty to protect its beauty.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="story-image">
                        <img src={Group_6} alt="Story Image" />
                    </div>
                </div>
            </div>


            <div className="sdgs-section">
                <strong>Learn about SDG's</strong>
            </div>

            <Sdgs />
            <br />

            <div className="impact-section">
                <strong>Impact Created</strong>
            </div>

            <ImpactCreated/>
            <br/>
            <Initiatives/>

            <div className="gallery-section">
                <strong>Gallery</strong>
            </div>

            <GallerySection/>
            
            <div className="highlights-section">
                <span className="highlights-title">
                    Highlights of our Work
                </span>
                <br />
                <span className="highlights-text">
                    <br />
                    ● Carried out dozens of local movements visiting households to interact with
                    people to understand the root cause of the obstacles that are being faced while
                    handling the scrap. <br /> <br />
                    ● Organized plays/nukkad-natak to spread awareness regarding critical social issues
                    like drug abuse, sexual harassment & rape, and 21st century environment crisis <br /> <br />
                    ● Initiated some sustainable schemes including waste exchange programmes, zero
                    waste management & promoted waste segregation <br /> <br />
                    ● Proposed massive tree plantation drives across Kapurthala city, resulting 2000
                    saplings being planted across numerous neighbourhoods <br /> <br />
                    ● Making advances in the class structures and explaining the role of renewable
                    energy resources through webinars & discussions.
                </span>
            </div>
            <FooterUpper/>
            <Footer />
        </>
    )
}

export default Home