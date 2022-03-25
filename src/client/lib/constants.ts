const postfix = "__UUID_SHORT__";

export const COOKIES_NAMES = {
    theme: `theme_${postfix}`,
};

export const COOKIES_ENDLESS_OPTIONS = {
    expires: (() => {
        const tenYears = new Date();
        tenYears.setFullYear(tenYears.getFullYear() + 1);
        return tenYears;
    })(),
    path: "/",
};