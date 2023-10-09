import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import VideoLength from "../shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex mb-3">
                <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                        alt="videoThumbnail"
                    />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>

                <div className="flex flex-col ml-3 overflow-hidden">
                    {/* Set the suggested video title */}
                    <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
                        {video?.title}
                    </span>

                     {/* Add the suggested author title and if the channel is varified the add the varified tick icon*/}
                    <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                        {video?.author?.title}
                        {video?.author?.badges[0]?.type ===
                            "VERIFIED_CHANNEL" && (
                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                        )}
                    </span>

                    <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                        {/* Add the channel views */}
                        <span>{`${abbreviateNumber(
                            video?.stats?.views,
                            2
                        )} views`}</span>

                         
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
        </Link>
    );
};

export default SuggestionVideoCard;
