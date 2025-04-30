import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 font-semibold">
        Latest
      </p>
      <Marquee className="flex gap-5" pauseOnHover delay={1}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          laboriosam ab, esse accusamus totam veniam possimus debitis molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          laboriosam ab, esse accusamus totam veniam possimus debitis molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          laboriosam ab, esse accusamus totam veniam possimus debitis molestiae.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
