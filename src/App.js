import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import {Box, Button, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Events from "./model/Events";
import Header from "./component/Header";

const App = () => {
    const {
        notorietyState: [, setNoto],
        popularityState: [, setPop],
        moneyState: [, setMoney],
        privateLifeState: [, setLife],
    } = useContext(StatsContext);
    const [index, setIndex] = useState(0)
    const end = index >= Events.length;


    return (
        <>
            <Header end={end}/>
            <Box sx={{p: 1, width: 1.0, display: "flex", justifyContent: "center"}}>
                {!end && <EventComponent event={Events[index]} next={() => setIndex(index + 1)}/>}
                {end && <>
                    <Box
                        sx={{width: 1.0, display: "flex", alignItems: "center", flexDirection: "column", gap: 4, p: 4}}>
                        <Typography variant={"h3"}>Nochmal?</Typography>
                        <Typography><Button variant={"outlined"} onClick={() => {
                            setIndex(0)
                            setNoto(0)
                            setPop(0)
                            setMoney(0)
                            setLife(0)
                        }}>Neu beginnen.</Button></Typography>
                    </Box>
                </>}
            </Box>
        </>
    );
};

export default App;
