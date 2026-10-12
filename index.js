class Book {
    static count = 0;

    constructor(title) {
        this.title = title;
        Book.count++;
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    static createIntern(name) {
        return new Employee(name, 20000);
    }
}

class MathUtils {
    static sum(numbers) {
        return numbers.reduce((sum, number) => sum + number, 0);
    }

    static average(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
        return MathUtils.sum(numbers) / numbers.length;
    }

    static max(numbers) {
        return Math.max(...numbers);
    }
}

new Book("Война и мир");
new Book("Мастер и Маргарита");
new Book("Герой нашего времени");

const intern = Employee.createIntern("Анна");
const numbers = [10, 5, 20, 15];

console.log(Book.count);
console.log(intern);
console.log(MathUtils.sum(numbers));
console.log(MathUtils.average(numbers));
console.log(MathUtils.max(numbers));

