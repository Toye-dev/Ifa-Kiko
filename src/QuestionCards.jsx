
import { useState } from "react";

const QuestionCards = ({ answerText, questionText, questionNumber }) => {
    
     const [isOpen, setIsOpen] = useState(false);

    const forAnswerDrop = () => {
        setIsOpen((prev) => {
            return !prev;
        })
    };

    return (
        <div className= {`question ${isOpen ? 'question-active' : ""}`}>
                            
            <div className="question-answer">
                <div className="number-question">
                    <span className="number">{questionNumber}</span>
                    <h3>{questionText}</h3>
                </div>
                <button className="button">
                    <div className={`answer-button ${isOpen ? "move-minus" : ""}`} 
                        onClick={forAnswerDrop}
                    >
                        { isOpen ? "-" : "+" }
                    </div>
                </button>
                
            </div>
            
            {  isOpen && (
                <div className="answer-drop">
                    <hr></hr>
                    <p className="answer">{answerText}</p>
                </div> ) 
            } 
        </div>      
    );
}

export default QuestionCards;