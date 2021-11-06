import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './githubProjects.css';

// const slideImages = [
//     {
//         url: 'https://i.pinimg.com/564x/ff/38/2b/ff382b77c220c563a249375a01b1eeb8.jpg',
//         caption: '',
//     },
//     {
//         url: 'images/slide_3.jpg',
//         caption: 'Slide 2',
//     },
//     {
//         url: 'images/slide_4.jpg',
//         caption: 'Slide 3',
//     },
// ];

const slideImages = [
    'https://i.pinimg.com/564x/ff/38/2b/ff382b77c220c563a249375a01b1eeb8.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg',
];

const Slideshow = () => {
    return (
        // <div className="slide-container">
        //     <Slide>
        //         {slideImages.map((slideImage, index) => (
        //             <div className="each-slide" key={index}>
        //                 <div
        //                     style={{
        //                         backgroundImage: `url(${slideImage.url})`,
        //                     }}
        //                 >
        //                     <span>{slideImage.caption}</span>
        //                 </div>
        //             </div>
        //         ))}
        //     </Slide>
        // </div>
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div
                        style={{
                            backgroundImage: `url(${slideImages[0]})`,
                            'margin-left': '35%',
                        }}
                    >
                        <span></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div
                        style={{
                            backgroundImage: `url(${slideImages[1]})`,
                            'margin-left': '35%',
                        }}
                    >
                        <span></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div
                        style={{
                            backgroundImage: `url(${slideImages[2]})`,
                            'margin-left': '35%',
                        }}
                    >
                        <span></span>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Slideshow;
