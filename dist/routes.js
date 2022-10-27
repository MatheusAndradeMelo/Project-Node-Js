"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreayeCourseService_1 = __importDefault(require("./CreayeCourseService"));
function createCourse(request, response) {
    CreayeCourseService_1.default.execute({
        name: "NodeJs",
        educator: "Matheus",
        duration: 10
    });
    CreayeCourseService_1.default.execute({
        name: "ReactJs",
        educator: "Zidane",
    });
    return response.send();
}
exports.createCourse = createCourse;
