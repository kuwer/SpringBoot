package com.gettingStarted.learnspringboot;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {
    @RequestMapping("/Courses")
    public List<Courses> retreiveAllCourses() {
        return Arrays.asList(
                new Courses(1, "kuwer", "okay"),
                new Courses(2, "Ankur", "okay")
        );
    }
}
