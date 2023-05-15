import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SourceSelect() {
  const [source, setSource] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="adv-search-5"></InputLabel>
        <Select
          labelId="adv-search-5"
          id="select"
          value={source}
          label="adv-search-5"
          onChange={handleChange}
          style={{ color: "white" }}
        >
          <MenuItem value={10}>Thomas01</MenuItem>
          <MenuItem value={20}>Curr04</MenuItem>
          <MenuItem value={30}>Bunce06</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
