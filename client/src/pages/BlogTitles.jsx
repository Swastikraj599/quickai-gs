import React, { useState } from 'react';
import { Sparkles, Edit, Hash } from 'lucide-react'; // ✅ Import Hash icon

const BlogTitles = () => {
    const blogCategories = ['General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food'];
    
    const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]); // ✅ Fix useState
    const [input, setInput] = useState('');
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // Add submission logic here
        console.log('Generating title for:', input, 'in category:', selectedCategory);
    };

    return (
        <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
            {/* AI Title Generator Box */}
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200 space-y-6">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 text-[#8E37EB]" />
                    <h1 className="text-xl font-semibold">AI Title Generator</h1>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Keyword</label>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
                        placeholder="The future of artificial intelligence is..."
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <div className="mt-3 flex gap-3 flex-wrap sm:w-9/12">
                        {blogCategories.map((item, index) => (
                            <span
                                key={index}
                                onClick={() => setSelectedCategory(item)}
                                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                                    selectedCategory === item
                                        ? "bg-purple-50 text-purple-700 border-purple-300"
                                        : "text-gray-500 border-gray-300"
                                }`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 text-sm rounded-lg hover:opacity-90"
                >
                    <Edit className="w-5" />
                    Generate title
                </button>
            </form>

            {/* Generated Title Section */}
            <div className="w-full max-w-lg mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <Hash className="w-6 text-[#4A7AFF]" />
                    <h1 className="text-xl font-semibold">Generated title</h1>
                </div>
                <div className="flex-1 flex justify-center items-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Edit className="w-9 h-9" />
                        <p>Enter a keyword and click "Generate title" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTitles;
