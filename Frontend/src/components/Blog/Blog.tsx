
import {ArrowRightCircleIcon} from "lucide-react"

const Blog = () => {
  return (
    <div className="flex  sm:flex-row  flex-col  ">
      <div className="flex sm:w-1/2 flex-col  bg-[#111111]  sm:py-[100px] px-[80px] py-[50px] gap-[50px] sm;gap-[10px]">
        <h4 className="text-[20px]sm:text-[20px] md:text-[30px] mb-[10px] font-mono text-white"> BLog & Articles</h4>
        <div>
          <span className="text-[13px] text-[#353434]">march 28, 2018</span>
          <h3 className="text-[15px] text-white flex gap-[10px] hover:gap-[15px]  transition-all cursor-pointer items-center">
            THe best IDE's and code and editors
            <span>
              <ArrowRightCircleIcon />
            </span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2   gap-[50px] bg-[#1f2020] sm:py-[100px] justify-between items-baseline sm:px-[100px] p-[10px]">
              <div className="sm:w-350px flex flex-col items-baseline gap-2">
              <h3 className="sm:text-[20px] md:text-[30px] text-[20px] text-white font-mono">Subscribe to my newsletter today</h3>
        <span className="sm:text-[14px] text-[13px]  text-[#adabab] md:text-[15px]" >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          nisi modi, accusamus maxime dignissimos sit!
              </span>
              
              </div>
              <form action="" className="flex flex-col gap-[15px] items-baseline">
                  <label htmlFor="">
                      <input className="outline-none text-white bg-[#1f2020] py-[7px] px-[7px] border-b-[1px]   "  type="email" placeholder="Your email address"></input>
                  </label>
                  <button className="outline-none text-[white] flex gap-[10px] hover:gap-[15px] transition-all">Subscribe Now <ArrowRightCircleIcon className="text-[#FFFF00]"/></button>
              </form>
      </div>
    </div>
  );
};

export default Blog;
