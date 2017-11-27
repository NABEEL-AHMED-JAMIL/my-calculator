package com.ballistic.added.rest;

import com.ballistic.added.captcha.ICaptchaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;


@RestController
public class AddController {

  private final static Logger LOGGER = LoggerFactory.getLogger(AddController.class);

  @Autowired
  private ICaptchaService captchaService;


  @RequestMapping(value = "/first_number/{num1}/second_number/{num2}",
      method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public String add(@PathVariable int num1, @PathVariable int num2){
    return Integer.toString( num1 + num2 );
  }


  @RequestMapping(value = "/login/", method = RequestMethod.POST, produces = MediaType.ALL_VALUE)
  public String recaptcha(@RequestBody String token){
    captchaService.processResponse(token);
    return "Sucesss";
  }
}
