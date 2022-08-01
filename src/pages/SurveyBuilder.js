import React from "react"; 
import Navbar from "../components/Navbar";
import questions from "../helpers/questions.json"
import store from "../helpers/store";

class SurveyBuilder extends React.Component{

    constructor(props){
        super(props)
        this.radioButtons = this.radioButtons.bind(this)
    }

     radioButtons(num){
        const output = new Array();
        for(let i = 0; i< num ; i++){
            output.push(
                    <td className="px-4 py-8 border-t border-b border-gray-300 text-sm text-center">
                        <input id="horizontal-list-radio-license" type="radio" value="" 
                        name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100
                        focus:ring-blue-500 dark:focus:ring-blue-600 
                        dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 
                        dark:border-gray-500"/>
                    </td>
                    )
        }
        return output;
    }
      
    render(){
        return(
            <div>
                {/* Navbar */}
                <Navbar storeState={store.getState()}/>
                
                {/* Main */}
                <div className="container my-12 mx-auto px-4 md:px-12">
                    {questions && questions.filter((q) => q.qtype.includes('rating') ).map(({i,qnumber,qname,qdescription,minVal,maxVal})=>(
                        <div  key={i} className="max-w rounded overflow-hidden shadow-lg bg-white mt-8">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {qnumber}. {qname}
                                </div>
                                <p className="text-gray-700 text-base">{qdescription}</p>
                                <span className="inline-grid grid-cols-10 gap-4 mt-5">
                                   { 
                                    Array.apply(null, {length: maxVal - minVal + 1}).map((e, i) => 
                                    <span key={i} className="rounded-full border-solid border-2 rating-number">{minVal++}</span>)
                                   }
                                </span>
                            </div>
                        </div>
                    ))}    
                    {questions && questions.filter((q) => q.qtype.includes('input') ).map(({qnumber,qname,qdescription})=>(
                        <div  key={qnumber} className="max-w rounded overflow-hidden shadow-lg bg-white mt-8">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {qnumber}. {qname}
                                </div>
                                <p className="text-gray-700 text-base">{qdescription}</p>                                
                                <input className="mt-5 appearance-none block w-full bg-gray-200
                                 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight 
                                 focus:outline-none focus:bg-white" id="grid-first-name" 
                                 type="text" placeholder="Type here"/>      
                            </div>
                        </div>
                    ))} 
                    {questions && questions.filter((q) => q.qtype.includes('matrix') ).map(({i,headers,statement,qnumber,qname,qdescription})=>(
                        <div  key={i} className="max-w rounded overflow-hidden shadow-lg bg-white mt-8">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {qnumber}. {qname}
                                </div>
                                <p className="text-gray-700 text-base">{qdescription}</p>                                
                                <table className="w-full table-auto rounded-sm mt-5">
                                    <thead>
                                        <tr>
                                            <th key={i} className="px-4 py-4 text-left bg-blue-900 text-white 
                                                text-sm  font-medium">
                                            </th> 
                                            {headers.map((header,i)=>{
                                                return <th key={i} className="px-4 py-4 text-left bg-blue-900 text-white 
                                                        text-sm  font-medium">
                                                            {header}
                                                        </th> 
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {statement.map((d,i)=>{
                                        return (
                                            <tr className="border-gray-300 even:bg-gray-300">
                                                <td key={i} className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                                                    {d.desc}
                                                </td>                                                
                                                {this.radioButtons(headers.length)}
                                            </tr>)
                                    })}
                                    </tbody>
                                </table>  
                            </div>
                        </div>
                    ))}  
                </div>
                
            </div>
        )
    }
}

export default SurveyBuilder