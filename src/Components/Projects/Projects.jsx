import React, { useState } from 'react'
import './Projects.css'
import project1 from '../../assets/_SVA VAs October - Final.pdf'
import project2 from '../../assets/5 - Client Referral Campaign.pdf'
// import project3 from '../../assets/SimplifiVAs_Marketing_and_Strategy.pptx'
// import project4 from '../../assets/Lead magnet 1.docx'
import project5 from '../../assets/Top content formats.pdf'
// import project6 from '../../assets/Weekly_Newsletters_Email_Templates_SimplifiVAs.docx'
import voulay1 from '../../assets/voulay-3.pdf'
import voulay2 from '../../assets/voulay.pdf'
import Reviews from '../Reviews/Reviews'
import { FaFolderOpen } from 'react-icons/fa';


const Projects = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setExpandedBox(expandedBox === boxName ? null : boxName);
  }
  return (
    <div className='project-container' id='projects-section' data-aos="slide-up">

      <h2>My Projects</h2>

      <div className={`project-box ${expandedBox === 'boxA' ? 'expanded' : ''}`}>
        <div className='project-header' onClick={() => handleBoxClick('boxA')}>
          <h3>Project for Simplifyvas</h3>
          <FaFolderOpen size={32} color="#223246" style={{ marginBottom: '8px' }} />
        </div>
        <div className='project-content'>
          <p>Here's a detailed report on the work I did for Simplifyvas company. <br />
            Click to view or download the documents .</p>
            <div className="document-container">
              {expandedBox === 'boxA' && (
                <>
                  <div className='each-box'>
                    <iframe src={project1} title="" />
                    <a href={voulay1} download className="download-btn">
                      Download
                    </a>
                  </div>
                  <div className='each-box'>
                    <iframe src={project2} title="" />
                    <a href={voulay1} download className="download-btn">
                      Download
                    </a>
                  </div>
                  <div className='each-box'>
                    <iframe src={project5} title="" />
                    <a href={voulay1} download className="download-btn">
                      Download
                    </a>
                  </div>
                </>
              )}
            </div>
        </div>
      </div>

      <div className={`project-box ${expandedBox === 'boxB' ? 'expanded' : ''}`}>
        <div className="project-header" onClick={() => handleBoxClick('boxB')}>
          <h3>Project for Voulay</h3>
          <FaFolderOpen size={32} color="#223246" style={{ marginBottom: '8px' }} />
        </div>
        <div className="project-content">
          <p>
            This case study outlines the marketing strategy and results for Voulay Company.
            You can read it below or download it for your records.
          </p>
          <div className="document-container">
            {expandedBox === 'boxB' && (
              <>
                <div className='each-box'>
                  <iframe src={voulay1} title="Voulay Case Study" />
                  <a href={voulay1} download className="download-btn">
                    Download
                  </a>
                </div>
                <div className='each-box'>
                  <iframe src={voulay2} title="Company B Case Study" />
                  <a href={voulay2} download className="download-btn">
                    Download
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Reviews/>

    </div>
  )
}

export default Projects
