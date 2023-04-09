import { ReactElement } from "react";

export default function RSBar(props: { logo: ReactElement, text: string, link: string }) {
    return (
        <a className="rs-bar" href={props.link}>
            {props.logo}
            {props.text}
        </a>
    )
}