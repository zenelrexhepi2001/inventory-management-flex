import { render } from "@testing-library/react";
import { CustomInput, CustomSelect } from "../common";
import { CloseIcon } from "../../assets/svg";
import { categoryData } from "../../__mocks__";
import { Box, Chip, Stack, Typography } from "@mui/material";

describe("Select shoud be pass successfully test!", () => {
  it("Select with renderValue and multiple", () => {
    render(
      <CustomSelect
        value={[]}
        onChange={() => {}}
        data={categoryData}
        inputLabel=""
        sx={{ width: "564px" }}
        multiple={true}
        placeholder="Select"
        backgroundColor={["#fff", "#000", "#ddd"]}
        backgroundColorHover={["#67AA3C", "#EFD652", "#9640BE"]}
        renderValue={(selected: string[]) => {
          return (
            <>
              {selected.length === 0 && (
                <Typography variant="subtitle2" sx={{ color: "#E0E0E1" }}>
                  Select
                </Typography>
              )}
              <Stack direction="row" spacing={1}>
                {selected?.map((select) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    key={"select-category-" + select}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                        paddingLeft: 0,
                      }}
                    />
                    <Chip
                      key={select}
                      label={select}
                      sx={{ backgroundColor: "transparent" }}
                      onDelete={() => {}}
                      deleteIcon={
                        <Box
                          sx={{
                            backgroundColor: "#FE4C4A",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "2px",
                          }}
                          onMouseDown={(event) => event.stopPropagation()}
                        >
                          <CloseIcon color="#fff" width={10} height={10} />
                        </Box>
                      }
                    />
                  </Stack>
                ))}
              </Stack>
            </>
          );
        }}
      />
    );
  });

  it("Select without renderValue", () => {
    render(
      <CustomSelect
        value={[""]}
        onChange={() => {}}
        data={categoryData}
        inputLabel=""
        sx={{ width: "564px" }}
        multiple={true}
        placeholder="Select"
        backgroundColor={["#fff", "#000", "#ddd"]}
        backgroundColorHover={["#67AA3C", "#EFD652", "#9640BE"]}
      />
    );
  });

  it("Select with renderValue and without multiple", () => {
    render(
      <CustomSelect
        value={[]}
        onChange={() => {}}
        data={categoryData}
        inputLabel=""
        sx={{ width: "564px" }}
        multiple={false}
        placeholder="Select"
        backgroundColor={["#fff", "#000", "#ddd"]}
        backgroundColorHover={["#67AA3C", "#EFD652", "#9640BE"]}
        renderValue={(selected: string[]) => {
          return (
            <>
              {selected.length === 0 && (
                <Typography variant="subtitle2" sx={{ color: "#E0E0E1" }}>
                  Select
                </Typography>
              )}
              <Stack direction="row" spacing={1}>
                {selected?.map((select) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    key={"select-category-" + select}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                        paddingLeft: 0,
                      }}
                    />
                    <Chip
                      key={select}
                      label={select}
                      sx={{ backgroundColor: "transparent" }}
                      onDelete={() => {}}
                      deleteIcon={
                        <Box
                          sx={{
                            backgroundColor: "#FE4C4A",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "2px",
                          }}
                          onMouseDown={(event) => event.stopPropagation()}
                        >
                          <CloseIcon color="#fff" width={10} height={10} />
                        </Box>
                      }
                    />
                  </Stack>
                ))}
              </Stack>
            </>
          );
        }}
      />
    );
  });
});
