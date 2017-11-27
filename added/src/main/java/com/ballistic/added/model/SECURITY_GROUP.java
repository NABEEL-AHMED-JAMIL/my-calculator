package com.ballistic.added.model;

/**
 * Created by Nabeel on 11/22/2017.
 */
public enum SECURITY_GROUP {

  DEVELOPER("NEW"), OPS("PENDING_ON_OPS"),
  INTERNAL_VALIDATOR("PENDING_INTERNAL_VALIDATION"),
  EXTERNAL_VALIDATOR("PENDING_EXTERNAL_VALIDATION"),
  LEAD("NEW"), MANAGER("NEW");

  private String security_group;

  SECURITY_GROUP(String aNew) {
    this.security_group = aNew;
  }

  public String getSecurity_group() {
    return security_group;
  }

  @Override
  public String toString() {
    return "SECURITY_GROUP{" + "security_group='" + security_group + '\'' + '}';
  }
}
