import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../molecules/Card/Card";
import Typographys from "../../atoms/typography/Typographys";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import CustomSearch from "../../atoms/Search/CustomSearch";
import './Enterpreneurship.css';
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
const Enterpreneurship = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    container: {
     "&.MuiContainer-root":{
       margin:"5px 5px 5px 40px",
       position:"relative",
       left:"20px"
     },
    },
  })
  const classes = useStyles();
  const [input, setInput] = useState("");
  const ariaLabel = { "aria-label": "description" };
  const [data, setData] = useState<Book[]>([]);
  useEffect(() => {
    const processor = async () => {
        let uri = "http://localhost:8086/books?status=explore";
      
      if (input) {
        uri += `&q=${input}`;
    }
    let response = await axios.get(uri);
      
      setData(response.data);
    };
    processor();
  }, [input]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  

  const cards = (category:string) => {
    
    let categoryBasedBooks = data.filter((book) => book.category === category);
    if (data == null) {
      return <CircularProgress />;
    } else {
        return categoryBasedBooks.map((currData: Book) => {
          return (
             <Card testid={`card-${currData.id}`}
              key={currData.id}
              image={currData.image}
              role={currData.status}
              title={currData.title}
              author={currData.author}
              value={currData.value}
              onClick={()=>{
                localStorage.setItem("id",(currData.id).toString());
                navigate("/book");
              }}
            />
          );
        });
      
    }
  };
  return (
    <div data-testid="Enterpreneurship">
      <div className="input">
        
        <Input
            startAdornment={<CustomSearch />}
          placeholder="Search by Title or Author"
          name="text"
          value={input}
          inputProps={ariaLabel}
          onChange={handleChange}
          fullWidth={true}
          sx={{position:"relative",left:"10%",width:"800px",marginBottom:"40px"}}
          
        />
        
      </div>
      <Container className={classes.container}>
        {!input && <Typographys variant="subtitle1" content="Trending blinks" styles={{margin:"30px 25px 25px 25px",fontSize:"24px"}}/>}
        <Grid data-testid="trendingBlinks"
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {cards("blink")}
        </Grid>
        {!input && <Typographys variant="subtitle1" content="Just added" styles={{margin:"25px",fontSize:"24px"}}/>}
        <Grid data-testid="justAdded"
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {cards("added")}
        </Grid>
        {!input && <Typographys variant="subtitle1" content="Featured audio blinks" styles={{margin:"25px",fontSize:"24px"}}/>}
        <Grid data-testid="featuredAudio"
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {cards("featured")}
        </Grid>
      </Container>
    </div>
  );
};

export default Enterpreneurship;


