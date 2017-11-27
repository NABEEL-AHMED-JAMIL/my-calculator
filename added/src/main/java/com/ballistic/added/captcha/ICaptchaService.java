package com.ballistic.added.captcha;

/**
 * Created by Nabeel on 11/23/2017.
 */
public interface ICaptchaService {

  void processResponse(final String response) throws ReCaptchaInvalidException;

  String getReCaptchaSite();

  String getReCaptchaSecret();

  String getUrlReCaptchaSecret();
}
