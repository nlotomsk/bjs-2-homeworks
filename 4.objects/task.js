function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ("excluded" in this) {
    return;
  } else {
    if ("marks" in this) {
    this.marks.push(...marks);
    }
  }
}

Student.prototype.getAverage = function () {
  if ("marks" in this) {
    if (this.marks.length !== 0) {
      this.marks.reduce((acc, item, index)=> {
        acc+=item;
        if (index === this.marks.length - 1){
          avg = acc / this.marks.length;
            return;
            }
            return acc;
            },0);
      } else {
        return 0;
      }
    return avg;
  }else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
