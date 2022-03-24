import React from "react";
import { makeStyles } from "@mui/styles";
import Typographys from "../../atoms/typography/Typographys";
import TimeIcon from "@mui/icons-material/AccessTime";
import image from "./2.png";
import CustomButton from "../../atoms/Button/CustomButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Tab} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
export default function BookDetails() {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    container: {
      display: "flex",
      alignItems: "center",
      marginBottom: "40px",
      height: "auto",
    },
    left: {
      width: "500px",
      height: "auto",
      marginLeft: "18%",
      marginRight: "100px",
    },
    frame: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "60px",
    },
    right: {
      width: "500px",
      height: "auto",

      display: "flex",
    },
    line: {
      margin: "auto",
      width: "912px",
      height: "auto",
      border: "1px solid #E1ECFC",
      marginBottom: "30px",
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("synopsis");
  const handleClick = async () => {
    const id = localStorage.getItem("id");
    const res = await fetch("http://localhost:8086/books/" + id);
    const data = await res.json();
    data["status"] = "finished";
    await fetch("http://localhost:8086/books/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/");
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.container} data-testid="bookDetails">
        <div className={classes.left}>
          <Typographys
            variant="body1"
            content="Get the key ideas from"
            styles={{ margin: "5px 0px 10px 0px" }}
          />

          <Typographys
            variant="h1"
            content="Beyond Entrepreneurship 2.0"
            styles={{ marginBottom: "20px" }}
          />

          <Typographys
            variant="subtitle3"
            content="Turning Your Business into an Enduring Great Company"
            styles={{ marginBottom: "10px" }}
          />
          <Typographys
            variant="body1"
            content="By Jim Collins and Bill Lazier"
            styles={{ marginBottom: "8px" }}
          />
          <div className={classes.frame}>
            <TimeIcon fontSize="small" />
            <Typographys
              variant="caption3"
              content="15-minutes read"
              styles={{ marginLeft: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <CustomButton
              variant="outlined"
              sx={{
                width: "122px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#22C870",
                },
              }}
            >
              Read Now
            </CustomButton>
            <CustomButton
              variant="contained"
              onClick={handleClick}
              sx={{
                color: "black",
                backgroundColor: "#2CE080",
                boxShadow: "none",
                width: "170px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#00C263",
                  boxShadow: "none",
                },
              }}
            >
              Finished Reading
            </CustomButton>
            <CustomButton
              variant="text"
              endIcon={<AiOutlineArrowRight />}
              sx={{
                color: "black",
                border: "none",
                width: "170px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#22C870",
                },
              }}
            >
              send to kindle
            </CustomButton>
          </div>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="wrapped label tabs example"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab
                value="synopsis"
                label="Synopsis"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
              <Tab
                value="who"
                label="Who is it for?"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
              <Tab
                value="about"
                label="About the author"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
            </TabList>
            <TabPanel
              value="synopsis"
              sx={{
                fontFamily: "Cera Pro",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#03314B",
              }}
            >
              Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
              Lazier’s essential 1992 business handbook, Beyond Entrepreneurship
              for the entrepreneurs, visionaries, and innovators of today. This
              new edition combines the timeless business advice and strategy of
              the original text, supplemented with cutting-edge insights and
              case studies pertinent to today’s business world.
            </TabPanel>
            <TabPanel
              value="who"
              sx={{
                fontFamily: "Cera Pro",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#03314B",
              }}
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, gthis is for them.
            </TabPanel>
            <TabPanel
              value="about"
              sx={{
                fontFamily: "Cera Pro",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#03314B",
              }}
            >
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. The Big Oxmox advised her not to do so,
              because there were thousands of bad Commas, wild Question Marks
              and devious Semikoli, but the Little Blind Text didn’t listen.
            </TabPanel>
          </TabContext>
        </div>
        <div className={classes.right}>
          <img
            src={image}
            alt="beyond enterpreneurship"
            width="50%"
            height="50%"
            style={{ marginTop: "50px" }}
          />
        </div>
      </div>
      <div className={classes.line}> </div>
    </>
  );
}
