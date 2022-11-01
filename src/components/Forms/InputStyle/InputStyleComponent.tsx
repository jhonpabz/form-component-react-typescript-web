import React, { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { InputStyleInterface } from "./InputStyleInterface";

const InputStyleComponent: React.FC<InputStyleInterface> = ({
  cssFramework,
  parentStateSetter,
  parentState,
}) => {
  const [inputStyle, setInputStyle] = useState<string>("MATERIAL UI");
  console.log(inputStyle, "inputStyle");

  useEffect(() => {
    parentStateSetter(inputStyle);
  }, [parentStateSetter, inputStyle]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <RadioGroup
        row
        aria-labelledby="segmented-controls-example"
        name="input style"
        value={inputStyle}
        onChange={(event: {
          target: { value: React.SetStateAction<string> };
        }) => setInputStyle(event.target.value)}
        sx={{
          minHeight: 30,
          padding: "4px",
          borderRadius: "md",
          bgcolor: "neutral.softBg",
          "--RadioGroup-gap": "4px",
          "--Radio-action-radius": "8px",
        }}
      >
        {cssFramework.map((item) => (
          <Radio
            key={item}
            color="neutral"
            value={item}
            disableIcon
            label={item}
            variant="plain"
            sx={{
              px: 2,
              alignItems: "center",
            }}
            componentsProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: "#e2e3e3",
                    boxShadow: "md",
                    "&:hover": {
                      bgcolor: "#e2e3e3",
                    },
                  }),
                },
              }),
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default InputStyleComponent;
