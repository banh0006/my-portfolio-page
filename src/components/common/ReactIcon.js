import React from 'react'
import { SiJavascript, SiJava, SiCsharp, SiSwift, SiKotlin, SiHtml5, 
    SiCss3, SiReact, SiRedux, SiBootstrap, SiMysql, SiMongodb, SiGit, SiFirebase,
    SiIntellijidea, SiPostman, SiXcode, SiVisualstudiocode, SiAndroidstudio } from 'react-icons/si'
import { FaNode } from 'react-icons/fa';

export default function ReactIcon( {iconName, iconSize, iconColor} ) {
    return (
        <>
            {iconName === 'SiJavascript' && <SiJavascript size={iconSize} color={iconColor} />}
            {iconName === 'SiJava' && <SiJava size={iconSize} color={iconColor} />}
            {iconName === 'SiCsharp' && <SiCsharp size={iconSize} color={iconColor} />}
            {iconName === 'SiSwift' && <SiSwift size={iconSize} color={iconColor} />}
            {iconName === 'SiKotlin' && <SiKotlin size={iconSize} color={iconColor} />}
            {iconName === 'SiHtml5' && <SiHtml5 size={iconSize} color={iconColor} />}
            {iconName === 'SiCss3' && <SiCss3 size={iconSize} color={iconColor} />}
            {iconName === 'SiReact' && <SiReact size={iconSize} color={iconColor} />}
            {iconName === 'SiRedux' && <SiRedux size={iconSize} color={iconColor} />}
            {iconName === 'SiBootstrap' && <SiBootstrap size={iconSize} color={iconColor} />}
            {iconName === 'SiMysql' && <SiMysql size={iconSize} color={iconColor} />}
            {iconName === 'SiMongodb' && <SiMongodb size={iconSize} color={iconColor} />}
            {iconName === 'SiGit' && <SiGit size={iconSize} color={iconColor} />}
            {iconName === 'SiFirebase' && <SiFirebase size={iconSize} color={iconColor} />}
            {iconName === 'SiIntellijidea' && <SiIntellijidea size={iconSize} color={iconColor} />}
            {iconName === 'SiPostman' && <SiPostman size={iconSize} color={iconColor} />}
            {iconName === 'SiXcode' && <SiXcode size={iconSize} color={iconColor} />}
            {iconName === 'SiVisualstudiocode' && <SiVisualstudiocode size={iconSize} color={iconColor} />}
            {iconName === 'SiAndroidstudio' && <SiAndroidstudio size={iconSize} color={iconColor} />}
            {iconName === 'FaNode' && <FaNode size={iconSize} color={iconColor} />}
        </>
    )
}
