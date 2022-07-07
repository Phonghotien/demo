export default function AosModule() {
    /** ANIMATION ON SCROLL */
    AOS.init({
        // startEvent: 'DOMContentLoaded',
        offset: 0,
        duration: 1200,
        delay: "200",
        easing: "ease",
        once: true,
        mirror: true
    });
    /** ANIMATION ON SCROLL - END */
}