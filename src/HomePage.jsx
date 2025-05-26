import { useMediaQuery } from "react-responsive";
import ExploreCard from "./ExploreCard";
import StatsCards from "./StatsCards";
import QuestionCards from "./QuestionCards";

const HomePage = () => {
    

    const isLargeScreen = useMediaQuery({ minWidth: 720 });
    const isBelow1358px = useMediaQuery({ minWidth: 720, maxWidth: 1358 }); 
    const questionData = [
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "01"
        },
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "02"
        },
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "03"
        },
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "04"
        },
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "05"
        },
        {
            question: "Is the knowledge on IFA Kiko open to everyone?",
            answer: "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            number: "06"
        },
    ]
   
    return (
        <>
        

            <section className="frame-one">

                <div className="frame-one-wrapper">
                    <div className="design-border"></div>
                    <div className="frame-one-text">
                        <div className="text-box">
                            <h1>Join Thousands Learning<br /> IfÁ through Ancestral <br />Voice</h1>
                            {isLargeScreen ? (
                                <p>Available on iOS and Android <br/> Free to join, pay-per-verse model <br/>Built for the spiritually curious, the committed learner, and the <br /> global Yoruba community</p>
                            ) : (
                                <p>Available on iOS and Android <br/> Free to join, pay-per-verse model <br/>Built for the spiritually curious, the committed <br/>learner, and the global Yoruba community</p>
                            )}
                            <h2>Download App Now</h2>

                            <div className="download-buttons">
                                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                    <img src="Images/Playstore-Link.png" alt="Playstore" className="playstore-button" />
                                </a>
                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                    <img src="Images/Applestore-Link.png" alt="Applestore" className="appstore-button" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frame-one-image">
                    <img src="Images/Grouped Image.png" alt="Ifa Kiko"/>
                </div>
                
            </section>

            <section className="frame-one-b">

                {isLargeScreen ? (
                    <>
                    <div className="first-pair">
                        <p className="course-topics">Òrìṣà Studies</p>
                        <p className="course-topics">Ritual Knowedge & Sacred Practice</p>
                    </div>
                    <div className="second-pair">
                        <p className="course-topics">Common Themes in Odù</p>
                        <p className="course-topics">Odù  Ifá & Verse Interpretation</p>
                    </div>
                    <div className="third-pair">
                        <p className="course-topics">Digital Ifá: Preserving Culture in the Mordern Age</p>
                        <p className="course-topics">The Lineages of Ifá: Ègbá, Ìjèbú, Òyó Ìfè </p>
                    </div>
                    </>
                    ):(
                    <>
                    <p className="course-topics">Òrìṣà Studies</p>
                    <p className="course-topics">Ritual Knowedge & Sacred Practice</p>
                    <p className="course-topics">Common Themes in Odù</p>
                    <p className="course-topics">Odù  Ifá & Verse Interpretation</p>
                    <p className="course-topics">Digital Ifá: Preserving Culture in the Mordern Age</p>
                    <p className="course-topics">The Lineages of Ifá: Ègbá, Ìjèbú, Òyó Ìfè </p>
                    </>
                )}

            </section>

            {isLargeScreen ? (
            <>
                <section className="frame-two" id="about-section">
                    <div className="frames-first-container">
                        <div className="left-frame-container">
                            <div className="first-text-div">
                                <h2>ABOUT Ifá Kiko</h2>
                                <p>IFA kiko is a sacred digital space created to preserve and teach the oral traditions of Ifa and Orisa in an ethical, secure, and lineage-respectful manner. Rooted in Yoruba spirituality and guided by revered elders, the platform is not just an app—it is a spiritual mission</p>
                            
                                <div className="trapez-explore-button">
                                    <img src="Images/Trapezium.png" alt="" className="explore-button" />
                                    <p>Explore More</p>
                                </div>
                            </div>
                        
                            <ExploreCard titleText="🧙🏾‍♂ Respect for Lineage" contentText="IFA Kiko was co-created with input from traditional priests, lineage heads, and spiritual leaders—not just tech experts. Every verse, feature, and function is spiritually validated before implementation."/>
                        </div>
                        <div className="ifa-carvings">
                            <img src="Images/Ifa-carvings.png" alt="Ifa Carvings" />
                        </div>
                    </div>

                    <div className="frames-second-container">
                        <ExploreCard titleText="🧠 A Living, Evolving Library" contentText="IFA Kiko is not a static archive or data bank—it’s a sacred living space that grows through spiritual contribution. New verses are added by recognized priests as part of an expanding oral tradition."/>
                        <div className="explore-wrapper">
                            <ExploreCard titleText="🌿 Lineage is Identity" contentText="In Ifa tradition, the source of a verse is just as important as the verse itself. Our platform preserves this identity by linking each piece of content to the priest, their teacher, and their ancestral root."/>
                        </div>

                    </div>
                </section>
            </>
            ):(
            <>
                <section className="frame-two" id="about-section">

                    <div className="first-text-div">
                        <h2>ABOUT Ifá Kiko</h2>
                        <p>IFA kiko is a sacred digital space created to preserve and teach the oral traditions of Ifa and Orisa in an ethical, secure, and lineage-respectful manner. Rooted in Yoruba spirituality and guided by revered elders, the platform is not just an app—it is a spiritual mission</p>
                    
                        <div className="trapez-explore-button">
                            <img src="Images/Trapezium.png" alt="" className="explore-button" />
                            <p>Explore More</p>
                        </div>
                    </div>
                    <div className="other-text-divs">
                        <div className="text-container">
                            <img src="Images/Checkbox-circle.png" alt="" className="checkbox" />
                            <div className="text">
                                <h2>🧙🏾‍♂ Respect for Lineage</h2>
                                <p>IFA Kiko was co-created with input from traditional priests, lineage heads, and spiritual leaders—not just tech experts. Every verse, feature, and function is spiritually validated before implementation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ifa-carvings">
                        <img src="Images/Ifa-carvings.png" alt="Ifa Carvings" />
                    </div>

                    <div className="other-text-divs">
                        <div className="text-container">
                            <img src="Images/Checkbox-circle.png" alt="" className="checkbox" />
                            <div className="text">
                                <h2>🧠 A Living, Evolving Library</h2>
                                <p>IFA Kiko is not a static archive or data bank—it’s a sacred living space that grows through spiritual contribution. New verses are added by recognized priests as part of an expanding oral tradition.</p>
                            </div>
                        </div>
                    </div>

                    <div className="other-text-divs">
                        <div className="text-container">
                            <img src="Images/Checkbox-circle.png" alt="" className="checkbox" />
                            <div className="text">
                                <h2>🌿 Lineage is Identity</h2>
                                <p>In Ifa tradition, the source of a verse is just as important as the verse itself. Our platform preserves this identity by linking each piece of content to the priest, their teacher, and their ancestral root.</p>
                            </div>
                        </div>
                    </div>

                </section>
                </>
            )}

            {isLargeScreen ? (
                <>
                <section className="frame-three" id="features-section">
                    <div className="frame-three-div">
                        <div className="title-and-info">
                            <div className="frame-title">
                                <h2>APP FEATURES</h2>
                            </div>
                            <div className="top-info">
                                <img src="Images/Headphones.png" alt="Headphones"/>
                                <h2>Audio-Visual Verse Learning</h2>
                                <p>Engage with authentic Ifá verses through high-quality video and audio recordings from verified Babaláwo (priests). </p>
                            </div>
                        </div>

                        <div className="middle-wrapper">
                            <div className="left-wrapper">
                                <div className="frame-three-info">
                                    <img src="Images/Library.png" alt="Library"/>
                                    <h2>Interactive Verse Library</h2>
                                    <p>Browse a categorized verse archive, organized by Odu, theme, or spiritual purpose.</p>
                                </div>
                                <div className="frame-three-info">
                                    <img src="Images/Priest Icon.png" alt="Community Icon"/>
                                    <h2>Priest Profiles & Community Hub</h2>
                                    <p>Users can follow verified Babaláwo, view their teachings, and ask spiritually questions.</p>
                                </div>
                            </div>
                            <div className="phone-screen"></div>
                            <div className="right-wrapper">
                                <div className="right-info">
                                    <img src="Images/Microphone.png" alt="Microphone"/>
                                    <h2 className="right">Yoruba Pronunciation Coach</h2>
                                    <p>Practice chanting with built-in AI that guides you in mastering tone and delivery—perfect for beginners.</p>
                                </div>
                                <div className="right-info">
                                    <img src="Images/Eye.png" alt="Scanning Eye"/>
                                    <h2>Lineage Tracing & Ìbà System</h2>
                                    <p>Each verse is spiritually anchored. Users can view the originating lineage of verses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="last-wrapper">
                            <div className="bottom-info">
                                <img src="Images/Telemarketer.png" alt="Telemarketer"/>
                                <h2>Secure Verse Marketplace</h2>
                                <p>Buy access to exclusive verses, teachings, or ceremonial materials<br /> from verified content creators.</p>
                            </div>
                        </div>
                    </div>    
                </section>
                </>
            ):(
                <>
                <section className="frame-three" id="features-section">

                    <div className="frame-three-div">
                        <div className="frame-title">
                            <h2>APP FEATURES</h2>
                        </div>

                        <div className="info-img-container">

                            <div className="frame-info-container">
                                <div className="frame-three-info">
                                    <img src="Images/Headphones.png" alt="Headphones"/>
                                    <h2>Audio-Visual Verse Learning</h2>
                                    <p>Engage with authentic Ifá verses through high-quality video and audio recordings from verified Babaláwo (priests). </p>
                                </div>
                                <div className="frame-three-info">
                                    <img src="Images/Library.png" alt="Library"/>
                                    <h2>Interactive Verse Library</h2>
                                    <p>Browse a categorized verse archive, organized by Odu, theme, or spiritual purpose.</p>
                                </div>
                                <div className="frame-three-info">
                                    <img src="Images/Priest Icon.png" alt="Community Icon"/>
                                    <h2>Priest Profiles & Community Hub</h2>
                                    <p>Users can follow verified Babaláwo, view their teachings, and ask spiritually questions.</p>
                                </div>
                                <div className="frame-three-info">
                                    <img src="Images/Telemarketer.png" alt="Telemarketer"/>
                                    <h2>Secure Verse Marketplace</h2>
                                    <p>Buy access to exclusive verses, teachings, or ceremonial materials from verified content creators.</p>
                                </div>
                                <div className="frame-three-info">
                                    <img src="Images/Microphone.png" alt="Microphone"/>
                                    <h2>Yoruba Pronunciation Coach</h2>
                                    <p>Practice chanting with built-in AI that guides you in mastering tone and delivery—perfect for beginners.</p>
                                </div>

                            </div>

                            <div className="info-flexwrap">
                                <div className="phone-screen"></div>
                                <div className="frame-three-info last">
                                    <img src="Images/Eye.png" alt="Scanning Eye"/>
                                    <h2>Lineage Tracing & Ìbà System</h2>
                                    <p>Each verse is spiritually anchored. Users can view the originating lineage of verses.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                </section>
            </>
            )}
            
            <section className="frame-three-b" id="explore-section">
                <div className="left-side">
                    <h2>Preserve, Learn, and Honor the Legacy of Ifa</h2>
                    <p>IFA Kiko is more than an app — it's a spiritual movement for digital preservation. Contact us today to learn more about what we do .</p>
                    <div className="join-button">
                        <p>Join as a Priest Contributor</p>
                    </div>
                </div>
                <div className="right-side">
                    <img src="Images/Some Image.png" alt="Some image"/>
                </div>
            </section>

            {isBelow1358px ? (
                <>
                <section className="frame-four" id="pricing-section">
                    <div className="frame-four-div copy">
                        <div className="frame-four-title">
                            <h2>HOW TO USE THE APP PERFECTLY</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        </div>
                        
                        <div className="middlescreen-wrapper">
                            <div className="app-steps">
                                <div className="step-one-group">
                                    <img src="Images/step-one-a.png" alt="step-one-img" className="top"/>
                                    <img src="Images/step-one-b.png" alt="step-one-img" className="bottom"/>
                                </div>
                                
                                <div className="step-text first">
                                    <h3>Create Account</h3>
                                    <p>Enter your information. We ensure your details safe and more secure</p>
                                </div>
                            </div>

                            <div className="app-steps second-step">
                                <img src="Images/step-two.png" alt="step-two-img" />
                                <div className="surface-img-div">
                                    <img src="Images/surface1.png" className="surface-img"/>
                                </div>
                                <div className="step-text second">
                                    <h3>Enter Information</h3>
                                    <p>Sending money faster & easier with end to end encryption.</p>
                                </div>
                            </div>

                            <div className="app-steps third-step">
                                <img src="Images/step-three.png" alt="step-three-img" className="step-three-img" />
                                <div className="rectangle"></div>
                                <div className="step-text third">
                                    <h3>Add Payment </h3>
                                    <p>Add multiple cards and  track your daily expense with quality interface</p>
                                </div>
                            </div>
                        </div>
                        <div className="dotted-line">
                            <img src="Images/dotted-line-3.png" alt="dotted-line"/>
                        </div> 

                    </div>
                </section> 
                </>
                
            ) : isLargeScreen ? (
                <>
                <section className="frame-four" id="pricing-section">
                    <div className="frame-four-div copy">
                        <div className="frame-four-title">
                            <h2>HOW TO USE THE APP PERFECTLY</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        </div>
                        
                        <div className="app-steps-wrapper">
                            <div className="app-steps">
                                <div className="step-one-group">
                                    <img src="Images/step-one-a.png" alt="step-one-img" className="top"/>
                                    <img src="Images/step-one-b.png" alt="step-one-img" className="bottom"/>
                                </div>
                                
                                <div className="step-text first">
                                    <h3>Create Account</h3>
                                    <p>Enter your information. We ensure your details safe and more secure</p>
                                </div>
                            </div>

                            <div className="app-steps second-step">
                                <img src="Images/step-two.png" className="step-two-image" alt="step-two-img" />
                                <div className="surface-img-div">
                                    <img src="Images/surface1.png" className="surface-img"/>
                                </div>
                                <div className="step-text second">
                                    <h3>Enter Information</h3>
                                    <p>Sending money faster & easier with end to end encryption.</p>
                                </div>
                            </div>

                            <div className="app-steps third-step">
                                <img src="Images/step-three.png" alt="step-three-img" className="step-three-img" />
                                <div className="rectangle"></div>
                                <div className="step-text third">
                                    <h3>Add Payment </h3>
                                    <p>Add multiple cards and  track your daily expense with quality interface</p>
                                </div>
                            </div>
                        </div>
                        

                        <div className="dotted-line">
                            <img src="Images/dotted-line.png" alt="dotted-line"/>
                        </div> 

                    </div>
                </section>   
                </>
            ):(
                <>
                <section className="frame-four" id="pricing-section">
                    <div className="frame-four-div copy">
                        <div className="frame-four-title">
                            <h2>HOW TO USE THE APP PERFECTLY</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        </div>
                        
                        <div className="app-steps">
                            <div className="step-one-group">
                                <img src="Images/step-one-a.png" alt="step-one-img" className="top"/>
                                <img src="Images/step-one-b.png" alt="step-one-img" className="bottom"/>
                            </div>
                            
                            <div className="step-text first">
                                <h3>Create Account</h3>
                                <p>Enter your information. We ensure your details safe and more secure</p>
                            </div>
                        </div>

                        <div className="app-steps second-step">
                            <img src="Images/step-two.png" alt="step-two-img" />
                            <div className="surface-img-div">
                                <img src="Images/surface1.png" className="surface-img"/>
                            </div>
                            <div className="step-text second">
                                <h3>Enter Information</h3>
                                <p>Sending money faster & easier with end to end encryption.</p>
                            </div>
                        </div>

                        <div className="app-steps third-step">
                            <img src="Images/step-three.png" alt="step-three-img" className="step-three-img" />
                            <div className="rectangle"></div>
                            <div className="step-text third">
                                <h3>Add Payment </h3>
                                <p>Add multiple cards and  track your daily expense with quality interface</p>
                            </div>
                        </div>

                        <div className="dotted-line">
                            <img src="Images/dotted-line-2.png" alt="dotted-line"/>
                        </div> 

                    </div>
                </section>   
                </>
            )}
            
            {isLargeScreen ? (
                <>
                <section className="frame-four-b">
                    <div className="text-box second-text-box">
                        <h1>Download App Now</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                        
                        <div className="download-buttons">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src="Images/Playstore-Link.png" alt="Playstore" className="playstore-button" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src="Images/Applestore-Link.png" alt="Applestore" className="appstore-button" />
                            </a>
                        </div>

                        <div className="stats-boxes">
                            <StatsCards src="Images/Download-Icon.png" count="59865" label="DOWNLOADS"/>
                            <StatsCards src="Images/thumbsup-icon.png" count="29852" label="LIKE"/>
                            <StatsCards src="Images/Star-icon.png" count="1500" label="5 STAR RATING"/>
                        </div>
                       
                    </div>

                    <div className="phonescreen-trio">
                        <img src="Images/Phonescreen-Trio.png"/>
                    </div>
                   
                </section> 
                </>
            ):(
                <> 
                <section className="frame-four-b">
                    <div className="text-box second-text-box">
                        <h1>Download App Now</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                        
                        <div className="download-buttons">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src="Images/Playstore-Link.png" alt="Playstore" className="playstore-button" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src="Images/Applestore-Link.png" alt="Applestore" className="appstore-button" />
                            </a>
                        </div>

                        <div className="phonescreen-trio">
                            <img src="Images/Phonescreen-Trio.png"/>
                        </div>
                    </div>

                    <div className="stats-boxes">

                        <div className="stat-box">
                            <div className="stat-icon">
                                <img src="Images/Download-Icon.png" alt="donwload-icon"/>
                            </div>
                            <span className="download-counts count">59865</span>
                            <p>DOWNLOADS</p>
                        </div>
                        
                        <div className="stat-box">
                            <div className="stat-icon">
                                <img src="Images/thumbsup-icon.png" alt="like-icon"/>
                            </div>
                            <span className="like-counts count">29852</span>
                            <p>LIKE</p>
                        </div>
                        
                        <div className="stat-box">
                            <div className="stat-icon">
                                <img src="Images/Star-icon.png" alt="star-icon"/>
                            </div>
                            <span className="rate-counts count">1500</span>
                            <p>5 STAR RATING</p>
                        </div>
                    
                    </div>
                </section> 
                </>
            )}
            <section className="frame-five">
                <div className="frame-title five">
                    <h2>Our Working Process</h2>
                    <p>Your questions answered with clarity, care, and cultural respect.</p>
                </div>

                <ul className="question-list">

                    {questionData.map((question, index)=> {
                        return (
                            <li key={index}>
                                <QuestionCards
                                    answerText = {question.answer}
                                    questionText = {question.question}
                                    questionNumber = {question.number}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
                   
export default HomePage;
           
            
            

           

                    
        
                    
                        
                            
                        
                
