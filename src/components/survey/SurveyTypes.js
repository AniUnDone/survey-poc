import React from "react"; 
import {Link} from "react-router-dom";


class SurveyTypes extends React.Component{
    render(){
        return(
            <div className="container my-12 mx-auto px-4 md:px-12">                
                {/* Column 1 */}
                <div className="columns-3">
                    {/* Card 1 */}
                    <div>
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Rating Scale Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In rating scale questions (sometimes referred to as ordinal questions), 
                                    the question displays a scale of answer options from any range 
                                    (0 to 100, 1 to 10, etc.). The respondent selects the number that most accurately 
                                    represents their response.
                                </p>
                                <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    
                                    <Link to="/rating">Read more</Link>  
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Crad 2 */}
                    <div >
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Multiple Choice Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Multiple choice questions are the most popular survey question type. 
                                They allow your respondents to select one or more options from a list of 
                                answers that you define. Perhaps, most important, you’ll get structured survey responses that 
                                produce clean data for analysis.
                                </p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Crad 3 */}
                    <div >
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Rating Scale Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In rating scale questions (sometimes referred to as ordinal questions), 
                                    the question displays a scale of answer options from any range 
                                    (0 to 100, 1 to 10, etc.). The respondent selects the number that most accurately 
                                    represents their response.
                                </p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Column 2 */}
                <div className="columns-3 mt-6">
                    {/* Card 1 */}
                    <div>
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Rating Scale Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In rating scale questions (sometimes referred to as ordinal questions), 
                                    the question displays a scale of answer options from any range 
                                    (0 to 100, 1 to 10, etc.). The respondent selects the number that most accurately 
                                    represents their response.
                                </p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Crad 2 */}
                    <div >
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Rating Scale Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In rating scale questions (sometimes referred to as ordinal questions), 
                                    the question displays a scale of answer options from any range 
                                    (0 to 100, 1 to 10, etc.). The respondent selects the number that most accurately 
                                    represents their response.
                                </p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Crad 3 */}
                    <div >
                        <div >
                            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Rating Scale Questions
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    In rating scale questions (sometimes referred to as ordinal questions), 
                                    the question displays a scale of answer options from any range 
                                    (0 to 100, 1 to 10, etc.). The respondent selects the number that most accurately 
                                    represents their response.
                                </p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#62c5e5] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            
        )
    }
}

export default SurveyTypes