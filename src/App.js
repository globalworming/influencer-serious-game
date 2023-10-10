import {useContext, useState} from "react"
import './App.css';
import EventComponent from "./component/Event";
import EventModel from "./model/EventModel";
import {AppBar, Box, Button, IconButton, Menu as MenuIcon, Snackbar, Toolbar, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Consequences from "./model/Consequences";


const App = () => {
    const {fameState: [fame, setFame], followersState: [followers, setFollowers]} = useContext(StatsContext);


    const initialEvent = new EventModel("wake up", "you alarm is rining.", " start a new day?", "another 5 minutes", "yeah, the early bird catches the worm", new Consequences("your followers are waiting...", -2, -2), new Consequences("yalla yalla!", +2, +2), () => {
        setOpen(true);
        setEvent(secondEvent)
    });

    const secondEvent = new EventModel("first twiddle", "Your followers probably want to know you are awake", "What do you post?", "photo #nomakeup", "think of a weird dream", new Consequences("looks weird", -7, -7), new Consequences("good one", +3, +3), () => {
        setOpen(true);
        setEvent(initialEvent)
    });

    const [open, setOpen] = useState(false);
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

          <Box p={2} sx={{display: "flex", justifyContent: "center"}}>
              <EventComponent event={event}/>
              <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={open}
                  autoHideDuration={2000}
                  onClose={() => setOpen(false)}
                  message="done"
                  action={null}
              />
          </Box>
      </>
  );
};

export default App;
