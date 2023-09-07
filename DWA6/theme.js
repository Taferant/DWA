
const css = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
      },
      night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
      }

}

document.documentElement.style.setProperty('--color-dark', css.dark);
document.documentElement.style.setProperty('--color-light', css.light);