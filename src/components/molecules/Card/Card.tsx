import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { LinearProgress } from "@mui/material";
import Typographys from "../../atoms/typography/Typographys";
import CustomButton from "../../atoms/Button/CustomButton";
import TimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";


export type CardItemsProps = {
  image: string;
  title: string;
  author: string;
  role: string;
  value:number;
  testid?:string;
  onClick?:React.MouseEventHandler<HTMLDivElement>;
};
const CardItems = (props: CardItemsProps) => {
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 284,
      margin:"40px",
      boxShadow: "none",
    },

    icon: {
      paddingRight: "0px",
      minWidth: 5,
    },

    frame: {
      display: "flex",
      alignItems: "center",
     marginTop:"20px"
    },
    MoreHoriz: {
      position: "relative",
      left: "247px",
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={props.onClick} data-testid={props.testid}>
      <CardActionArea disableTouchRipple={true}>
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + props.image}
          width={284}
          height={285}
        />
        <CardContent>
          <Typographys variant="subtitle1" content={props.title} />
          <Typographys variant="body1" content={props.author} />

          <div className={classes.frame}>
            <TimeIcon fontSize="small" sx={{margin:"5px"}} />
            <Typographys variant="caption3" content="13-minutes read" />

            <PersonOutlineIcon fontSize="small" sx={{margin:"5px"}}/>
            <Typographys variant="caption3" content="1.9k reads" />
          </div>
        </CardContent>
      </CardActionArea>
      {props.role === "explore" && (
        <CardActions data-testid="add">
          <CustomButton
            size="large"
            variant="text"
            color="secondary"
            startIcon={<AddIcon />}
            fullWidth={true}
            
          >
            Add to Library
          </CustomButton>
        </CardActions>
      )}
      {props.role === "current" && (
        <CardActions data-testid="current">
          <MoreHorizIcon fontSize="small" className={classes.MoreHoriz} />
          <div>
            <LinearProgress
              value={props.value}
              sx={{
                marginTop: "35px",
                height: "15px",
                overflow: "unset",
                borderRadius: "0px 0px 8px 8px",
                width: "244px",
                position:"relative",
                left:"20px",
                backgroundColor: "#F1F6F4",
              }}
              variant="determinate"
            />
          </div>
        </CardActions>
      )}
      {props.role === "finished" && (
        <CardActions data-testid="finished">
          <CustomButton
            size="large"
            variant="text"
            color="secondary"
            fullWidth={true}
          >
            Finished
          </CustomButton>
        </CardActions>
      )}
    </Card>
  );
};

export default CardItems;
