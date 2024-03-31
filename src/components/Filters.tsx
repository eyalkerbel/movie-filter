import React from 'react';
import { TextField, Grid, Autocomplete, Checkbox, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { Genre } from '../types';
import { SelectChangeEvent } from '@mui/material/Select';
import {useVideoContext} from "./context/Video";


const Filters: React.FC = () => {
  const { filters, setFilters, genres, years } = useVideoContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: event.target.value });
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setFilters({ ...filters, selectedYear: event.target.value as string });
  };

  const handleGenresChange = (event: React.ChangeEvent<{}>, value: Genre[]) => {
    setFilters({ ...filters, selectedGenres: value });
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          label="Search Video"
          variant="outlined"
          value={filters.searchQuery}
          onChange={handleSearchChange}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Year</InputLabel>
          <Select
            value={filters.selectedYear}
            onChange={handleYearChange}
            input={<OutlinedInput label="Year" />}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year.toString()}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <Autocomplete
          multiple
          options={genres}
          getOptionLabel={(option) => option.name}
          value={filters.selectedGenres}
          onChange={handleGenresChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Genres"
              placeholder="Select"
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
