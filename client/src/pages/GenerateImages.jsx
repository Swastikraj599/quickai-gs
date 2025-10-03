import React, { useState } from 'react';
import { Sparkles, ImageIcon } from 'lucide-react';

const GenerateImages = () => {
    const imageStyles = ['Realistic style', 'Ghibli style', 'Anime style', 'Cartoon style', 'Fantasy style', '3D style', 'Portrait style'];
    
    const [selectedStyle, setSelectedStyle] = useState(imageStyles[0]);
    const [input, setInput] = useState('');
    const [publish, setPublish] = useState(false); // ✅ Toggle state

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200 space-y-6">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 text-[#FF6A00]" />
                    <h1 className="text-xl font-semibold">AI Image Generator</h1>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Image Keyword</label>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
                        placeholder="A futuristic cityscape at sunset..."
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Style</label>
                    <div className="mt-3 flex gap-3 flex-wrap sm:w-9/12">
                        {imageStyles.map((style, index) => (
                            <span
                                key={index}
                                onClick={() => setSelectedStyle(style)}
                                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                                    selectedStyle === style
                                        ? "bg-orange-50 text-orange-700 border-orange-300"
                                        : "text-gray-500 border-gray-300"
                                }`}
                            >
                                {style}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ✅ Toggle Switch */}
                <div className="my-6 flex items-center gap-2">
                    <label className="relative cursor-pointer">
                        <input
                            type="checkbox"
                            checked={publish}
                            onChange={(e) => setPublish(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
                        <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></span>
                    </label>
                    <p className="text-sm text-gray-700">Make this image Public</p>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#FFA500] text-white px-4 py-2 text-sm rounded-lg hover:opacity-90"
                >
                    <ImageIcon className="w-5" />
                    Generate Image
                </button>
            </form>

            {/* Generated Image Section */}
            <div className="w-full max-w-lg mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <ImageIcon className="w-6 text-[#FF6A00]" />
                    <h1 className="text-xl font-semibold">Generated Image</h1>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <ImageIcon className="w-9 h-9" />
                        <p>Enter a keyword and click "Generate Image" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateImages;
