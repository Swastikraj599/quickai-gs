import React, { useState } from 'react';
import { Upload, ImageIcon } from 'lucide-react'; // ✅ Use icons appropriate to the page

const RemoveBackground = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleRemoveBackground = (e) => {
        e.preventDefault();
        // Add logic for background removal here
        console.log('Removing background for:', file);
    };

    return (
        <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
            {/* Background Removal Card */}
            <form onSubmit={handleRemoveBackground} className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200 space-y-6">
                <div className="flex items-center gap-3">
                    <Upload className="w-6 text-orange-500" />
                    <h1 className="text-xl font-semibold">Background Removal</h1>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 mt-2 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, and other image formats</p>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 text-sm rounded-lg hover:opacity-90"
                >
                    <Upload className="w-5" />
                    Remove background
                </button>
            </form>

            {/* Processed Image Card */}
            <div className="w-full max-w-lg mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <ImageIcon className="w-6 text-orange-500" />
                    <h1 className="text-xl font-semibold">Processed Image</h1>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <ImageIcon className="w-9 h-9" />
                        <p>Upload an image and click "Remove Background" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveBackground;
