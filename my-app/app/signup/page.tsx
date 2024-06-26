import Image from "next/image";
import logo from "../../public/svgs/logo.svg";
import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import asterixSvg from "../../public/svgs/asterix.svg";
import googleLogo from "../../public/svgs/googleLogo.svg";
import "./signup.css";

export const metadata: Metadata = {
    title: "Sign Up | ThumbAI",
    description: "Sign up for a new account",
}

const SignUp = () => {

    return (
        <main id="signup" className="ml-5">    
            <div id="signup-container" className="flex">
            <div id="logo-name" className="flex sm:space-x-1 items-center absolute mt-5">
                <Image 
                    alt="logo"
                    src={logo}
                />
                <p className="font-semibold text-xl">ThumbAI</p>
                </div>
                {/* left side */}
                <div id="signup-left" className="mt-[120px] sm:mt-[180px] sm:ml-[170px] sm:w-1/2">
                    <h2 className="text-3xl">Start for free</h2>
                    <p className="pt-1 text-gray-500">Continue with email or Google below</p>
                    {/* login form */}
                    <form className="pt-3">
                        <div id="below" className="flex flex-col">
                            <div id="name-input" className="">
                                <div id="label-name" className="flex flex-row items-center">
                                    <p>Name</p><p className="text-red-500">*</p>
                                </div>
                                <Input className="w-[360px] sm:w-[380px] h-[40px]" placeholder="Your name" />
                            </div>
                            <div id="email-input" className="mt-2">
                                <div id="label-name" className="flex flex-row items-center">
                                    <p>Email</p><p className="text-red-500">*</p>
                                </div>
                                <Input className="w-[360px] sm:w-[380px] h-[40px]" placeholder="user@email.com" />
                            </div>
                            <div id="password-input" className="mt-2">
                                <div id="label-name" className="flex flex-row items-center">
                                    <p>Password</p><p className="text-red-500">*</p>
                                </div>
                                <Input className="w-[360px] sm:w-[380px] h-[40px]" placeholder="Password" />
                            </div>
                            
                            <Button className="w-[360px] sm:w-[380px] mt-5">Sign Up with Email</Button>
                            <div className="flex mt-2 items-center">
                                <p className="text-sm text-gray-600">Already have an account?</p>
                                <p className="font-bold ml-1 text-sm cursor-pointer">Login</p>
                            </div>                        
                            {/* or continue with */}
                            <div id="continue-with" className="flex items-center mt-5">
                                <div className="w-[360px] sm:w-[380px] relative">
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
                        <div id="google-button" className="flex items-center pt-5">
                            <Button type="button" variant="outline" className="w-[360px] sm:w-[380px] space-x-1">
                                <div className="flex items-center justify-center">
                                    <Image 
                                        alt="google-logo"
                                        src={googleLogo}
                                    />
                                    <p className="ml-1 font-semibold">Google</p>
                                </div>
                            </Button>
                        </div>
                        {/* tos agreement */}
                        <div id="tos-agree" className="w-[360px] pt-2">
                            <p className="text-sm text-center">By clicking continue, you agree to our 
                                <span className="underline ml-1 cursor-pointer">Terms of Service</span> and <span className="underline ml-1 cursor-pointer">Privacy Policy</span>.</p>
                        </div>
                        </div>
                    </form>
                </div>
                {/* right side */}
                <div id="right-side" className="w-1/2 h-screen">
                    <div id="login-button" className="ml-[80%] mt-[10px]">
                        <Button>Login</Button>
                    </div>
                    <div id="quote" className="mt-[650px] justify-center flex flex-col items-center">
                        <p className="text-white font-semibold text-xl">“Best AI thumbnail tool I have ever used”</p>
                        <p className="text-white">Sofia Davis - Content Creator</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default SignUp;