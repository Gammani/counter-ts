import React from "react";

type PropsType = {
    totalItems: number
}

const NavBar: React.FC<PropsType> = ({totalItems}) => {
    return (
        <ul className={"nav"}>
            <li className={"nav-item"}>
                <a className={"nav-link active"} aria-current="page" href="#">Active</a>
            </li>
            <li className={"nav-item"}>
                <a className={"nav-link"} href="#">Link</a>
            </li>
            <li className={"nav-item"}>
                <a className={"nav-link"} href="#">Link</a>
            </li>
            <li className={"nav-item"}>
                <a
                    className={"nav-link disabled position-relative"}
                    href={"/"}
                    tabIndex={-1}
                    aria-disabled={"true"}
                >
                    <span className={"badge bg-primary"}>
                        <i className="bi bi-cart"></i>
                    </span>
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar;
