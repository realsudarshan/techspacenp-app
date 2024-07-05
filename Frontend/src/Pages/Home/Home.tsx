import Banner from "../../components/Banner/Banner";
import PlanPackage from "../../components/PlanPackage/PlanPackage";
import Services from "../../components/Services/Services";
import "../../index.css";

const Home = () => {
  return (
    <div className={`  w-full flex flex-col items-center justify-center`}>
      <Banner />
      <div className="w-full flex flex-col items-center justify-center px-10">
        <Services />
        <PlanPackage />
      </div>
    </div>
  );
};

export default Home;
