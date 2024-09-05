import Image from "next/image";
import { newsItems } from "@/data/news/newsItems";
import Google from "@/public/google.png";

const Home = () => {
  return (
    <div className="bg-background font-merriweather">
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-x-7 py-10">
        <div className="w-full col-span-4 md:col-span-3 pb-14">
          {newsItems.slice(0, 2).map((item) => (
            <div key={item.title} className="space-y-5 mb-8">
              <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-5 col-span-2 md:col-span-1">
                  <div className="text-text font-bold text-4xl">
                    {item.title}
                  </div>
                  <div className="border-2 border-lightLine w-full md:w-[90%]"></div>
                  <div className="text-secondary pb-8 md:pb-0">
                    {item.description}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Image
                    src={Google}
                    className="w-full"
                    alt="Google Headquarters"
                  />
                </div>
              </div>
              <div className="border-2 border-darkLine w-full text-secondary"></div>
            </div>
          ))}

          <div className="flex justify-between space-x-10 mb-8">
            <div className="flex flex-col">
              <Image src={Google} className="w-full" alt="Google" />
              <div>Title</div>
            </div>

            <div className="w-1 h-40 md:h-64 bg-lightLine"></div>
            <div className="flex flex-col">
              <Image src={Google} className="w-full" alt="Google" />
              <div>Title</div>
            </div>
          </div>

          <div className="border-2 border-lightLine w-full"></div>

        </div>

        <div className="w-full col-span-4 md:col-span-1 space-y-4">
          <div className="font-bold text-4xl">Latest News</div>
          <div className="w-full h-1 bg-darkLine  "></div>
          {newsItems.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="font-bold">{item.title}</div>
              <div className="w-full h-1 border-darkLine border-2 border-dashed "></div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
