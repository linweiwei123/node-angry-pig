/**
 * Created by yitala on 2017/12/2.
 */
import banner from '../assets/example.jpeg';
import one from '../assets/1.jpeg';
import two from '../assets/2.jpeg';
import three from '../assets/3.jpeg';

console.log(banner.preSrc);
// outputs: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhY....

// the object will have palette property, array will be sorted from most dominant colour to the least
console.log(banner.palette) // [ '#628792', '#bed4d5', '#5d4340', '#ba454d', '#c5dce4', '#551f24' ]

console.log(banner.src) // that's the original image URL to load later!
console.log(one.preSrc) // that's the original image URL to load later!
console.log(two.preSrc) // that's the original image URL to load later!
console.log(three.preSrc) // that's the original image URL to load later!
