import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import EventModel from "./model/EventModel";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Consequences from "./model/Consequences";


const App = () => {
    const {fameState: [fame, setFame], followersState: [followers, setFollowers]} = useContext(StatsContext);
    const [end, setEnd] = useState(false)

    const initialEvent = new EventModel("wake up", "you alarm is rining.", " start a new day?", "another 5 minutes", "yeah, the early bird catches the worm", new Consequences("your followers are waiting...", -2, -2), new Consequences("yalla yalla!", +2, +2), () => {
        setEvent(secondEvent)
    });

    const secondEvent = new EventModel("first twiddle", "Your followers probably want to know you are awake", "What do you post?", "photo #nomakeup", "think of a weird dream", new Consequences("looks weird", -7, -7), new Consequences("good one", +3, +3), () => {
        setEnd(true)
    });

    const [event, setEvent] = useState(initialEvent);

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "center", gap: 8}}>
                    <Typography variant="h6">
                        Fame: {fame}
                    </Typography>
                    <Typography variant="h6">
                        Followers: {followers}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{p: 1, width: 1.0, display: "flex", justifyContent: "center"}}>
                {!end && <EventComponent event={event}/>}
                {end && <>
                    <Box sx={{width: 1.0, display: "flex", alignItems: "center", flexDirection: "column", gap: 4, p:4}}>
                        <Typography variant={"h3"}>you did it!</Typography>
                        <Typography><Button variant={"outlined"} onClick={() => {
                            setEvent(initialEvent)
                            setEnd(false)
                            setFollowers(10)
                            setFame(10)
                        }}>again!</Button></Typography>
                    </Box>
                </>}
            </Box>
        </>
    );
};

export default App;
