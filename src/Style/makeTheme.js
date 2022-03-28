import { createTheme } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";

const makeTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                    primary: {
                        main: indigo[400],
                    },
                }
                : {
                    primary: {
                        main: grey[700],
                    },
                }),
        },
        shape: {
            borderRadius: "18px",
        },
        typography:{
            fontFamily:"Montserrat"
        }
    });

export default makeTheme;
