import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../atoms/Logo/Logo";
import Typographys from "../../atoms/typography/Typographys";
const Footer = () => {
  const useStyles = makeStyles({
    flex: {
      display: "flex",
      justifyContent: "space-around",
      alignContent: "flex-start",
      paddingLeft: "80px",
      paddingRight: "190px",
    },
    body: {
      backgroundColor: "#F1F6F4",
      height: "370px",
      width: "100vw",
      paddingTop: "38px",
    },
    body1: {
      color: "solid black",
      paddingTop: "38px",
      fontWeight: 700,
    },
    gamma: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "22px",
     marginLeft:"300px",
     marginTop:"50px",
    },
    parent: { display: "flex", justifyContent: "center", width: "" },
  });
  const classes = useStyles();
  return (
    <div className={classes.parent} data-testid='footer'>
      <div className={classes.body}>
        <div className={classes.flex}>
          <div>
            <Logo />
            <div style={{ color: "#0365F2", fontWeight: 500 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Cera Pro",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                Big ideas in small packages Start learning now
              </Typography>
            </div>
          </div>
          <div>
            <div className={classes.body1}>
              <Typographys variant="body2" content="Editorial" />
              <Typographys variant="body1" content="Book lists" />
              <Typographys variant="body1" content="What is Nonfiction?" />
              <Typographys variant="body1" content="What to read next?" />
              <Typographys variant="body1" content="Benefits of reading" />
            </div>
          </div>
          <div>
            <div className={classes.body1}>
              <Typographys variant="body2" content="Useful Links" />
              <Typographys variant="body1" content="Pricing" />
              <Typographys variant="body1" content="Blinkist business" />
              <Typographys variant="body1" content="Gift Cards" />
              <Typographys variant="body1" content="Blinkist magzine" />
              <Typographys variant="body1" content="Contact & help" />
            </div>
          </div>
          <div>
            <div className={classes.body1}>
              <Typographys variant="body2" content="Company" />
              <Typographys variant="body1" content="About" />
              <Typographys variant="body1" content="Careers" />
              <Typographys variant="body1" content="Partners" />
              <Typographys variant="body1" content="code of Conduct" />
            </div>
          </div>
        </div>
        <div className={classes.gamma}>
          © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
          Policies
        </div>
      </div>
    </div>
  );
};
export default Footer;
