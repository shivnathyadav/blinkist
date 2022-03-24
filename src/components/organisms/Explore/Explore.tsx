import { useState } from "react";
import { withStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import CustomButton from "../../atoms/Button/CustomButton";
import { BiCommentDots } from "react-icons/bi";
import { BsBarChart, BsGraphUp } from "react-icons/bs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FaHistory, FaGlobeAsia, FaHeart, FaLandmark } from "react-icons/fa";
import { AiOutlineRocket } from "react-icons/ai";
import Backdrop from "@mui/material/Backdrop";
import {
  MdOutlineScience,
  MdOutlineAccountBalanceWallet,
  MdOutlineSchool,
} from "react-icons/md";
import "./explore.css";
import { Link, useNavigate } from "react-router-dom";
import Typographys from "../../atoms/typography/Typographys";
import { TiShoppingBag } from "react-icons/ti";
import {
  RiPsychotherapyLine,
  RiLeafLine,
  RiLightbulbFlashLine,
  RiHeartsLine,
} from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: any) => (
  <Menu
    marginThreshold={0}
    PaperProps={{
      style: {
        width: "100%",
        maxWidth: "100%",
        left: 0,
        right: 0,
        borderRadius: "0px",
      },
    }}
    open={false}
    elevation={0}
    anchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      position: "absolute",
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Explore = (props: any) => {
  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const toggle = () => {
    if (!expand) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    toggle();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggle();
  };
  return (
    <div data-testid="explorebutton">
      <CustomButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          color: "black",
          border: "none",
          borderRadius: "0px 0px 0px 0px",
          display: "block",
          marginLeft: "40px",
          width: "120px",
          "&:hover": {
            color: "black",
            backgroundColor: "white",
            borderBottom: "3px solid #22C870",
          },
        }}
        endIcon={
          (!expand && <ExpandMoreIcon data-testid="expandmore" />) ||
          (expand && <ExpandLessIcon data-testid="expandless" />)
        }
      >
        Explore
      </CustomButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ top: "-4px" }}
      >
        <div className="navCategory-list-wrapper">
          <ul className="navCategory-list">
            <Link to="/enterpreneurship">
              <li
                data-testid="toggleDropdown"
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <AiOutlineRocket style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Enterpreneurship" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <MdOutlineScience style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Science" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <FaGlobeAsia style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Economics" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <TiShoppingBag style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Corporate Culture" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <RiPsychotherapyLine style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Psychology" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <RiLeafLine style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Nature & Environment" />
              </li>
            </Link>
          </ul>

          <ul className="navCategory-list">
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <FaLandmark style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Politics" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <FaHeart style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Health & Nutrition" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <FaHistory />

                <Typographys variant="body2" content="History" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <RiLightbulbFlashLine style={{ fontSize: "20px" }} />
                <Typographys
                  variant="body2"
                  content="Motivation & Inspiration"
                />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <GiSandsOfTime style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Productivity" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <FiTarget style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Career & Success" />
              </li>
            </Link>
          </ul>
          <ul className="navCategory-list">
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <BsGraphUp />

                <Typographys variant="body2" content="Marketing" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <BsBarChart />

                <Typographys
                  variant="body2"
                  content="Personality Development"
                />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <BiCommentDots />
                <Typographys variant="body2" content="Communication Skills" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <MdOutlineAccountBalanceWallet style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Money & Investments" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <RiHeartsLine style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Sex & Relationship" />
              </li>
            </Link>
            <Link to="/enterpreneurship">
              <li
                className="content"
                onClick={() => {
                  document.body.style.backgroundColor = "white";
                  navigate("/enterpreneurship");
                }}
              >
                <MdOutlineSchool style={{ fontSize: "20px" }} />
                <Typographys variant="body2" content="Education" />
              </li>
            </Link>
          </ul>
        </div>
      </StyledMenu>
      <Backdrop
        sx={{
          marginTop: "52px",
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={expand}
        onClick={handleClose}
        data-testid="backdrop"
      ></Backdrop>
    </div>
  );
};

export default Explore;
