import {Typography} from "@mui/material";

const Stat = ({label, value}) => <Typography variant="h6">
    {label}: {value}
</Typography>;

export default Stat