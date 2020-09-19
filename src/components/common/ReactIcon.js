import React from 'react'
import { SiJavascript, SiJava, SiCsharp, SiSwift, SiKotlin, SiHtml5, 
    SiCss3, SiReact, SiRedux, SiBootstrap, SiMysql, SiMongodb, SiGit, SiFirebase,
    SiIntellijidea, SiPostman, SiXcode, SiVisualstudiocode, SiAndroidstudio } from 'react-icons/si'
import { FaNode } from 'react-icons/fa';

export default function ReactIcon( {iconName, iconColor} ) {
    return (
        <>
            {iconName === 'SiJavascript' && ( <div className="icon"> <SiJavascript color={iconColor}/> </div> )}
            {iconName === 'SiJava' && ( <div className="icon"> <SiJava color={iconColor} /> </div> )}
            {iconName === 'SiCsharp' && ( <div className="icon"> <SiCsharp color={iconColor} /> </div> )}
            {iconName === 'SiSwift' && ( <div className="icon"> <SiSwift color={iconColor} /> </div> )}
            {iconName === 'SiKotlin' && ( <div className="icon"> <SiKotlin  color={iconColor} /> </div> )}
            {iconName === 'SiHtml5' && ( <div className="icon"> <SiHtml5  color={iconColor} /> </div> )}
            {iconName === 'SiCss3' && ( <div className="icon"> <SiCss3  color={iconColor} /> </div> )}
            {iconName === 'SiReact' && ( <div className="icon"> <SiReact  color={iconColor} /> </div> )}
            {iconName === 'SiRedux' && ( <div className="icon"> <SiRedux  color={iconColor} /> </div> )}
            {iconName === 'SiBootstrap' && ( <div className="icon"> <SiBootstrap  color={iconColor} /> </div> )}
            {iconName === 'SiMysql' && ( <div className="icon"> <SiMysql  color={iconColor} /> </div> )}
            {iconName === 'SiMongodb' && ( <div className="icon"> <SiMongodb  color={iconColor} /> </div> )}
            {iconName === 'SiGit' && ( <div className="icon"> <SiGit  color={iconColor} /> </div> )}
            {iconName === 'SiFirebase' && ( <div className="icon"> <SiFirebase  color={iconColor} /> </div> )}
            {iconName === 'SiIntellijidea' && ( <div className="icon"> <SiIntellijidea  color={iconColor} /> </div> )}
            {iconName === 'SiPostman' && ( <div className="icon"> <SiPostman  color={iconColor} /> </div> )}
            {iconName === 'SiXcode' && ( <div className="icon"> <SiXcode  color={iconColor} /> </div> )}
            {iconName === 'SiVisualstudiocode' && ( <div className="icon"> <SiVisualstudiocode  color={iconColor} /> </div> )}
            {iconName === 'SiAndroidstudio' && ( <div className="icon"> <SiAndroidstudio  color={iconColor} /> </div> )}
            {iconName === 'FaNode' && ( <div className="icon"> <FaNode  color={iconColor} /> </div> )}
        </>
    )
}
