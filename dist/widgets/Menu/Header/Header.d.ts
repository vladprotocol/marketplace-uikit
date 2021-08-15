import React from 'react';
import { Login } from "../../WalletModal/types";
import '../../../style/css/Header.css';
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    profile: any;
    isHome?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
