export default function PopupModule() {
    $(document).ready(function() {
        $(".introl-play").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
}