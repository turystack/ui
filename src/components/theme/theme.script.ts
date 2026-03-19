import {
	BASE_COLOR_VARS,
	FONT_MAP,
	PRIMARY_COLOR_VARS,
	RADIUS_MAP,
	STYLE_PRESETS,
} from './theme.presets'
import { THEME_STORAGE_KEY } from './theme.storage'
import type { ThemeProps } from './theme.types'

export function getThemeScript(defaultTheme?: ThemeProps): string {
	const presetsJson = JSON.stringify(STYLE_PRESETS)
	const baseColorJson = JSON.stringify(BASE_COLOR_VARS)
	const primaryColorJson = JSON.stringify(PRIMARY_COLOR_VARS)
	const fontMapJson = JSON.stringify(FONT_MAP)
	const radiusMapJson = JSON.stringify(RADIUS_MAP)
	const defaultThemeJson = JSON.stringify(defaultTheme ?? {})
	const storageKey = JSON.stringify(THEME_STORAGE_KEY)

	return `(function(){try{var P=${presetsJson};var B=${baseColorJson};var C=${primaryColorJson};var F=${fontMapJson};var R=${radiusMapJson};var d=${defaultThemeJson};var s=localStorage.getItem(${storageKey});var t=s?JSON.parse(s):{};var m=Object.assign({},d,t);var p=m.style?P[m.style]:{};var r={baseColor:m.baseColor||p.baseColor,primaryColor:m.primaryColor||p.primaryColor,font:m.font||p.font,radius:m.radius||p.radius};var root=document.documentElement;var dark=root.classList.contains("dark");var mode=dark?"dark":"light";if(r.baseColor){var bv=B[r.baseColor][mode];for(var k in bv)root.style.setProperty(k,bv[k])}if(r.primaryColor){var pv=C[r.primaryColor][mode];for(var k in pv)root.style.setProperty(k,pv[k])}if(r.font)root.style.setProperty("--font-sans",F[r.font]);if(r.radius)root.style.setProperty("--t-radius",R[r.radius])}catch(e){}})();`
}
