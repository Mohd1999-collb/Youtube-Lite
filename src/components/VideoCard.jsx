import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex flex-col mb-8">
                {/* Set the thumbnails and time duration of each video */}
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">

                    {/* Set the thumbnails of each video */}
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                        alt="videothumbnails"
                    />

                    {/* Set the time duration of each video */}
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>

                <div className="flex text-white mt-3">
                    {/* Add the channel author avtar */}
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.author?.avatar[0]?.url}
                                alt="authorAvtar"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col ml-3 overflow-hidden">

                        {/* Add the channel title */}
                        <span className="text-sm font-bold line-clamp-2">
                            {video?.title}
                        </span>

                        {/* Add the channel author title and if the channel is varified the add the varified tick icon*/}
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                )}
                        </span>

                        
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            {/* Add the channel views */}
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                            )} Views`}</span>

                            {/* Add the dot(.) between  channel veiws and publishedtime*/}
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            
                            {/* Add the channel publishedtime*/}
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
