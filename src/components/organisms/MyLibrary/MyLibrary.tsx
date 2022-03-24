import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Typography from "../../atoms/typography/Typographys";
import Tab from "../Tab/CustomTabs";
import Card from "../../molecules/Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: string;
  value: number;
}
const MyLibrary = () => {
  const useStyles = makeStyles({
    title: {
      marginBottom: "30px",
      marginLeft: "10px",
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState<Book[]>([]);
  const [currState, setCurrState] = useState("current");
  useEffect(() => {
    const processor = async () => {
      let response = await axios.get("http://localhost:8086/books");
      setData(response.data);
    };
    processor();
  }, []);
  const handleState = (state: string) => {
    setCurrState(state);
  };
  function renderCard(currData:Book){
    return (
      <Card testid={`card-${currData.id}`}
        key={currData.id}
        image={currData.image}
        role={currData.status}
        title={currData.title}
        author={currData.author}
        value={currData.value}
        onClick={()=>{navigate("/book");}}
      />
    );
  }

  const cards = () => {
    let currentlyReading = data.filter((book) => book.status === "current");

    let finishedReading = data.filter((book) => book.status === "finished");
    if (data == null) {
      return <CircularProgress />;
    } else {
      if (currState === "current") {
        return currentlyReading.map((currData: Book) => {
          return renderCard(currData);
        });
      } else {
        return finishedReading.map((currData: Book) => {
          return renderCard(currData);
        });
      }
    }
  };
  return (
    <Container data-testid="mylibrary">
      <div className={classes.title}>
        <Typography variant="h1" content="My Library" />
      </div>
      <Tab stateHandler={handleState} />
      <Grid data-testid='grid'
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {cards()}
      </Grid>
    </Container>
  );
};

export default MyLibrary;
