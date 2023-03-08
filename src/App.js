import BtnCustom from "./components/buttons/BtnCustom";
import Dropdown from "./components/buttons/Dropdown";
import OfferCard from "./components/cards/OfferCard";
import PostJobCard from "./components/cards/PostJobCard";
import SignMeUpCard from "./components/cards/SignMeUpCard";
import SerchFilterLabel from "./components/labels/SerchFilterLabel";
import Navbar from "./components/Navbar";

function App() {

  const dataOffers = require('./data/dataOffers.json')
  const dataCompanies = require('./data/dataCompanies.json')

  return (
    <div className="App bg-[#F5F5F5] pb-[80px]">
      <Navbar />
      <section
        id="hero"
        className="bg-[url('/public/png/hero.png')] h-[487px]
        flex justify-center items-start pt-[29px] relative">
        <div className="grid gap-[26px] justify-items-center">
          <img src="/png/title-hero-line1.png" alt="title" />
          <img src="/png/title-hero-line2.png" alt="title" />
          <img src="/png/title-hero-line3.png" alt="title" />
          <img src="/png/buscador.png" alt="title" />
          <div className="relative z-50">
            <PostJobCard />
            <div id="companies"
              className="flex section mt-[23px] w-[1114px] gap-[25px] 
              relative justify-between">
              {dataCompanies.companies.map((companie) => (
                <img
                  key={companie.id}
                  src={companie.url}
                  alt={companie.name}
                  className={companie.name === "trusted" ? "scale-[0.5]" : ""}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          src="/png/rectangle.png"
          alt="title"
          className="absolute w-full h-[370px] bottom-[-217px] !z-10 "
        />
      </section>

      <section id="filters"
        className="section relative mt-[34px] z-50 bg-[#F5F5F5]">
        <div className="flex gap-[10px]">
          <img src="/png/filter-logo.png" className="mr-[17px]" alt="title" />
          <Dropdown
            title={"Search"}
            icon={"🔍"}
            options={["🤓 Engineer", "💰 Finance", "💼 Executive", "👵 Senior", "🤓 Developer", "♾️ Sys Admin"]}
          />
          <Dropdown
            title={"Location"}
            icon={"🌏"}
            options={["🤓 Engineer", "💰 Finance", "💼 Executive", "👵 Senior", "🤓 Developer", "♾️ Sys Admin"]}
          />
          <Dropdown
            title={"Salary"}
            icon={"💵"}
            options={["🤓 Engineer", "💰 Finance", "💼 Executive", "👵 Senior", "🤓 Developer", "♾️ Sys Admin"]}
          />
          <Dropdown
            title={"Benefits"}
            icon={"🎪"}
            options={["🤓 Engineer", "💰 Finance", "💼 Executive", "👵 Senior", "🤓 Developer", "♾️ Sys Admin"]}
          />
        </div>
        <div className="flex gap-[24px] mt-[10px] mb-[30px]">
          <SerchFilterLabel text={"🤓 Engineer"} />
          <SerchFilterLabel text={"💼 Executive"} />
          <SerchFilterLabel text={"👵 Senior"} />
          <SerchFilterLabel text={"🤓 Developer"} />
          <SerchFilterLabel text={"💰 Finance"} />
          <SerchFilterLabel text={"♾️ Sys Admin"} />
        </div>
      </section>

      <section id="offers"
        className="section relative !z-20 bg-[#F5F5F5] grid gap-[20px]">
        <SignMeUpCard />
        {
          dataOffers.offers.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))
        }
      </section>

    </div>
  );
}

export default App;
