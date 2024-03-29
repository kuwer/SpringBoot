package com.example.webapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @RequestMapping("hello")
    @ResponseBody
    public String sayHello() {
        return "Hello hi";
    }

    @RequestMapping("Hello-jsp")
    public String sayHelloJsp() { return "sayHello";}


}
