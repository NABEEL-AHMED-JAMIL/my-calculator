package com.ballistic.added.model;

/**
 * Created by Nabeel on 11/22/2017.
 */
public enum SEVERITY_REF {

  CRITICAL(3, "CRITICAL"),
  HIGH(2, "HIGH"),
  MEDIUM(1, "MEDIUM"),
  LOW(0, "LOW");

  private Integer SEVERITY_LEVEL;
  private String SEVERITY_NAME;

  SEVERITY_REF(Integer level, String name ) {
    this.SEVERITY_LEVEL = level;
    this.SEVERITY_NAME = name;
  }

  public Integer getSEVERITY_LEVEL() {
    return SEVERITY_LEVEL;
  }

  public String getSEVERITY_NAME() {
    return SEVERITY_NAME;
  }

  @Override
  public String toString() {
    return "SEVERITY_REF{" + "SEVERITY_LEVEL=" + SEVERITY_LEVEL + ", SEVERITY_NAME='" + SEVERITY_NAME + '\'' + '}';
  }
}
