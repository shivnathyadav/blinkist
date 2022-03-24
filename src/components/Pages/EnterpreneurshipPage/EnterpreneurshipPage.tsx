import Banner from "../../molecules/Banner/Banner";
import Enterpreneurship from "../../organisms/Enterpreneurship/Enterpreneurship";
import Template from "../../Template/Template";
import "./EnterpreneurshipPage.css";
export default function EnterpreneurshipPage() {
  return (
    <>
      <Template>
        <div className="BannerPos">
          <Banner />
        </div>
        <div className="EnterpreneurshipPos">
          <Enterpreneurship />
        </div>
      </Template>
    </>
  );
}
