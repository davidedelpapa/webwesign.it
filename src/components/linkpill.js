import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
export default props => (
  <li
    css={css`
      display: inline-block;
      margin-right: ${rhythm(0.5)};
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)
