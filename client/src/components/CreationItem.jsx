/*import React, { useState } from 'react';
import Markdown from 'react-markdown';

const CreationItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div onClick={() => setExpanded(!expanded)} className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h2>{item.prompt}</h2>
                    <p className="text-gray-500">
                        {item.type} - {new Date(item.created_at).toLocaleDateString()}
                    </p>
                </div>
                <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
                    {item.type}
                </button>
            </div>

            {expanded && (
                <div className="mt-3">
                    {item.type === 'image' ? (
                        <div>
                            <img src={item.content} alt={item.prompt} className="w-full max-w-md mx-auto" />
                        </div>
                    ) : (
                        <div className="h-full overflow-y-scroll text-sm text-slate-700">
                            <div className='reset-tw'>
                                <Markdown>{item.content}</Markdown>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CreationItem;*/

import React, { useState } from 'react';
import Markdown from 'react-markdown';

const CreationItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div onClick={() => setExpanded(!expanded)} className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h2>{item.prompt}</h2>
                    <p className="text-gray-500">
                        {item.type} - {new Date(item.created_at).toLocaleDateString()}
                    </p>
                </div>
                <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
                    {item.type}
                </button>
            </div>

            {expanded && (
                <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
                    <div className="reset-tw">
                        <Markdown
                            components={{
                                h1: ({node, ...props}) => <h1 className="text-2xl font-bold my-4" {...props} />,
                                h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                                h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
                                p: ({node, ...props}) => <p className="mb-2" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2" {...props} />,
                                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                            }}
                        >
                            {item.content}
                        </Markdown>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreationItem;



