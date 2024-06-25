import Image from "next/image";
import logo from "../../public/svgs/logo.svg";
import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import asterixSvg from "../../public/svgs/asterix.svg";
import googleLogo from "../../public/svgs/googleLogo.svg";

export const metadata: Metadata = {
    title: "Sign Up | ThumbAI",
    description: "Sign up for a new account",
}

const SignUp = () => {

    return (
        <main id="signup-container" className="mt-5 ml-5">
            <div id="logo-name" className="flex space-x-1 items-center">
                <Image 
                    alt="logo"
                    src={logo}
                />
                <p className="font-semibold text-xl">ThumbAI</p>
            </div>
            <div id="signup-left" className="mt-[180px] ml-[18%]">
                <h2 className="text-3xl">Start for free</h2>
                <p className="pt-1 text-gray-500">Continue with email or Google below</p>
                
                {/* login form */}
                <form className="pt-3">
                    <div id="below" className="flex flex-col">
                        <div id="name-input" className="">
                            <div id="label-name" className="flex flex-row items-center">
                                <p>Name</p><Image alt="asterix-svg" src={asterixSvg} />
                            </div>
                            <Input className="w-[380px] h-[40px]" placeholder="Your name" />
                        </div>
                        <div id="email-input" className="mt-2">
                            <div id="label-name" className="flex flex-row items-center">
                                <p>Email</p><Image alt="asterix-svg" src={asterixSvg} />
                            </div>
                            <Input className="w-[380px] h-[40px]" placeholder="user@email.com" />
                        </div>
                        <div id="password-input" className="mt-2">
                            <div id="label-name" className="flex flex-row items-center">
                                <p>Password</p><Image alt="asterix-svg" src={asterixSvg} />
                            </div>
                            <Input className="w-[380px] h-[40px]" placeholder="Password" />
                        </div>
                        
                        <Button className="w-[380px] mt-5">Sign Up with Email</Button>
                        <div className="flex mt-2 items-center">
                            <p className="text-sm text-gray-600">Already have an account?</p>
                            <p className="font-bold ml-1 text-sm cursor-pointer">Login</p>
                        </div>                        
                        {/* or continue with */}
                        <div id="continue-with" className="flex items-center mt-5">
                            <div className="w-[380px] relative">
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
                        <Button type="button" variant="outline" className="w-[380px] space-x-1">
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
        </main>
    )
};

export default SignUp;