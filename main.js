const counter_item = document.querySelector('.counter-section');
const counters = document.querySelectorAll(".count");


function scrollAppear() {
    console.log('started')
    const speed = 2000;
    counters.forEach(counter => {
        const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerHTML;
        const inc = target / speed;
        if (count < target) {
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
        } else {
            counter.innerHTML = target;
        }
        }
        updateCount();
    });
}

let scrollShowed = false;
document.addEventListener('scroll', () => {
    const rect = counter_item.getBoundingClientRect();
    // console.log(window.innerHeight, rect.top)
    if (!scrollShowed && window.innerHeight-100 > rect.top) {
        scrollAppear()
    }
})
  