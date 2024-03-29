import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import logo from "../../assets/logo.svg";
import yariga from "../../assets/index.svg";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="Yariga" width="28px" />
                ) : (
                    <img src={yariga} alt="Refine" width="140px" />
                )}
            </Link>
        </Button>
    );
};