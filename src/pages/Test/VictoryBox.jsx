import React, { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SwordRight = forwardRef(({ className = "" }, ref) => {
    return (
        <svg
            ref={ref}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            dangerouslySetInnerHTML={{
                __html: `<?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="512px" id="Sword" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#B75798" points="165.316,346.685 151.996,333.365 64.291,421.07 77.61,434.391 90.929,447.71 178.635,360.004 "/><path d="M98.834,442.717l-6.384-23.168l-23.167-6.383c-2.672-0.736-5.533,0.02-7.493,1.979l-13.201,13.202 c-2.592,2.591-2.592,6.794,0,9.386l12.839,12.84l12.839,12.839c2.592,2.592,6.794,2.592,9.386,0l13.201-13.201 C98.815,448.25,99.57,445.389,98.834,442.717z" fill="#FFD9BE"/><polygon fill="#7F2467" points="151.996,333.365 137.104,348.258 163.743,374.896 178.635,360.004 165.316,346.685 "/><rect fill="#7F2467" height="9.767" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -47.9208 743.9301)" width="37.673" x="111.274" y="377.006"/><rect fill="#7F2467" height="9.767" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -105.2994 767.6941)" width="37.673" x="87.509" y="400.772"/><path d="M53.969,443.112l7.459,7.46l12.839,12.839c2.592,2.592,6.794,2.592,9.386,0l13.201-13.201 c1.96-1.96,2.715-4.821,1.979-7.493l-6.384-23.168l-16.447,16.448C76.003,435.997,67.381,445.73,53.969,443.112z" fill="#FFBF76"/><linearGradient gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -1549.0148 -556.7651)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="1851.0674" x2="1851.0674" y1="-972.1616" y2="-502.2602"><stop offset="0" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#C7DAFF"/></linearGradient><path d="M457.373,46.666l-26.05,1.916c-5.269,0.388-10.222,2.655-13.957,6.391l-266.519,266.52l19.831,19.83 l19.83,19.83l266.52-266.519c3.734-3.735,6.004-8.688,6.391-13.957l1.916-26.05C465.668,50.099,461.9,46.333,457.373,46.666z" fill="url(#SVGID_1_)"/><path d="M223.397,248.941l-72.55,72.551l19.831,19.83l113.163-113.163 C259.305,241.872,237.547,247.05,223.397,248.941z" fill="#C7DAFF"/><path d="M375.885,137.868c0.574-1.126,1.147-2.282,1.714-3.467l-93.758,93.758 c15.681-8.764,32.487-20.991,49.184-38.139l16.856-16.856C360.272,162.772,369.199,150.957,375.885,137.868z" fill="#C7DAFF"/><path d="M457.373,46.666l-26.05,1.916c-5.269,0.388-10.222,2.655-13.957,6.391l-27.133,27.133 c-0.014,20.159-5.896,38.207-12.635,52.295l85.578-85.578C461.711,47.357,459.637,46.499,457.373,46.666z" fill="#C7DAFF"/><linearGradient gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -1549.0148 -556.7651)" gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="1865.0898" x2="1865.0898" y1="-603.3032" y2="-970.095"><stop offset="0" style="stop-color:#819FEA"/><stop offset="1" style="stop-color:#A7C1FC"/></linearGradient><path d="M457.027,94.634c2.416-2.416,4.139-5.37,5.215-8.56c-4.43,0.065-10.313,0.653-17.621,2.421 c-18.714,4.527-35.653,14.538-49.268,28.153L170.678,341.322l19.83,19.83L457.027,94.634z" fill="url(#SVGID_2_)"/><path d="M251.494,419.528c1.663-4.069,4.682-13.362,3.523-25.045c-0.302-3.04-3.5-4.808-6.221-3.417 c-5.36,2.74-13.884,5.289-20.431-1.258l-39.741-39.196l-2.318-24.918l-24.918-2.317l-39.196-39.742 c-6.547-6.547-3.999-15.07-1.258-20.43c1.391-2.721-0.376-5.92-3.417-6.222c-11.683-1.159-20.976,1.86-25.045,3.522 c-1.418,0.58-2.614,1.614-3.342,2.963c-6.205,11.494-6.861,23.543-6.396,31.338c0.178,2.974,3.711,4.448,5.974,2.51 c7.566-6.485,15.789-2.867,15.789-2.867l56.527,56.527l56.527,56.527c0,0,3.618,8.223-2.867,15.789 c-1.938,2.262-0.464,5.795,2.51,5.973c7.794,0.467,19.844-0.19,31.337-6.395C249.88,422.143,250.914,420.946,251.494,419.528z" fill="#FFD9BE"/><path d="M217.551,407.504c0,0,3.618,8.223-2.867,15.789c-1.938,2.262-0.464,5.795,2.51,5.973 c7.794,0.467,19.844-0.19,31.337-6.395c1.349-0.729,2.383-1.925,2.962-3.343c1.663-4.069,4.682-13.362,3.523-25.045 c-0.302-3.04-3.5-4.808-6.221-3.417c-5.36,2.74-13.884,5.289-20.431-1.258l-39.741-39.196l-2.318-24.918l-25.283,25.282 L217.551,407.504z" fill="#FFBF76"/><polygon fill="#FFFCFF" points="127.111,317.064 141.193,331.146 155.243,317.096 141.245,302.931 "/><polygon fill="#FFFCFF" points="109.495,299.447 117.654,307.607 131.836,293.425 123.733,285.209 "/></svg>`,
            }}
        />
    );
});

const SwordLeft = forwardRef(({ className = "" }, ref) => {
    return (
        <div className="transform -scale-x-100">
            <svg
                ref={ref}
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                dangerouslySetInnerHTML={{
                    __html: `<?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="512px" id="Sword" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#B75798" points="165.316,346.685 151.996,333.365 64.291,421.07 77.61,434.391 90.929,447.71 178.635,360.004 "/><path d="M98.834,442.717l-6.384-23.168l-23.167-6.383c-2.672-0.736-5.533,0.02-7.493,1.979l-13.201,13.202 c-2.592,2.591-2.592,6.794,0,9.386l12.839,12.84l12.839,12.839c2.592,2.592,6.794,2.592,9.386,0l13.201-13.201 C98.815,448.25,99.57,445.389,98.834,442.717z" fill="#FFD9BE"/><polygon fill="#7F2467" points="151.996,333.365 137.104,348.258 163.743,374.896 178.635,360.004 165.316,346.685 "/><rect fill="#7F2467" height="9.767" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -47.9208 743.9301)" width="37.673" x="111.274" y="377.006"/><rect fill="#7F2467" height="9.767" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -105.2994 767.6941)" width="37.673" x="87.509" y="400.772"/><path d="M53.969,443.112l7.459,7.46l12.839,12.839c2.592,2.592,6.794,2.592,9.386,0l13.201-13.201 c1.96-1.96,2.715-4.821,1.979-7.493l-6.384-23.168l-16.447,16.448C76.003,435.997,67.381,445.73,53.969,443.112z" fill="#FFBF76"/><linearGradient gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -1549.0148 -556.7651)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="1851.0674" x2="1851.0674" y1="-972.1616" y2="-502.2602"><stop offset="0" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#C7DAFF"/></linearGradient><path d="M457.373,46.666l-26.05,1.916c-5.269,0.388-10.222,2.655-13.957,6.391l-266.519,266.52l19.831,19.83 l19.83,19.83l266.52-266.519c3.734-3.735,6.004-8.688,6.391-13.957l1.916-26.05C465.668,50.099,461.9,46.333,457.373,46.666z" fill="url(#SVGID_1_)"/><path d="M223.397,248.941l-72.55,72.551l19.831,19.83l113.163-113.163 C259.305,241.872,237.547,247.05,223.397,248.941z" fill="#C7DAFF"/><path d="M375.885,137.868c0.574-1.126,1.147-2.282,1.714-3.467l-93.758,93.758 c15.681-8.764,32.487-20.991,49.184-38.139l16.856-16.856C360.272,162.772,369.199,150.957,375.885,137.868z" fill="#C7DAFF"/><path d="M457.373,46.666l-26.05,1.916c-5.269,0.388-10.222,2.655-13.957,6.391l-27.133,27.133 c-0.014,20.159-5.896,38.207-12.635,52.295l85.578-85.578C461.711,47.357,459.637,46.499,457.373,46.666z" fill="#C7DAFF"/><linearGradient gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -1549.0148 -556.7651)" gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="1865.0898" x2="1865.0898" y1="-603.3032" y2="-970.095"><stop offset="0" style="stop-color:#819FEA"/><stop offset="1" style="stop-color:#A7C1FC"/></linearGradient><path d="M457.027,94.634c2.416-2.416,4.139-5.37,5.215-8.56c-4.43,0.065-10.313,0.653-17.621,2.421 c-18.714,4.527-35.653,14.538-49.268,28.153L170.678,341.322l19.83,19.83L457.027,94.634z" fill="url(#SVGID_2_)"/><path d="M251.494,419.528c1.663-4.069,4.682-13.362,3.523-25.045c-0.302-3.04-3.5-4.808-6.221-3.417 c-5.36,2.74-13.884,5.289-20.431-1.258l-39.741-39.196l-2.318-24.918l-24.918-2.317l-39.196-39.742 c-6.547-6.547-3.999-15.07-1.258-20.43c1.391-2.721-0.376-5.92-3.417-6.222c-11.683-1.159-20.976,1.86-25.045,3.522 c-1.418,0.58-2.614,1.614-3.342,2.963c-6.205,11.494-6.861,23.543-6.396,31.338c0.178,2.974,3.711,4.448,5.974,2.51 c7.566-6.485,15.789-2.867,15.789-2.867l56.527,56.527l56.527,56.527c0,0,3.618,8.223-2.867,15.789 c-1.938,2.262-0.464,5.795,2.51,5.973c7.794,0.467,19.844-0.19,31.337-6.395C249.88,422.143,250.914,420.946,251.494,419.528z" fill="#FFD9BE"/><path d="M217.551,407.504c0,0,3.618,8.223-2.867,15.789c-1.938,2.262-0.464,5.795,2.51,5.973 c7.794,0.467,19.844-0.19,31.337-6.395c1.349-0.729,2.383-1.925,2.962-3.343c1.663-4.069,4.682-13.362,3.523-25.045 c-0.302-3.04-3.5-4.808-6.221-3.417c-5.36,2.74-13.884,5.289-20.431-1.258l-39.741-39.196l-2.318-24.918l-25.283,25.282 L217.551,407.504z" fill="#FFBF76"/><polygon fill="#FFFCFF" points="127.111,317.064 141.193,331.146 155.243,317.096 141.245,302.931 "/><polygon fill="#FFFCFF" points="109.495,299.447 117.654,307.607 131.836,293.425 123.733,285.209 "/></svg>`,
                }}
            />
        </div>
    );
});

export default function VictoryBox() {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleVictory = () => {
        setIsAnimating(true);
        // Reset animation after it completes
        setTimeout(() => setIsAnimating(false), 1500);
    };

    const swordVariants = {
        hidden: (direction) => ({
            x: direction === 'left' ? -200 : 200,
            y: '-50%',
            rotate: direction === 'left' ? -45 : 45,
            opacity: 0
        }),
        visible: {
            x: 0,
            y: '-50%',
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const rippleVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 6,
            opacity: [0.8, 0.4, 0],
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const sparkleVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: [1, 1.2, 1],
            opacity: [0, 1, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
            <motion.button
                onClick={handleVictory}
                disabled={isAnimating}
                whileHover={{ scale: 1.05 }}
                className={`mb-8 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                    isAnimating
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black shadow-lg hover:shadow-xl'
                }`}
            >
                {isAnimating ? 'Victory!' : 'Trigger Victory'}
            </motion.button>

            <motion.div 
                className={`relative w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 border-2 rounded-2xl overflow-hidden ${
                    isAnimating ? 'border-green-400' : 'border-gray-600'
                }`}
                animate={isAnimating ? {
                    boxShadow: [
                        '0 0 20px rgba(34, 197, 94, 0.3)',
                        '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)',
                        '0 0 20px rgba(34, 197, 94, 0.3)'
                    ]
                } : {}}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                {/* Left Sword */}
                <motion.div 
                    className="absolute top-1/2 left-4 w-24 h-24 z-10"
                    custom="left"
                    variants={swordVariants}
                    initial="hidden"
                    animate={isAnimating ? "visible" : "hidden"}
                >
                    <SwordLeft className="w-full h-full" />
                </motion.div>

                {/* Right Sword */}
                <motion.div 
                    className="absolute top-1/2 right-4 w-24 h-24 z-10"
                    custom="right"
                    variants={swordVariants}
                    initial="hidden"
                    animate={isAnimating ? "visible" : "hidden"}
                >
                    <SwordRight className="w-full h-full" />
                </motion.div>

                {/* Ripple Effect */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full z-0 bg-green-400 bg-opacity-20"
                    variants={rippleVariants}
                    initial="hidden"
                    animate={isAnimating ? "visible" : "hidden"}
                />

                {/* Victory Text */}
                <AnimatePresence>
                    {isAnimating && (
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center z-20"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="text-green-400 text-2xl font-bold"
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    opacity: [1, 0.8, 1]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                VICTORY!
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sparkle Effects */}
                <AnimatePresence>
                    {isAnimating && (
                        <>
                            <motion.div 
                                className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
                                variants={sparkleVariants}
                                initial="hidden"
                                animate="visible"
                            />
                            <motion.div 
                                className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full"
                                variants={sparkleVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            />
                            <motion.div 
                                className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-300 rounded-full"
                                variants={sparkleVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            />
                            <motion.div 
                                className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
                                variants={sparkleVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.div>

            <div className="mt-6 text-center text-gray-400 max-w-md">
                <p>Click the button to see the victory animation with crossing swords and ripple effects!</p>
            </div>
        </div>
    );
}