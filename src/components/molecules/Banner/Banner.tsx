import image from "./undraw_Reading_re_29f8 1.png";
import { makeStyles } from "@mui/styles";
import Typographys from "../../atoms/typography/Typographys";

export default function Banner() {
  const useStyles = makeStyles({
    header: {
      position: "relative",
      left: "4.93%",
      top: "17.05%",
      height:"fit-content",
    },
    body: {
      position: "relative",
      left: "-27.07%",
      top: "57.82%",
      width: "691px",
      height:"fit-content",
    },
    img: {
      position: "relative",
      left: " -9.24%",
      top: "6.44%",
    },

    parent: {
      display: "flex",
      justifyContent: "center",
      width: "912px",
      height: "284px",
      backgroundColor: "#F1F6F4",
      
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.header}>
        <Typographys variant="h1" content="Explore Books on entrepreneurship" />
      </div>
      <div className={classes.body}>
        <Typographys
          variant="subtitle3"
          content="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
        />
      </div>
      <div className={classes.img}>
          <img src={image} alt="banner"/>
      </div>
    </div>
  );
}
