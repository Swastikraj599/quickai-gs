import React, { useState } from 'react';
import { Scissors } from 'lucide-react'; // ✅ Scissors icon for object removal

const RemoveObject = () => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleRemoveObject = (e) => {
        e.preventDefault();
        // Add logic to remove object here
        console.log('Removing object described as:', description, 'from file:', file);
    };

    return (
        <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
            {/* Object Removal Card */}
            <form onSubmit={handleRemoveObject} className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200 space-y-6">
                <div className="flex items-center gap-3">
                    <Scissors className="w-6 text-purple-500" />
                    <h1 className="text-xl font-semibold">Object Removal</h1>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 mt-2 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Describe object to remove</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        placeholder="e.g., car in background, tree from the image"
                        className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Be specific about what you want to remove</p>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 text-sm rounded-lg hover:opacity-90"
                >
                    <Scissors className="w-5" />
                    Remove object
                </button>
            </form>

            {/* Processed Image Card */}
            <div className="w-full max-w-lg mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <Scissors className="w-6 text-purple-500" />
                    <h1 className="text-xl font-semibold">Processed Image</h1>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Scissors className="w-9 h-9" />
                        <p>Upload an image and describe what to remove to get started</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveObject;
