import React from 'react';

const ChapterLoading = () => {
    return (
        <div
            className="w-full h-18 rounded-xl skeleton"
            style={
                {
                    '--skeleton-end': '350px',
                    animationDuration: '2500ms',
                } as any
            }
        />
    );
};

export default ChapterLoading;
