import "./Template.css";
import Header from "../organisms/Header/Header";
import Footer from "../molecules/Footer/Footer";
export default function Template(props: any) {
  return (
    <>
      <div id="page-container">
        <Header /> 
        <div id="content-wrap">{props.children}</div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
