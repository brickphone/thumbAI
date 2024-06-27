import Image from "next/image";
import logo from "../../public/svgs/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import googleLogo from "../../public/svgs/googleLogo.svg";

export const metadata: Metadata = {
    title: "Log In | ThumbAI",
    description: "Log In to your account",
}

const Login = () => {
    return (
        <main id="login" className="ml-5">
            <div id="login-container" className="flex relative">
                <div id="logo-name" className="flex sm:space-x-1 items-center absolute top-5 left-5">
                    <Image 
                        alt="logo"
                        src={logo}
                    />
                    <p className="font-semibold text-xl">ThumbAI</p>
                </div>
                <div id="login-inputs" className="flex flex-col mt-[190px] sm:mt-[190px] w-full items-center">
                    <div id="top-text" className="flex flex-col items-start text-start w-[360px] sm:w-[380px]">
                        <h2 className="text-3xl">Log in to ThumbAI</h2>
                        <p className="pt-1 text-gray-500">Continue with email or Google below</p>
                    </div>
                    <form>
                        <div id="email-input" className="mt-2">
                            <div id="label-name" className="flex flex-row items-center">
                                <p className="text-sm">Email</p><p className="text-red-500">*</p>
                            </div>
                            <Input className="w-[360px] sm:w-[380px] h-[40px]" placeholder="user@email.com" />
                        </div>
                        <div id="password-input" className="mt-2">
                            <div id="label-name" className="flex flex-row items-center">
                                <p className="text-sm">Password</p><p className="text-red-500">*</p>
                            </div>
                            <Input className="w-[360px] sm:w-[380px] h-[40px]" placeholder="Password" />
                        </div>
                        <p className="text-sm font-semibold cursor-pointer pt-1 text-start w-[360px] sm:w-[380px]">Forgot password?</p>
                        <Button className="w-[360px] sm:w-[380px] mt-2">Sign In</Button>
                    </form>
                    {/* or continue with */}
                    <div id="continue-with" className="flex items-center mt-4 w-[360px] sm:w-[380px]">
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* login with google */}
                    <div id="google-button" className="flex items-center mt-2 w-[360px] sm:w-[380px]">
                        <Button type="button" variant="outline" className="w-full space-x-1">
                            <div className="flex items-center justify-center">
                                <Image 
                                    alt="google-logo"
                                    src={googleLogo}
                                />
                                <p className="ml-1 font-semibold">Google</p>
                            </div>
                        </Button>
                    </div>
                    <p className="mt-2 text-sm w-[360px] sm:w-[380px] text-start">New to ThumbAI? <span className="font-semibold">Sign Up</span></p>
                </div>
            </div>
        </main>
    )
};

export default Login;