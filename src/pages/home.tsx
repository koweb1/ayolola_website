import Homepagebody from "../components/homepagebody";
import NavBar from "../components/navbar";
import Homepageservice from "../components/homepageservice";
import Homepagetestimony from "../components/homepagetestimony";
export default function Homepage() {
  return (
    <div className="homepage">
      <NavBar />
      <Homepagebody />
      <Homepageservice />
      <Homepagetestimony />
    </div>
  );
}
