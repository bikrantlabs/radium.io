import Link from "next/link"

import { auth } from "@/lib/auth"

import { LoginButton } from "./auth/login-button"
import { LogoutButton } from "./auth/logout-button"
import { Icons } from "./icons"
import { Logo } from "./logos/logo"
import { Button } from "./ui/button"

export const Navbar = async () => {
  const session = await auth()
  return (
    <>
      <div className="sticky bg-background/90 z-10 backdrop-filter backdrop-blur-[6px] top-0 px-8 h-24 flex items-center justify-center w-full">
        <div className="flex-1 flex items-center justify-between">
          <Logo
          // wrapperClassName="w-20 h-20"
          // logoTextProps={{ className: "w-16 h-16" }}
          // logoIconProps={{ className: "w-16 h-16" }}
          />
          {session?.user ? (
            <div className="flex items-center gap-2">
              <Link href="/auth/settings">
                <Button
                  variant="ghost"
                  endIcon={
                    <Icons.settings className="h-5 w-5 mt-1 stroke-[1.5]" />
                  }
                >
                  Settings
                </Button>
              </Link>

              <LogoutButton />
            </div>
          ) : (
            <LoginButton>
              <Button>Sign in</Button>
            </LoginButton>
          )}
        </div>
      </div>
      <div className="h-24"></div>
    </>
  )
}
