function color_generator(){
    const tailwindBgColors = [
        'bg-red-500',     // Red
        'bg-orange-500',  // Orange
        'bg-yellow-500',  // Yellow
        'bg-green-500',   // Green
        'bg-sky-500',     // Sky Blue
        'bg-blue-500',    // Blue
        'bg-violet-500',  // Violet
        'bg-red-200',
        'bg-orange-300',
        'bg-yellow-100',
        'bg-green-700',
        'bg-sky-300',
        'bg-blue-900',
        'bg-violet-100',
        'bg-gray-500',
        'bg-zinc-400',
        'bg-rose-600',
        'bg-indigo-400',
        'bg-emerald-300',
        'bg-teal-700'
    ]; 
	const color = tailwindBgColors[Math.floor(Math.random() * 20)]; 
    return color
}
const color_button = document.querySelector("#bg-color-btn");
color_button.addEventListener("click", function(){
    const bg_color_main = document.querySelector("#main-bg-color");
    let new_color = color_generator()
    bg_color_main.classList.remove(bg_color_main.classList[bg_color_main.classList.length - 1])
    bg_color_main.classList.add(new_color)
})





