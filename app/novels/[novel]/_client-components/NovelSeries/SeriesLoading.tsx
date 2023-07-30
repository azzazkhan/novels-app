import React from 'react';

const SeriesLoading = () => {
    return (
        <div
            className="w-full h-16 rounded-xl skeleton"
            style={
                {
                    '--skeleton-end': '700px',
                    backgroundSize: '900px',
                    animationDuration: '2500ms',
                } as any
            }
        />
    );
};

export default SeriesLoading;
