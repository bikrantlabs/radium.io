import { SVGProps } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import LogoIcon from "./logo-icon.svg"
// import { LogoIcon } from "./logo-icon"
import { LogoText } from "./logo-text"

interface LogoProps {
  logoIconProps?: SVGProps<SVGSVGElement>
  logoTextProps?: SVGProps<SVGSVGElement>
  wrapperClassName?: string
  textOnly?: boolean
  iconOnly?: boolean
}
export const Logo = ({
  textOnly,
  iconOnly,
  logoIconProps,
  logoTextProps,
  wrapperClassName,
}: LogoProps) => {
  if (textOnly) return <LogoText {...logoTextProps} />
  if (iconOnly) return <LogoIcon {...logoIconProps} />
  return (
    <div className={cn(wrapperClassName, "flex")}>
      <Image src={LogoIcon} alt="logo" className="w-40" />
      {/* <LogoIcon {...logoIconProps} style={{ height: 36, width: 50 }} /> */}
      <LogoText {...logoTextProps} />
    </div>
  )
}
