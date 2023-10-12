import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Events from "./model/Events";
import Stat from "./component/Stat";

const App = () => {
    const {
        notorietyState: [noto, setNoto],
        popularityState: [pop, setPop],
        moneyState: [money, setMoney],
        privateLifeState: [life, setLife],
    } = useContext(StatsContext);
    const [index, setIndex] = useState(0)
    const end = index >= Events.length;

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "center", gap: 8}}>
                    <Stat label={"Bekanntheit"} value={noto}/>
                    <Stat label={"Beliebtheit"} value={pop}/>
                    <Stat label={"Geld"} value={money}/>
                    <Stat label={"Privatleben"} value={life}/>
                </Toolbar>
            </AppBar>

            <Box sx={{p: 1, width: 1.0, display: "flex", justifyContent: "center"}}>
                {!end && <EventComponent event={Events[index]} next={() => setIndex(index + 1)}/>}
                {end && <>
                    <Box
                        sx={{width: 1.0, display: "flex", alignItems: "center", flexDirection: "column", gap: 4, p: 4}}>
                        <Typography variant={"h3"}>you did it!</Typography>
                        <Typography><Button variant={"outlined"} onClick={() => {
                            setIndex(0)
                            setNoto(0)
                            setPop(0)
                            setMoney(0)
                            setLife(0)
                        }}>again!</Button></Typography>
                    </Box>
                </>}
            </Box>
        </>
    );
};

export default App;
