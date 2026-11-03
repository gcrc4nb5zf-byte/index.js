class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;

        this.name = name;

        this.grades = grades;

        this.attendance = attendance;

    }

    getAverage() {

        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;

    }

    getGrade() {

        let avg = this.getAverage();

        if (avg >= 90) return "A";

        else if (avg >= 80) return "B";

        else if (avg >= 70) return "C";

        else if (avg >= 60) return "D";

        else if (avg >= 50) return "E";

        else return "F";

    }

    getResult() {

        return this.getAverage() >= 50 && this.attendance >= 75

            ? "ناجح"

            : "يحتاج مراجعة";

    }

}

// Students List

const studentsList = [

    new Student(1, "Ahmed", [45, 44, 46], 80),

    new Student(2, "Mona", [47, 48, 46], 90),

    new Student(3, "Sara", [70, 75, 80], 85),

    new Student(4, "Omar", [85, 90, 88], 95)

];

// Filter students with average between 40 and 49

const weakStudents = studentsList.filter(student => {

    return student.getAverage() >= 40 &&

           student.getAverage() <= 49;

});

// Add 5 bonus marks using map

const updatedStudents = weakStudents.map(student => {

    return {

        name: student.name,

        average: student.getAverage() + 5,

        attendance: student.attendance

    };

});

// Calculate new averages using reduce

const totalAverage = updatedStudents.reduce((sum, student) => {

    return sum + student.average;

}, 0);

const finalAverage = updatedStudents.length > 0

    ? totalAverage / updatedStudents.length

    : 0;

console.log("Updated Students:", updatedStudents);

console.log("Average after bonus:", finalAverag

console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {

    console.log("--------------------");

    console.log("Name:", student.name);

    console.log("Average:", student.getAverage());

    console.log("Grade:", student.getGrade());

    console.log("Result:", student.getResult());

});

console.log("===== WEAK STUDENTS =====");

console.log(weakStudents);

console.log("===== UPDATED AVERAGES =====");

console.log(updatedStudents);

console.log("Final Average:", finalAverage);
