import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
}

export default function Toastify() {
    function notify() {
        toast.dark("Hey 👋, see how easy!");
    }

    return (
        <>
            <div className="App">
                <div className="btn-group">
                    <button className="btn" style={{display:"none"}} onClick={notify} id="animate.css">
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
