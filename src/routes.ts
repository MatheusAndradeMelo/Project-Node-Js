import { Request, Response } from 'express';
import CreayeCourseService from './CreayeCourseService';

export function createCourse(request: Request, response: Response) {
    CreayeCourseService.execute({
        name: "NodeJs",
        educator: "Matheus",
        duration: 10
    });

    CreayeCourseService.execute({
        name: "ReactJs",
        educator: "Zidane",
    });

    return response.send();
}