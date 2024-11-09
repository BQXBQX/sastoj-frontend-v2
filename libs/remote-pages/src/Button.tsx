import '@mantine/core/styles.css';
import { Radio } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});
export const Button = () => {
  return (
    <>
      <MantineProvider theme={theme}>
        Button <Radio label="I cannot be unchecked" />
      </MantineProvider>
    </>
  );
};
