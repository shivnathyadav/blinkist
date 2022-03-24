import { IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { MouseEventHandler } from "react";
type CustomSearchProps = {
    onClick?:MouseEventHandler<HTMLButtonElement>,
    title?:string,
}
const CustomSearch = ({onClick,title}:CustomSearchProps) => {
    return ( 
        <div>
             <IconButton onClick={onClick} title={title}>
                <Search />
            </IconButton>
        </div>
     );
};
 
export default CustomSearch;