export class IconPackClass {
    public getSVGIcon(iconName: string): string {
        return icons[iconName]
    }
}


export const icons = {
    add: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="#434651" d="M7 13h7V6h1v7h7v1h-7v7h-1v-7H7v-1z"></path></svg>`,
    alert: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="#434651" d="M22.5 12a1 1 0 0 1 0 21 1 1 0 0 1 0-21m0 1a1 1 0 0 0 0 19 1 1 0 0 0 0-19m-7.15 16.85l.8.6-2.05 2.75-.8-.6zm13.48.57l.8-.6 2.07 2.78-.8.6zM22 22v-7h1v8h-6v-1zm9.93-2.95l-.58-.81a4 4 0 1 0-5.84-5.2l-.87-.49a5 5 0 1 1 7.3 6.5zm-11.57-6.5l-.87.48a4 4 0 1 0-5.9 5.17l-.6.8a5 5 0 1 1 7.36-6.46z"></path></svg>`,
    backward_arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#434651" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"></path></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="#434651" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 11c-.83 0-1.5.67-1.5 1.5v19a2.5 2.5 0 0 0 2.5 2.5H33.5c.59 0 1.06-.15 1.43-.4.37-.24.61-.57.77-.88a2.96 2.96 0 0 0 .3-1.18v-.04h-.5.5v-11c0-.83-.67-1.5-1.5-1.5H32v-6.5c0-.83-.67-1.5-1.5-1.5h-19zM32 20V31.55a1.97 1.97 0 0 0 .2.73c.1.19.23.36.42.5.2.12.47.22.88.22.41 0 .69-.1.88-.23.2-.13.33-.3.42-.5a1.96 1.96 0 0 0 .2-.76V20.5a.5.5 0 0 0-.5-.5H32zm-.7 12.72l.16.28H12.5a1.5 1.5 0 0 1-1.5-1.5v-19c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v19h.5-.5v.04a2.08 2.08 0 0 0 .04.35c.03.22.1.53.26.83zM15.5 15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM28 24H14v-1h14v1zm-6-8h6v-1h-6v1zm6 3h-6v-1h6v1zm-14 8h14v-1H14v1zm7 3h-7v-1h7v1z"></path></svg>`,
    candles_bar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="#434651"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"></path><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="#434651" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 7H17v6h-3v-3H9v6H5v6h17V7h-4.5zm.5 14h3V8h-3v13zm-1 0v-7h-3v7h3zm-4-7.5V21h-3V11h3v2.5zM9 21v-4H6v4h3z"></path></svg>`,
    forward_arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#434651" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"></path></svg>`,
    hamburger: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#434651" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"></path></svg>`,
    lamp: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="#434651" d="m27 31.5a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-3.74c-2.41-1.74-4-5.04-4-8.26a9.5 9.5 0 0 1 19 0c0 3.21-1.6 6.52-4 8.26v3.74zM18.5 33h6a1.5 1.5 0 0 0 1.5-1.5v-4.27l.22-.14c2.25-1.51 3.78-4.6 3.78-7.59a8.5 8.5 0 1 0-17 0c0 3 1.53 6.08 3.78 7.58l.22.15v4.27a1.5 1.5 0 0 0 1.5 1.5zm-2-5v-1h10v1zm0 3v-1h10v1zm2.5 2.5h1v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1h1v1a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1zm3-5.5h-1v-8h1zm-3-7v-1h5v1z"></path></svg>`,
    list: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="#434651" d="m29.5 11a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-14a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v14a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5M15 17v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1z"></path></svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#434651" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"></path></svg>`,
    news: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="#434651" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 11c-.83 0-1.5.67-1.5 1.5v19a2.5 2.5 0 0 0 2.5 2.5H33.5c.59 0 1.06-.15 1.43-.4.37-.24.61-.57.77-.88a2.96 2.96 0 0 0 .3-1.18v-.04h-.5.5v-11c0-.83-.67-1.5-1.5-1.5H32v-6.5c0-.83-.67-1.5-1.5-1.5h-19zM32 20V31.55a1.97 1.97 0 0 0 .2.73c.1.19.23.36.42.5.2.12.47.22.88.22.41 0 .69-.1.88-.23.2-.13.33-.3.42-.5a1.96 1.96 0 0 0 .2-.76V20.5a.5.5 0 0 0-.5-.5H32zm-.7 12.72l.16.28H12.5a1.5 1.5 0 0 1-1.5-1.5v-19c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v19h.5-.5v.04a2.08 2.08 0 0 0 .04.35c.03.22.1.53.26.83zM15.5 15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM28 24H14v-1h14v1zm-6-8h6v-1h-6v1zm6 3h-6v-1h6v1zm-14 8h14v-1H14v1zm7 3h-7v-1h7v1z"></path></svg>`,
    notify: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="#434651" d="M23.98 13.12c3.67 1.19 5.98 4.85 6.02 9.26v2.31c-.04 1.53.03 2.14.35 2.46l-.7.7c-.61-.6-.7-1.32-.66-3.18L29 24v-1.62c-.04-4.13-2.23-7.46-5.63-8.4a.5.5 0 0 1-.37-.48c0-1.04-.56-1.5-1.5-1.5s-1.5.46-1.5 1.5a.5.5 0 0 1-.37.48c-3.4.93-5.59 4.27-5.63 8.4V24l.01.67c.04 1.86-.05 2.58-.66 3.18l-.7-.7c.32-.32.4-.93.36-2.46L13 24v-1.62c.04-4.41 2.35-8.07 6.02-9.26.15-1.39 1.14-2.12 2.48-2.12s2.33.73 2.48 2.12zM13 28a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2m0-1a1 1 0 0 1 0 4H13a1 1 0 0 1 0-4m6 3.5a1 1 0 0 0 5 0h1a1 1 0 0 1-7 0"></path></svg>`,
    save_flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="#434651" focusable="false" preserveAspectRatio="none"><path d="M14 12l-4-6 4-6H0v12z"></path></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#434651" fill-rule="evenodd" d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"></path></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m18 18v-.5c0-1.2.6-2 1.5-2.7.8-.5 2-.8 3-.8s2.2.3 3 .8c.9.6 1.5 1.5 1.5 2.7a4 4 0 0 1-1.3 2.8l-2.3 2c-.3.3-.4.6-.4 1.2v.5h-1v-.5c0-.8.2-1.4.6-1.9l2.4-2c.6-.7 1-1.3 1-2.1a2 2 0 0 0-1-1.8c-.7-.5-1.6-.7-2.5-.7-1 0-1.8.2-2.5.7-.6.4-1 1-1 1.8v.5m3.5 8a1 1 0 0 0 0 5 1 1 0 0 0 0-5m0 1a1 1 0 0 1 0 3 1 1 0 0 1 0-3m0-17a1 1 0 0 0 0 25 1 1 0 0 0 0-25m0 1a1 1 0 0 1 0 23 1 1 0 0 1 0-23"></path></svg>`,
    setting: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path d="M3.00004 7.50008C3.00004 6.25729 3.50318 5.13298 4.31807 4.31809L3.61097 3.61098C2.6162 4.60574 2.00004 5.98143 2.00004 7.50008H3.00004ZM4.31807 4.31809C5.13296 3.50321 6.25727 3.00008 7.50004 3.00008V2.00008C5.98141 2.00008 4.60572 2.61623 3.61097 3.61098L4.31807 4.31809ZM4.31808 3.61098L2.55033 1.84323L1.84322 2.55033L3.61097 4.31809L4.31808 3.61098ZM7.50004 3.00008C8.74283 3.00008 9.86715 3.50321 10.682 4.31811L11.3891 3.611C10.3944 2.61624 9.01869 2.00008 7.50004 2.00008V3.00008ZM10.682 4.31811C11.4969 5.13299 12 6.2573 12 7.50008H13C13 5.98144 12.3839 4.60576 11.3891 3.611L10.682 4.31811ZM11.3891 4.31811L13.1569 2.55033L12.4498 1.84322L10.682 3.611L11.3891 4.31811ZM12 7.50008C12 8.74285 11.4969 9.86716 10.682 10.682L11.3891 11.3892C12.3839 10.3944 13 9.01872 13 7.50008H12ZM10.682 10.682C9.86715 11.4969 8.74283 12.0001 7.50004 12.0001V13.0001C9.01869 13.0001 10.3944 12.3839 11.3891 11.3892L10.682 10.682ZM10.682 11.3892L12.4498 13.1569L13.1569 12.4498L11.3891 10.682L10.682 11.3892ZM7.50004 12.0001C6.25727 12.0001 5.13296 11.497 4.31807 10.6821L3.61097 11.3892C4.60572 12.3839 5.98141 13.0001 7.50004 13.0001V12.0001ZM4.31807 10.6821C3.50318 9.86718 3.00004 8.74286 3.00004 7.50008H2.00004C2.00004 9.01873 2.6162 10.3944 3.61097 11.3892L4.31807 10.6821ZM2.55033 13.1569L4.31808 11.3892L3.61097 10.6821L1.84322 12.4498L2.55033 13.1569ZM8.00004 2.50007L8 -8.77353e-06L7 8.77353e-06L7.00004 2.50009L8.00004 2.50007ZM12.5001 8.00008L15 8L15 7L12.5 7.00008L12.5001 8.00008ZM2.50006 7.00008L1.564e-05 7L-1.564e-05 8L2.50003 8.00008L2.50006 7.00008ZM7.00004 12.5001L7 15L8 15L8.00004 12.5001L7.00004 12.5001Z"></path></svg>`,
    eye: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-2.73 0-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a5.04 5.04 0 01-.15.28 16.01 16.01 0 01-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-3.12 0-5.5-1.75-7.06-3.44a16 16 0 01-2.38-3.38v-.02h-.01L4 10l-.45-.22.01-.02a5.4 5.4 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.88 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16.01 16.01 0 012.38 3.38v.02h.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10 3.6 3.6 0 0013 13.56c2 0 3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zm7.85 12l.8-.8.7.71-.79.8a.5.5 0 000 .7l.59.59c.2.2.5.2.7 0l1.8-1.8.7.71-1.79 1.8a1.5 1.5 0 01-2.12 0l-.59-.59a1.5 1.5 0 010-2.12zM16.5 21.5l-.35-.35a.5.5 0 00-.07.07l-1 1.5-1 1.5a.5.5 0 00.42.78h4a2.5 2.5 0 001.73-.77A2.5 2.5 0 0021 22.5a2.5 2.5 0 00-.77-1.73A2.5 2.5 0 0018.5 20a3.1 3.1 0 00-1.65.58 5.28 5.28 0 00-.69.55v.01h-.01l.35.36zm.39.32l-.97 1.46-.49.72h3.07c.34 0 .72-.17 1.02-.48.3-.3.48-.68.48-1.02 0-.34-.17-.72-.48-1.02-.3-.3-.68-.48-1.02-.48-.35 0-.75.18-1.1.42a4.27 4.27 0 00-.51.4z"></path></svg>`
}