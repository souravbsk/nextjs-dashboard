"use client"

import ToggleProvider from "./ToggleProvider";

const { default: AuthProviders } = require("./AuthProviders")

const Provider = ({children}) => {
 return (
    <AuthProviders><ToggleProvider>{children}</ToggleProvider></AuthProviders>
 )
}

export default Provider;