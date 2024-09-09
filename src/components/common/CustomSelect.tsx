import React, { FC, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { CustomSelectProps } from "../../interfaces";
import styled from "@emotion/styled";
import { CheckIcon, DownIcon, UpIcon } from "../../assets/svg";
import { Box, Stack } from "@mui/material";

const CustomSelectStyles = styled(Select)({
  backgroundColor: "#F5F5F7",
  height: "32px",
  border: "1px solid #F5F5F7",
  color: "#323338",
  fontSize: "14px",
});

export const CircleSelect = styled(Box)({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const [isCheckShown, setIsCheckShown] = useState<boolean | unknown>(false);
  const [isDownIconToggle, setIsDownIconToggle] = useState<boolean>(false);
  const {
    value,
    onChange,
    data,
    sx,
    multiple,
    renderValue,
    placeholder,
    backgroundColor,
    backgroundColorHover,
  } = props;

  const ITEM_HEIGHT: number = 48;
  const ITEM_PADDING_TOP: number = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        backgroundColor: "#fff",
        border: "1px solid #EFEFEF",
      },
    },
  };

  const handleGetHoverBackgroundColor = (select: number) => {
    if (select === 1) {
      return backgroundColorHover?.[0];
    } else if (select === 2) {
      return backgroundColorHover?.[1];
    } else if (select === 3) {
      return backgroundColorHover?.[2];
    } else {
      return select;
    }
  };

  const handleSelect = (id: number) => {
    switch (id) {
      case 1:
        return setIsCheckShown(id);
      case 2:
        return setIsCheckShown(id);
      case 3:
        return setIsCheckShown(id);
      default:
        throw new Error("Error id!");
    }
  };

  const handleToggleDownIcon = () => {
    setIsDownIconToggle(!isDownIconToggle);
  };

  return (
    <FormControl sx={{ width: "100%" }} onMouseDown={handleToggleDownIcon}>
      <CustomSelectStyles
        value={value}
        onChange={onChange as any}
        displayEmpty
        input={
          <OutlinedInput
            label=""
            placeholder={placeholder}
            sx={{ color: "#000" }}
          />
        }
        renderValue={renderValue as unknown | any}
        variant="standard"
        multiple={multiple}
        sx={sx}
        open={isDownIconToggle}
        MenuProps={MenuProps}
        IconComponent={() => {
          return (
            <Stack sx={{ paddingRight: "8px" }}>
              {isDownIconToggle ? <UpIcon /> : <DownIcon />}
            </Stack>
          );
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {data.map((result: { id: number; title: string }) => (
          <MenuItem
            key={result.id}
            value={result.title}
            sx={{
              borderBottom: data.length > 0 ? "1px solid #EFEFEF" : null,
              "&:hover": {
                backgroundColor: `${handleGetHoverBackgroundColor(result.id)}`,
                color: "#fff",
              },
              "&& .Mui-selected": { backgroundColor: "red" },
            }}
            classes={{
              selected: `${
                (result.id == 1 && backgroundColor?.[0]) ||
                (result.id == 2 && backgroundColor?.[1]) ||
                (result.id == 3 && backgroundColor?.[2])
              }`,
            }}
            onClick={() => handleSelect(result.id)}
            defaultChecked={true}
          >
            <ListItemText primary={result.title} />
            {isCheckShown == result.id && <CheckIcon />}
          </MenuItem>
        ))}
      </CustomSelectStyles>
    </FormControl>
  );
};
