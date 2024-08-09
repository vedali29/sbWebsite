import React from 'react';
import Rectangle47 from '../SB photos/Rectangle 47.png';
import Rectangle48 from '../SB photos/Rectangle 48.png';
import Rectangle49 from '../SB photos/Rectangle 49.png';
import Rectangle50 from '../SB photos/Rectangle 50.png';
import Rectangle51 from '../SB photos/Rectangle 51.png';
import Rectangle52 from '../SB photos/Rectangle 52.png';
import Rectangle53 from '../SB photos/Rectangle 53.png';
import Rectangle54 from '../SB photos/Rectangle 54.png';

const GallerySection = () => {
    return (
        <div className="p-4 mx-40">

            {/* First and Second Images (left side) */}
            <div className='flex flex-wrap gap-4'>
            <div className="flex flex-col w-full md:w-1/2">
              <div className="relative mb-4">
                <img src={Rectangle47} alt="Story Telling" className="w-70 h-50 object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                  <span>Story Telling</span>
                </div>
              </div>
              <div className="relative">
                <img src={Rectangle48} alt="School Workshops" className="w-70 h-50 object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                  <span>School Workshops</span>
                </div>
              </div>
            </div>

            {/* Third Image (right side, same row as first two) */}
            <div className="relative w-full md:w-1/2 h-full">
              <img src={Rectangle49} alt="College Workshops" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>College Workshops</span>
              </div>
            </div>
            </div>

            {/* Fourth Image (next row, spans full width) */}
            <div className="relative w-full h-full mt-4">
              <img src={Rectangle50} alt="Corporate Sessions" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>Corporate Sessions</span>
              </div>
            </div>

            {/* Fifth and Sixth Images (next row, half-width each) */}
            <div className="relative w-full md:w-1/2 h-full mt-4">
              <img src={Rectangle51} alt="Performances" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>Performances</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-full mt-4">
              <img src={Rectangle52} alt="Global Goals Ambassador" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>Global Goals Ambassador</span>
              </div>
            </div>

            {/* Seventh and Eighth Images (next row, half-width each) */}
            <div className="relative w-full md:w-1/2 h-full mt-4">
              <img src={Rectangle53} alt="SDGs Book Clubs" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>SDGs Book Clubs</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-full mt-4">
              <img src={Rectangle54} alt="Teachers Training Program" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                <span>Teachers Training Program</span>
              </div>
            </div>
        </div>
    );
}

export default GallerySection;
