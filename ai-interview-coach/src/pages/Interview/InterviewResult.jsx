
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import { ChevronDown, ChevronUp } from 'lucide-react'

const InterviewResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interview, setInterview] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchInterview();
  }, [])

  const fetchInterview = async () => {
    try {
      const response = await api.get(`interviews/${id}`);
      setInterview(response.data.interview);
    } catch (error) {
      console.log(error.message);
    }
  }

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const scoreColor = (score) => {
    if (score >= 8) return 'bg-green-100 text-green-700';
    if (score >= 5) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header / Score summary */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-gray-500 text-sm mb-1">Interview Report</h2>
          <p className="text-gray-700 mb-4">Here's your detailed performance breakdown.</p>

          <div className="text-5xl font-bold text-blue-600 mb-2">
            {interview.score}<span className="text-2xl text-gray-400">/100</span>
          </div>

          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full">
            {interview.status}
          </span>
        </div>
        {/* Overall feedback */}
        {interview.overallfeedback && (
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Overall Feedback</h3>
            <p className="text-gray-600 leading-relaxed">{interview.overallfeedback}</p>
          </div>
        )}
        {/* Strengths and weaknesses */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Strengths</h3>
            <ul className="space-y-2">
              {interview.strengths?.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Areas to Improve</h3>
            <ul className="space-y-2">
              {interview.weaknesses?.map((weakness, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Question-by-question accordion */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Question-by-Question Results</h3>
          <div className="space-y-3">
            {interview.questions?.map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={question._id} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex justify-between items-center gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800">
                      {index + 1}. {question.question}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${scoreColor(question.score)}`}>
                        {question.score}/10
                      </span>
                      {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Your Answer</h4>
                        <p className="bg-gray-50 p-3 rounded-lg text-gray-600 text-sm">
                          {question.answer || "No answer provided"}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">AI Feedback</h4>
                        <p className="bg-blue-50 p-3 rounded-lg text-gray-600 text-sm">
                          {question.feedback}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default InterviewResult