// экспортируйте sum и mult как именной export
export { sum, mult };

const sum = (a, b) => {
    console.log('implementation for sum');
    // ... implementation
};

const mult = (a, b) => {
    console.log('implementation for mult');
    // ... implementation
};

// экспортируйте calc как export по умолчанию

const calc = (expression) => {
    console.log('implementation for calc');
    // ... implementation
};

export default calc;