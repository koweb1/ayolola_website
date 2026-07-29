import Homepagebody from "../components/homepagebody";
import NavBar from "../components/navbar";
import Homepageservice from "../components/homepageservice";
import Homepagetestimony from "../components/homepagetestimony";
import Footer from "../components/footer/footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <NavBar />
      <Homepagebody />
      <Homepageservice />
      <Homepagetestimony />
       <Footer />
    </div>
  );
}
