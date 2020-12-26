import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"


const overrides = {
  // styles,
  // borders,
  // components: {
  //   Button,
  // },
}

const customTheme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `BarlowCondensed,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  }
}

// const customTheme = extendTheme(overrides)

export default customTheme