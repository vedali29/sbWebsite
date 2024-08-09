import React from "react";
import The_idea from "../assets/The_idea.png";
import team_member_1 from "../assets/our_team_1.jpg"; // Assuming you have these images in JPG/PNG format
import team_member_2 from "../assets/our_team_2.jpg";
import team_member_3 from "../assets/our_team_3.jpg";
import milestoneImage from '../assets/event_2.jpg'   //to be changes
import Rectangle34 from '../SB photos/Rectangle 34.png';
import Rectangle35 from '../SB photos/Rectangle 35.png';
import Rectangle32 from '../SB photos/Rectangle 32.png';
import Rectangle31 from '../SB photos/Rectangle 31.png';
import Rectangle33 from '../SB photos/Rectangle 33.png';


const About_usContainer = () => {
    return (
        <>

            {/* starting of our mission */}

            <div className="bg-yellow-400 min-h-screen p-8">
                <h1 className="text-center text-3xl md:text-5xl font-bold mb-4">
                    Our Mission & Vision
                </h1>
                <br />
                <br />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-auto">
                        <div className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 ml-40">
                            <h2> Our mission is to</h2>
                            <h2> educate young people</h2>
                            <h2> in India on the 17</h2>
                            <h2> Sustainable </h2>
                            <h2> Development Goals.</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 ml-40 mt-20">
                            <img
                                className="rounded-md shadow-md object-cover h-48 w-90"
                                src={Rectangle31}
                                alt="Child 1"
                            />
                            <img
                                className="rounded-md shadow-md object-cover h-68 w-90"
                                src={Rectangle35}
                                alt="Child 2"
                            />
                        </div>
                    </div>
                    <div className="md:w-3/5 mt-0 md:mt-0 md:ml-8">
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-0">
                                <img
                                    className="rounded-md shadow-md object-cover h-full w-full"
                                    src={Rectangle32}
                                    alt="Child 3"
                                />
                                <img
                                    className="rounded-md shadow-md object-cover h-full w-full"
                                    src={Rectangle33}
                                    alt="Child 4"
                                />
                                <img
                                    className="rounded-md shadow-md object-cover h-full w-full"
                                    src={Rectangle34}
                                    alt="Child 5"
                                />
                            </div>
                        </div>
                        <div className="md:w-3/7 mr-40 ">
                            <p className="mt-8 text-lg md:text-2xl">
                                Our vision is a world where every young person understands the
                                importance of sustainability and takes action to create a better
                                future for all. We aim to reach out to more than a million kids
                                across India in the next seven years.
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-lg md:text-2xl">
                                <li>
                                    To educate children on the importance of sustainability and the
                                    SDGs while encouraging them to take action toward building a
                                    sustainable future.
                                </li>
                                <li>
                                    To create a platform for kids to share their ideas and projects on
                                    sustainability.
                                </li>
                                <li>
                                    To reach out to more than a million kids across India in the next
                                    seven years.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ending of our mission */}
            {/* Normal section for our story starts here */}
            <div className="bg-white">
                <br />
                <br />
                <div className="flex flex-col md:flex md:flex-row md:mx-28 my-2 mx-8">
                    <div className="basis-2/3 flex flex-col align-middle justify-start items-start order-2 md:order-2 text-black md:pt-8 py-4 md:pl-4">
                        <span className="md:text-4xl text-3xl mx-5">
                            <strong>
                                How it all started ? <br />
                            </strong>
                        </span>
                        <div className="md:text-xl md:mr-24 mx-4 text-base w-3/5">
                            <span>
                                Two students, feeling like they were lost in life's maze,
                                stumbled upon an idea.
                                <br />
                                <br />
                                <span className="text-balance">
                                    They couldn't help but notice something: their fellow students
                                    and even their curriculum seemed to be snoozing on
                                    sustainability and environmental awareness. Determined to make
                                    a difference, they decided to be the change they wanted to
                                    see. They gathered some friends who shared their vision and
                                    worked tirelessly through nights, fueled by coffee and their
                                    dreams.
                                </span>
                                <br />
                                <br />
                                And there it was:
                                <br />
                                <br />
                                <strong className="uppercase">Sustainable Bhava </strong>
                                <span className="capitalize font-bold">
                                    "telling tales for a better tomorrow".
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="basis-1/3 flex justify-end items-center order-1 md:order-1 hidden md:block rounded-full">
                        <img src={The_idea} alt="Slide 1" className="mx-auto rounded-lg" />
                    </div>
                    <div className="basis-1/3 flex justify-end items-center order-1 md:hidden">
                        <img src={The_idea} alt="Slide 1" className="mx-auto rounded-lg" />
                    </div>
                </div>
                <br />
                <br />
                <br />

                {/* Normal section for our story ends here */}

                {/* Our team starts here */}
                <div className="bg-yellow-400 pt-8">
                    <div className="text-left pt-8 mb-8 md:ml-36 ml-8">
                        <span className="m-2 md:text-5xl text-3xl">
                            <strong>Our Experts</strong>
                        </span>
                    </div>
                    <br />

                    <div className="flex flex-col justify-center items-center md:mx-36 md:flex-row md:mb-16 mb-4">
                        <div className="flex flex-col basis-1/3 py-4 p-1 rounded-lg duration-200 items-center relative mb-2 md:mb-0">
                            <div className="relative w-80 h-100">
                                <img
                                    src={team_member_1}
                                    alt="team member 1"
                                    className="w-full h-full object-cover rounded-lg border-8 border-white"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-xl">
                                    Mr. Rumit Walia
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col basis-1/3 py-4 p-1 rounded-lg duration-200 items-center relative mb-2 md:mb-0">
                            <div className="relative w-80 h-100">
                                <img
                                    src={team_member_2}
                                    alt="team member 2"
                                    className="w-full h-full object-cover rounded-lg border-8 border-white"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-xl">
                                    Ms. Rachna Puri
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col basis-1/3 py-4 p-1 rounded-lg duration-200 items-center relative mb-2 md:mb-0">
                            <div className="relative w-80 h-100">
                                <img
                                    src={team_member_3}
                                    alt="team member 3"
                                    className="w-full h-full object-cover rounded-lg border-8 border-white"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-xl">
                                    Ms. Poojita Goswami
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                {/* Our team ends here */}


                {/* our mileston section begins here */}

                <div className="flex flex-col items-start bg-white py-8 px-8 md:px-36">
                    <div className="text-left mb-8">
                        <span className="m-2 md:text-5xl text-3xl">
                            <strong>Our Future Milestones</strong>
                        </span>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col md:flex-row items-start w-full">
                        <div className="w-full md:w-2/6 flex justify-center md:justify-start mb-2 md:mb-0">
                            <img src={milestoneImage} alt="Milestone" className="w-full md:w-auto h-max max-w-md rounded-lg shadow-md" />
                        </div>
                        <div className="w-full md:w-5/7 md:ml-4 flex flex-col items-start space-y-4">
                            <div className="flex items-center justify-center font-bold text-2xl border-2 border-red-400 bg-red-400 w-full py-4 px-8 rounded-full">
                                2023
                            </div>
                            <div className="flex items-center justify-center font-bold text-2xl border-2 border-green-400 bg-green-400 w-full py-4 px-8 rounded-full">
                                2024
                            </div>
                            <div className="w-full border-2 border-yellow-400 bg-yellow-400 py-2 px-4 rounded-full">
                                <span className="flex flex-col items-center justify-center font-bold text-2xl">2025</span>
                                <ul className="mt-2 ml-4 list-disc font-sm text-left w-full pl-8 p-2 text-2xl">
                                    <li>Partner with 500+ Schools</li>
                                    <li>Educating 150K+ Students</li>
                                    <li>Launching teacher training program</li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center font-bold text-2xl border-2 border-blue-400 bg-blue-400 w-full py-4 px-8 rounded-full">
                                2026
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About_usContainer;
