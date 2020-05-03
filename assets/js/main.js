$(function() {
    let darkModeEnabled = false;
    let htmlClasses = [".landing-body", ".landing-icon-box", ".landing-icon-box-icons-a", ".background-overlay"];
    let logoClass = ".landing-logo-img";

    let updateDarkMode = function() {
        if (darkModeEnabled) {
            htmlClasses.forEach(function(htmlClass) {
                $(htmlClass).addClass("dark");
            });

            $(logoClass).attr("src", "assets/images/Logo : Light Mode.svg");
        } else {
            console.log("Disabled dark mode. Toggling theme...");

            htmlClasses.forEach(function(htmlClass) {
                $(htmlClass).removeClass("dark");
            });

            $(logoClass).attr("src", "assets/images/Logo : Dark Mode.svg");
        }
    }

    $(".dark-mode").each(function() {
        let isDarkMode = window.getComputedStyle(this, ':after').content != "none";
        if (isDarkMode) {
            darkModeEnabled = true;
            updateDarkMode();
        }
    });
});