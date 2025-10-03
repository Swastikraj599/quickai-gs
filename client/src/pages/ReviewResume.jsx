import React, { useState } from 'react';
import { FileText } from 'lucide-react'; // ✅ FileText icon for resume review

const ReviewResume = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleReview = (e) => {
        e.preventDefault();
        // Add logic for resume review here
        console.log('Reviewing resume:', file);
    };

    return (
        <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
            {/* Resume Review Card */}
            <form onSubmit={handleReview} className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200 space-y-6">
                <div className="flex items-center gap-3">
                    <FileText className="w-6 text-green-500" />
                    <h1 className="text-xl font-semibold">Resume Review</h1>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                    <input
                        type="file"
                        accept="application/pdf, image/png, image/jpeg"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 mt-2 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Supports PDF, PNG, JPG formats</p>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 text-sm rounded-lg hover:opacity-90"
                >
                    <FileText className="w-5" />
                    Review Resume
                </button>
            </form>

            {/* Analysis Results Card */}
            <div className="w-full max-w-lg mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 text-green-500" />
                    <h1 className="text-xl font-semibold">Analysis Results</h1>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <FileText className="w-9 h-9" />
                        <p>Upload your resume and click "Review Resume" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewResume;
