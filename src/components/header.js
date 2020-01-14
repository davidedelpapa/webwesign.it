import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Linkpill from "./linkpill"
import Brand from "./brand"
export default () => (
  <header
    css={css`
      margin-bottom: ${rhythm(0.4)};
    `}
  >
    <Brand />
    <ul
      css={css`
        list-style: none;
        float: right;
      `}
    >
      <Linkpill to="/">Home</Linkpill>
      <Linkpill to="/about/">Chi sono?</Linkpill>
    </ul>
  </header>
)
