import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import { Description, Image, LocalOffer, MoreVert, Room } from "@mui/icons-material";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  //const { data } = useGoogleSearch(term);
  const data = response;

  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            className="search__page--logo"
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
            alt=""
          />
        </Link>
        <div className="search__page--headerBody">
          <Search hideButtons/>
          <div className="search__page--options">
            <div className="search__page--optionsLeft">

              <div className="search__page--option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <Description />
                <Link to="" className="option__not-allowed">News</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <Image />
                <Link to="" className="option__not-allowed">Images</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <LocalOffer />
                <Link to="" className="option__not-allowed">Shopping</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <Room />
                <Link to="" className="option__not-allowed">Maps</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <MoreVert />
                <Link to="" className="option__not-allowed">More</Link>
              </div>
              
            </div>
            <div className="search__page--optionsRight">
              <div className="search__page--option option__not-allowed">
                <Link to="" className="option__not-allowed">Settings</Link>
              </div>
              <div className="search__page--option option__not-allowed">
                <Link to="" className="option__not-allowed">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search__page--results"></div>
    </div>
  );
}

export default SearchPage;
