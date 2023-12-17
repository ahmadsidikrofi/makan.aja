import { useEffect } from "react";

const WhatsupPop = () => {
    $(function () {
        $('#WAButton').floatingWhatsApp({
            phone: '1231231231',
            headerTitle: 'Chat with us on WhatsApp!',
            popupMessage: 'Hello, how can we help you?',
            showPopup: true,
            buttonImage: '<img src="/images/floatWA.png" />',
            position: "right"
        });
    });

    useEffect(() => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            // Load jQuery if not already loaded
            if (!window.jQuery) {
                const jqueryScript = document.createElement("script");
                jqueryScript.src =
                    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
                jqueryScript.async = true;
                jqueryScript.onload = loadScript;
                document.body.appendChild(jqueryScript);
            } else {
                // If jQuery is already loaded, directly load the WhatsApp script
                loadScript();
            }
        }
    }, []);
    return (
        <>
            <div id="WAButton" className={styles.whatsappButton}></div>
        </>
    );
}

export default WhatsupPop;