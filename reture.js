function generateArray(size, min = 1, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1;
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function productArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function reverseArray(arr) {
    return arr.slice().reverse();
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function shuffleArray(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function rotateLeft(arr, times) {
    return arr.slice(times).concat(arr.slice(0, times));
}

function rotateRight(arr, times) {
    return arr.slice(-times).concat(arr.slice(0, -times));
}

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

function findSecondLargest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

function findSecondSmallest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

function countOccurrences(arr, target) {
    return arr.filter(num => num === target).length;
}

function removeElement(arr, target) {
    return arr.filter(num => num !== target);
}

function replaceElement(arr, oldVal, newVal) {
    return arr.map(num => (num === oldVal ? newVal : num));
}

function findMedian(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function findMode(arr) {
    let freq = {};
    let maxCount = 0, mode = null;
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mode = num;
        }
    }
    return mode;
}

function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function power(base, exp) {
    return Math.pow(base, exp);
}

function main() {
    const size = 50;
    const array = generateArray(size, 1, 100);
    
    console.log("Original Array:", array);
    console.log("Quick Sort:", quickSort([...array]));
    console.log("Merge Sort:", mergeSort([...array]));
    
    console.log("Max:", findMax(array));
    console.log("Min:", findMin(array));
    console.log("Median:", findMedian(array));
    console.log("Mode:", findMode(array));
    
    console.log("Reversed:", reverseArray(array));
    console.log("Unique:", removeDuplicates(array));
    console.log("Shuffled:", shuffleArray([...array]));

    console.log("Rotated Left:", rotateLeft([...array], 3));
    console.log("Rotated Right:", rotateRight([...array], 3));

    console.log("Fibonacci (10 terms):", fibonacci(10));
    console.log("Primes up to 50:", findPrimes(50));
    
    console.log("Sum:", sumArray(array));
    console.log("Product:", productArray(array));

    console.log("Second Largest:", findSecondLargest(array));
    console.log("Second Smallest:", findSecondSmallest(array));

    console.log("Factorial of 5:", factorial(5));
    console.log("GCD of 12 and 18:", gcd(12, 18));
    console.log("LCM of 12 and 18:", lcm(12, 18));
}

main();
