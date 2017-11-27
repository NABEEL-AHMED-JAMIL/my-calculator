package com.ballistic.subtract.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SubtractController {

    @RequestMapping(value = "/first_number/{num1}/second_number/{num2}",
      method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String add(@PathVariable int num1, @PathVariable int num2){
        return Integer.toString( num1 - num2 );
    }
}
