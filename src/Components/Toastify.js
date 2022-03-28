import "../Style/styles.css";
import {injectStyle} from "react-toastify/dist/inject-style";
import {ToastContainer, toast} from "react-toastify";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
}

export default function Toastify({children,title}) {
    function notify() {
        toast.dark(title,);
    }

    return (
        <>
            <div className="App" onClick={notify}>
                {children}
            </div>
            <ToastContainer/>
        </>
    );
}
