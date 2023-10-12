import {Box, Button, Card, Typography} from "@mui/material";
import {useContext, useState} from "react";
import ReactCardFlip from "react-card-flip";
import {StatsContext} from "../context/StatsContext";
import DeltaStat from "./DeltaStat";

function Side({children}) {
    return <Card variant={"outlined"} sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 4,
    }}>
        {children}
    </Card>;
}

/**
 * @param {EventModel} event
 */
const Event = ({event, next}) => {
    let context = useContext(StatsContext);
    const [consequence, setConsequence] = useState()


    const {title, description, question, eitherDescription, orDescription} = event;
    const [flip, setFLip] = useState(false);
    const flipDirection = "horizontal"
    let handleEither = () => {
        let eitherConsequences = event.eitherConsequences;
        setConsequence(eitherConsequences)
        setFLip(true);
        eitherConsequences.apply(context)
    };
    let handleOr = () => {
        let orConsequences = event.orConsequences;
        setConsequence(orConsequences)
        setFLip(true);
        orConsequences.apply(context)

    };
    return <>
        <Box sx={{width: 1.0, maxWidth: 500}}>
            <ReactCardFlip isFlipped={flip} flipDirection={flipDirection}>
                <Side>
                        <Typography variant={"h4"} >{title}</Typography>
                        <Typography>{description}</Typography>
                        <Typography>{question}</Typography>
                        <Button variant="outlined" onClick={handleEither}>{eitherDescription}</Button>
                        <Button variant="outlined" onClick={handleOr}>{orDescription}</Button>
                </Side>
                <Side>

                    {consequence && <>

                        <Typography>{consequence.description}</Typography>
                        <DeltaStat label={"Bekanntheit"} value={consequence.deltaNotoriety}/>
                        <DeltaStat label={"Beliebtheit"} value={consequence.deltaPopularity}/>
                        <DeltaStat label={"Geld"} value={consequence.deltaMoney}/>
                        <DeltaStat label={"Privatleben"} value={consequence.deltaPrivateLife}/>
                    </>}
                    <Button onClick={() => {
                        setFLip(false);
                        return next();
                    }}>weiter</Button>
                </Side>
            </ReactCardFlip>
        </Box>
    </>
}

export default Event;