import {Box, Typography} from "@mui/material";
import Add from '@mui/icons-material/AddBox';
import Remove from '@mui/icons-material/IndeterminateCheckBox';
import {useEffect, useState} from "react";

const DeltaStat = ({label, value}) => {
    const [toShow, setToShow] = useState(0)
    const abs = Math.abs(value);
    useEffect(() => {

        if (toShow < abs) {
            let timer = setTimeout(() => setToShow(toShow + 1), 300);
            return () => clearTimeout(timer)
        }
    }, [abs, toShow]);


    if (value === 0) return null

    const component = value > 0 ? <Add color={"success"}/> : <Remove color={"error"}/> ;
    let i = 0;
    return <>
        <Box display={"flex"} alignItems={"center"}>
        <Typography variant={"h6"}>
        {label}:
    </Typography>
            <Box m={0.5}/>
        {Array.from({length: toShow}, () => <Box key={i++}>{component}</Box>)}
        </Box>

    </>;
};

export default DeltaStat