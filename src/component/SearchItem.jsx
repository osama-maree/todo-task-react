import { Box, Button, InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
const SearchItem = ({ search, setSearch, hide, setHide, Tasks }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px",
        gap: "5px",
      }}
    >
      <Button
        onClick={() => setHide((h) => !h)}
        disabled={Tasks?.length === 0}
        sx={{ padding: ".9rem 1.5rem" }}
        variant="contained"
        color={`${hide ? "warning" : "success"}`}
      >
        {hide ? "Hide" : "Display"}
      </Button>
      <TextField
        label="Enter Your Task"
        fullWidth
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // addTask();
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  cursor: "pointer",
                }}
                // onClick={() => addTask()}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchItem;
