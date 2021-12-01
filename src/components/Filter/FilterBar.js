import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";

const FilterBar = () => {
  const { getProducts,resetCurrentPage } = useContext(mainContext);
  const history = useHistory();
  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterProduct(key, value) {
    resetCurrentPage()
    object.set(key, value);
    history.push(`${window.location.pathname}?${object.toString()}`);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <FormControl component="fieldset" className="radio">
            <FormLabel component="legend">Catalog Flowers</FormLabel>
            <RadioGroup
              style={{ display: "flex", flexDirection: "row" }}
              aria-label="brand"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterProduct("brand", e.target.value)}
            >
              <FormControlLabel
                value="rose"
                control={<Radio />}
                label="rose"
              />
              <FormControlLabel
                value="pink"
                control={<Radio />}
                label="pink"
              />
              <FormControlLabel
                value="tulips"
                control={<Radio />}
                label="tulips"
              />
              <FormControlLabel
                value="azalea"
                control={<Radio />}
                label="azalea"
              />
              <FormControlLabel
                value="piones"
                control={<Radio />}
                label="piones"
              />
              <FormControlLabel
                value="sunflower"
                control={<Radio />}
                label="sunflower"
              />
              <FormControlLabel
                value="romashka"
                control={<Radio />}
                label="romashka"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
