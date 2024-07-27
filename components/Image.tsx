import { StaticImageData } from "next/image"
import React from "react"

const Image = ({src, alt, height, width}: { src: StaticImageData, alt: string, height?: number, width?: number }): JSX.Element => {
    return <img src={src.src} alt={alt} style={{
        position: "relative",
        height: height??"100%",
        width: width??"100%",
        inset: "0px",
        color: "transparent"
    }}/>
}

export default Image