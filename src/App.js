import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
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
    const [tab, setTab] = useState(0)
    const [select, setSelect] = useState(false)

    return (
        <>
            <Header end={end}/>
            <Box sx={{
                p: 1,
                width: 1.0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: 500,
                margin: "0 auto"
            }}>


                {!select &&
                    <>
                        <Box width={1.0} marginBottom={1}>
                            <Tabs variant="fullWidth" value={tab} onChange={(e, v) => setTab(v)}>
                                <Tab label="Sam Salamanca"/>
                                <Tab label="Ann Sunshine"/>
                                <Tab label="Melody Mysterious"/>
                                <Tab label="Flynn Förster"/>
                            </Tabs>
                        </Box>
                        <Box>
                            {tab === 0 && <>
                                <Typography> Du hast mal bei einer TV-Casting-Show mitgemacht und wurdest dadurch
                                    bekannt. Jetzt kennen dich nicht mehr ganz so viele Leute. Das willst du ändern und
                                    planst einen Neustart! Ruhm und Geld verdienen stehen für dich an oberster Stelle!
                                    Hauptsache die Leute kennen dein Gesicht und deinen Namen. Hierfür versuchst du dich
                                    möglichst attraktiv und sympathisch zu zeigen und einen gewissen Status zu
                                    vermitteln.</Typography>
                            </>}
                            {tab === 1 && <>
                                <Typography>Du bist ausgebildete Musical-Sängerin und
                                möchtest jetzt auch auf Social-Media-Angeboten bekannt werden. Dir ist besonders
                                wichtig, dass du bei deinen Fans glaubwürdig
                                und vertrauenswürdig rüberkommst. Du
                                möchtest unbedingt, dass deine Fans dich
                                mögen. Dafür riskierst du auch, dass du
                                weniger Geld verdienst oder auch mal private
                                Informationen von dir preisgeben musst.</Typography>
                            </>}
                            {tab === 2 && <>
                                <Typography>Du bist vor allem auf Social-Media-Angeboten
                                    aktiv und möchtest dort auf jeden Fall noch
                                    bekannter werden. Du machst am liebsten
                                    kreative Videos und mystische Fotos und
                                    versuchst damit ein geheimnisvolles Image zu
                                    vermitteln. Außerdem hast du bemerkt, dass
                                    man damit auch Geld verdienen kann. Davon
                                    darf es gerne noch mehr werden!</Typography>
                            </>}
                            {tab === 3 && <>
                            <Typography>Du bist Handballer und wurdest in die U21
                                Nationalmannschaft berufen. Seit kurzem
                                pflegst du auch einen Social-Media-Kanal.
                                Du bist bodenständig und ein natürlicher
                                Typ, Familie und Privatleben sind für dich
                                sehr wichtig. Trotzdem möchtest du mehr in
                                Kontakt mit deinen Fans treten. Außerdem
                                bist du an Kooperationen mit bestimmten
                                Marken interessiert und möchtest deine
                                Bekanntheit für einen guten Zweck einsetzen.</Typography>
                            </>}
                            <Box p={1} display={"flex"} justifyContent={"center"}>
                                <Button variant={"contained"} onClick={() => setSelect(true)}>Auswählen</Button>
                            </Box>
                                <img src={`./${tab + 1}.png`} alt="" style={{width: "100%"}}/>

                        </Box>
                    </>
                }

                {select &&
                    <>
                        {!end && <EventComponent event={Events[index]} next={() => setIndex(index + 1)}/>}
                        {end && <>
                            <Box
                                sx={{
                                    width: 1.0,
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: 4,
                                    p: 4
                                }}>
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
                    </>

                }


            </Box>
        </>
    );
};

export default App;
