import { Button } from "./ui/button";

const SignupBox = () => {
    return (
        <div id="signupbox-container" className="w-[320px] sm:w-[1000px] h-[340px] bg-red-600 rounded-3xl flex flex-col items-center space-y-2">
            <p className="text-4xl text-white font-medium text-center mt-12 sm:mt-24">Ready To Make Thumbnails?</p>
            <p className="w-[300px] text-center font-medium text-white sm:w-[500px]">Ready to up your thumbnail game - start making beautiful AI generated thumbnails now.</p>
            <Button className="w-[227px]">Start For Free</Button>
            <p className="text-xs text-white">No credit card needed.</p>
        </div>
    )
};

export default SignupBox;