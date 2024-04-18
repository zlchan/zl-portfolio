import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>   
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" : 
                    "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" : 
                    "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }
                    >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High School
                            </h3>
                            
                            <span className="qualification__subtitle">SMK Kota Kemuning - Shah Alam</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                    
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Foundation in Computing (Track A)
                            </h3>
                            <span className="qualification__subtitle">Tunku Abdul Rahman University of Management and Techbology - Setapak</span>
                            <span className="qualification__subtitle">CGPA: 3.97</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor in Software Engineering (Honours)
                            </h3>
                            
                            <span className="qualification__subtitle">Tunku Abdul Rahman University of Management and Techbology - Setapak</span>
                            <span className="qualification__subtitle">Muet Band 4 </span>
                            <span className="qualification__subtitle">CGPA: 3.81 (First Class Honours) </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science Internship
                            </h3>
                            
                            <span className="qualification__subtitle">Maxwell Cloud Technology Sdn Bhd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Nov 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                    
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Designer
                            </h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification