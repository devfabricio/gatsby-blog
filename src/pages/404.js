import * as React from "react"

import Index from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Index>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Index>
)

export default NotFoundPage
