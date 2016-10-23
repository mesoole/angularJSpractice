"use strict";
// import { Service } from '@angular/core'
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCources = function () {
        return ["Course01", "Course02", "Course03"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map