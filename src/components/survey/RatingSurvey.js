import React from "react"; 
import Navbar from "../Navbar";
import { CodeBlock, dracula } from "react-code-blocks";

class RatingSurvey extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>

                <div className="container my-12 mx-auto px-4 md:px-12">
                    <h1 className="font-semibold text-3xl text-white">Rating Survey</h1>
                    <div className="px-6 py-4">
                        In rating scale questions (sometimes referred to as ordinal questions), the question displays a 
                        scale of answer options from any range (0 to 100, 1 to 10, etc.). 
                        The respondent selects the number that most accurately represents their response.
                    </div>
                    <div className="px-6 py-4">
                        Net Promoter Score® questions are a good example of rating scale questions.
                        They use a scale to gauge how likely customers would be to recommend their product or service.
                    </div>  
  
                    <div className="px-6 py-4">    
                        <div className="flow-root">
                            <p className="float-left">very unlikely</p>    
                            <p className="float-right">very likely</p>  
                        </div>
                        <span className="inline-grid grid-cols-10 gap-4">
                            <span className="rounded-full border-solid border-2 rating-number">1</span>
                            <span className="rounded-full border-solid border-2 rating-number">2</span>
                            <span className="rounded-full border-solid border-2 rating-number">3</span>
                            <span className="rounded-full border-solid border-2 rating-number">4</span>
                            <span className="rounded-full border-solid border-2 rating-number">5</span>
                            <span className="rounded-full border-solid border-2 rating-number">6</span>
                            <span className="rounded-full border-solid border-2 rating-number">7</span>
                            <span className="rounded-full border-solid border-2 rating-number">8</span>
                            <span className="rounded-full border-solid border-2 rating-number">9</span>
                            <span className="rounded-full border-solid border-2 rating-number">10</span>
                        </span>    
                    </div> 
                    <div className="px-6 py-4">
                        With ranking questions and numerical rating scales it’s important to give the respondent context. 
                        For instance, imagine you asked the question, “how much do you like ice cream?” Without explaining 
                        the value of the numbers on your scale, a numerical rating scale might not make much sense.
                    </div>
                    <div>
                        <div className="font-semibold text-xl text-white mb-2">
                            Sample JSON
                        </div>
                        <CodeBlock
                            text={`{
                                "qtype": "rating",
                                "qnumber": "1",
                                "qname": "Rating Question 1",
                                "qdescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                                "minMsg": "Not at all likely",
                                "maxMsg": "Extremely likely",
                                "minVal": "1",
                                "maxVal": "10"
                            }`
                            }
                            showLineNumbers={false}
                            startingLineNumber={1}
                            theme={dracula}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default RatingSurvey